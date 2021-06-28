import React from "react";
import { Table } from "antd";

import columns from "../../constants/productColumns";

const ProductTable = ({ rows, customColumns, ...props }) => {
  return (
    <Table
      columns={[...columns, ...customColumns]}
      dataSource={rows}
      bordered
      locale={{ emptyText: "Henüz hiç ürün eklenmemiş." }}
      {...props}
    />
  )
}

export default ProductTable;
