import categories from "./categories";

const productColumns = [
  {
    title: 'Ürün Adı',
    dataIndex: 'name',
    key: 'name'
  },
  {
    title: 'Kategori',
    dataIndex: 'categoryID',
    key: 'category',
    render: categoryId => {
      const findCategory = categories.find((category) => category.id === categoryId)
      return findCategory?.name || "";
    }
  },
  {
    title: 'Fiyat',
    dataIndex: 'price',
    key: 'price',
    render: price => {
      return `${price} `;
    }
  },
  {
    title: 'Stok Durumu',
    dataIndex: 'numberOfStock',
    key: 'numberOfStock'
  }
];

export default productColumns;