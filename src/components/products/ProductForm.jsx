import React from "react"
import { Row, Col, Form, Input, InputNumber, Button, Select, Grid, Space } from 'antd';

import categories from "../../constants/categories";
import "./ProductForm.css";

const { Option } = Select;
const { useBreakpoint } = Grid;

const layout = {
  xs: { span: 24 },
  sm: { span: 24 },
  md: { span: 12 },
  lg: { span: 12 }
}

const ProductForm = ({ formFields, onFinish }) => {

  const [form] = Form.useForm();
  const { xs } = useBreakpoint();

  const isUpdate = form.getFieldValue("id") || false;

  return (
    <Form fields={formFields} form={form} name="control-hooks" layout="vertical" requiredMark={false} onFinish={onFinish}>
      <Row gutter={[16, 16]}>
        <Col {...layout}>
          <Form.Item
            name="name"
            label="Ürün Adı"
            rules={[{ required: true, message: "Ürün adı boş bırakılamaz." }]}
          >
            <Input />
          </Form.Item>
        </Col>

        <Col {...layout}>
          <Form.Item
            name="categoryID"
            label="Kategori"
            rules={[{ required: true, message: "Kategori boş bırakılamaz." }]}
          >
            <Select placeholder="Seçiniz"
              filterOption={(input, option) =>
                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
              }
              allowClear
              showSearch
            >
              {categories.map(({ id, name }) => {
                return <Option key={id} value={id} >{name}</Option>
              })}
            </Select>
          </Form.Item>
        </Col>
      </Row>

      <Row gutter={[16, 16]}>
        <Col {...layout}>
          <Form.Item
            name="price"
            label="Ürün Fiyatı"
            rules={[{ required: true, message: "Ürün fiyatı boş bırakılamaz." }]}
          >
            <Input />
          </Form.Item>
        </Col>
        <Col {...layout}>
          <Form.Item
            name="numberOfStock"
            label="Stok Adeti"
            rules={[{ required: true, message: "Stok miktarı boş bırakılamaz." }]}
          >
            <InputNumber min={1} max={1000} style={{ width: "100%" }} />
          </Form.Item>
        </Col>
      </Row>

      <Form.Item name="id" noStyle>
        <Input type="hidden" />
      </Form.Item>

      <Row type="flex" justify={xs ? "center" : "end"} >
        <Col className="button-group">
          <Space>
            {!isUpdate && (
              <Button type="default" onClick={() => form.resetFields()}>
                Temizle
              </Button>
            )}
            <Button type="primary" htmlType="submit">
              {isUpdate ? "Güncelle" : "Kaydet"}
            </Button>
          </Space>
        </Col>
      </Row>
    </Form>
  )
}

export default ProductForm;