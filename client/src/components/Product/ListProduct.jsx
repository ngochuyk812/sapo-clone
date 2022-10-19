import React, { useEffect, useState } from 'react';
import { Table, Tag, Space } from 'antd';
import 'antd/dist/antd.css';
import { useSelector } from 'react-redux';

const columns = [
  {
    title: 'Tên sản phẩm',
    dataIndex: 'name',
    key: 'name',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Mã sản phẩm',
    dataIndex: 'codeProduct',
    key: 'codeProduct',
  },
 
  {
    title: 'Loại sản phẩm',
    dataIndex: 'productType',
    key: 'productType',
  } ,
  {
    title: 'Giá',
    dataIndex: 'price',
    key: 'price',
  },
  {
    title: 'Có thể bán',
    dataIndex: 'wareHouse',
    key: 'wareHouse',
  }
];


function ListProduct(props) {
  const products = useSelector(state => state.products) || [];
  
  
  return (
    <Table columns={columns} dataSource={products} />

  );
}





export default ListProduct;