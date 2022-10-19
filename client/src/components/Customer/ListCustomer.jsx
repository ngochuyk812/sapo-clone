import React, { useEffect, useState } from 'react';
import { Table, Tag, Space } from 'antd';
import 'antd/dist/antd.css';
import { useSelector } from 'react-redux';

const columns = [
  
  {
    title: 'Tên khách hàng',
    dataIndex: 'name',
    key: 'name',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Mã khách hàng',
    dataIndex: 'mskh',
    key: 'mskh',
  },
 
  {
    title: 'Địa chỉ',
    dataIndex: 'address',
    key: 'address',
  } ,
  {
    title: 'Số điện thoại',
    dataIndex: 'phone',
    key: 'phone',
  },
  {
    title: 'Có thể bán',
    dataIndex: 'wareHouse',
    key: 'wareHouse',
  }
];


function ListProduct(props) {
  const products = useSelector(state => state.products) || [];
  const newProducts = [];

  
  return (
    <Table columns={columns} dataSource={products} />

  );
}





export default ListProduct;