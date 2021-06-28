import React from "react";
import { Modal } from "antd";

const ProductModal = ({ toogleModal, children, ...props }) => {
  return (
    <Modal
      footer={null}
      destroyOnClose
      {...props}
    >
      {children}
    </Modal>
  )
}

export default ProductModal;