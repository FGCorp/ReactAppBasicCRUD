import { fetch } from "."

const getAllProducts = () => {
  return fetch.get('/products');
}

const getProductById = (id) => {
  return fetch.get(`/products/${id}`);
}

const addProduct = (data) => {
  return fetch.post('/products/add', data);
}

const updateProduct = (data) => {
  return fetch.post('/products/update', data);
}

const deleteProductById = (id) => {
  return fetch.delete(`/products/delete/${id}`);
}

export { getAllProducts, getProductById, addProduct, updateProduct, deleteProductById }