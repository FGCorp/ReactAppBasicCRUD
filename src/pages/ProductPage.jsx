import React, { useEffect, useState } from "react";
import { Card, Button, Space, Tooltip, Popconfirm } from 'antd';
import { EditOutlined, DeleteOutlined, FileAddOutlined, QuestionCircleOutlined } from "@ant-design/icons"

import { ProductForm, ProductTable, ProductModal } from "../components/products";
import { getAllProducts, getProductById, addProduct, updateProduct, deleteProductById } from "../services/ProductService";

function ProductPage() {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const [formFields, setFormFields] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);

  useEffect(() => {
    getAllProducts()
      .then((products) => {
        setProducts(products)
      })
      .finally(() => setLoading(false))
  }, [])

  const toogleModal = () => setIsModalVisible(isModalVisible => !isModalVisible)

  const onAdd = async () => {
    setFormFields([]);
    setIsModalVisible(true);
  }

  const onUpdate = (id) => {
    getProductById(id)
      .then(products => {
        const getFormFields = Object.keys(products).map(key => ({
          name: [key],
          value: products[key],
        }));
        return getFormFields;
      })
      .then(getFormFields => {
        setFormFields(getFormFields);
        setIsModalVisible(true);
      })
  }

  const onDelete = (id) => {
    deleteProductById(id)
      .then(isDeleted => {
        if (isDeleted) {
          const filterProducts = products.filter(item => item.id !== id)
          setProducts(filterProducts)
        }
      })
  }

  const onFinish = async (values) => {
    const isUpdate = values?.id || false;
    const data = { ...values, price: parseFloat(values.price) }

    if (isUpdate)
      await updateProduct(data)
    else
      await addProduct(data)

    getAllProducts()
      .then(products => setProducts(products))
      .finally(() => toogleModal())
  };

  const customColumns = [
    {
      key: 'id',
      title: 'İşlemler',
      dataIndex: 'id',
      render: id => renderActionButtons({ id, onDelete, onUpdate })
    }
  ];

  const AddProductButton = () => (
    <Button type="primary" size="small" onClick={onAdd}>
      <FileAddOutlined /> Yeni Ürün
    </Button>
  )

  return (
    <>
      <Card
        title="Ürünler"
        loading={loading}
        extra={<AddProductButton />}
        bordered
      >
        <ProductTable
          rowKey="id"
          rows={products}
          customColumns={customColumns}
        />
      </Card>

      <ProductModal
        title={formFields.length ? "Ürünü Düzenle" : "Yeni Ürün"}
        visible={isModalVisible}
        onCancel={toogleModal}
      >
        <ProductForm
          formFields={formFields}
          onFinish={onFinish}
        />
      </ProductModal>
    </>
  );
}



const renderActionButtons = ({ id, onDelete, onUpdate }) => {
  return (
    <Space>
      <Tooltip placement="top" title="Düzenle">
        <Button size="small" type="primary" onClick={() => onUpdate(id)}>
          <EditOutlined />
        </Button>
      </Tooltip>

      <Tooltip placement="top" title="Sil">
        <Popconfirm
          title="Silmek istediğinizden emin misiniz?"
          icon={<QuestionCircleOutlined style={{ color: 'red' }} />}
          okText="Onayla"
          cancelText="İptal"
          onConfirm={() => onDelete(id)}
        >
          <Button size="small" danger>
            <DeleteOutlined />
          </Button>
        </Popconfirm>
      </Tooltip>
    </Space>
  )
}

export default ProductPage;
