import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './style.css'
import { Form } from 'react-bootstrap';
import { AiOutlineClose } from "react-icons/ai";
import SelectItem from './SelectItem'
import { useDispatch, useSelector } from 'react-redux';
import {addProduct} from '../../redux/productSlice'
import { useForm } from "react-hook-form";

Index.propTypes = {
    
};

function Index(props) {
  
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [productType, setProductType] = useState('');
  const [codeProduct, setCodeProduct] = useState('');
  const [price, setPrice] = useState('');
  const [capital, setCapital] = useState('');
  const [wareHouse, setWareHouse] = useState('');
  const [mass, setMass] = useState('');


  const dataLoaiHang = ['Áo', "Quần"]
  const handleClose = ()=>{
      props.checkClost(false)
  }
  const clearInput =()=>{
   
  }
  const handleAddCustomer =()=>{
    let item = {
      name,
      productType,
      codeProduct,
      price,
      capital,
      wareHouse,
      mass, 
    }
    let action =addProduct(item)
    dispatch(action)
    clearInput()
    handleClose()

  }
  const handleProductType = (value)=>{
    setProductType(value)
  }

      return(
    <div className={props.checkHide? "addcustomer " : "addcustomer hide"}>
        <div className="contaienr-addcustomer" style={{height: '500px'}}>
          <div className="title-addcustomer">
          <p>Thêm mới sản phẩm</p>
          <AiOutlineClose className='icon-exit' onClick={handleClose}/>
          </div>
          <hr />
          <div className="form-addcustomer">
          <form action="" method="post">
          <div className="form-group">
                <label htmlFor="">Tên sản phẩm</label>
                  <div className="customer-info-content">
                <div className="input-main">
                  <input type="text" onChange={(e)=>setName(e.target.value)} placeholder='Nhập tên sản phẩm' />
                    </div>
                </div>
              </div>
            <div className="formname-sdt">
                <div className="form-group yeucau">
                <label htmlFor="">Mã sản phẩm/SKU</label>
                  <div className="customer-info-content">
                <div className="input-main">
                  <input type="text" onChange={(e)=>setCodeProduct(e.target.value)} placeholder='Nhập mã' />
                    </div>
                </div>
                </div>

                <div className="form-group">
                <label htmlFor="">Loại sản phẩm</label>
                  <div className="customer-info-content">
                <div className="input-main">
                <SelectItem data= {dataLoaiHang } handleValue = {handleProductType} title = ''></SelectItem>
                    </div>
                </div>
                </div>
            </div>
            
           

              <div className="formname-sdt">
                <div className="form-group">
                <label htmlFor="">Giá bán lẻ</label>
                  <div className="customer-info-content">
                <div className="input-main">
                  <input type="text" onChange={(e)=>setPrice(e.target.value)} placeholder='Nhập giá sản phẩm' />
                    </div>
                </div>
                </div>

                <div className="form-group">
                <label htmlFor="">Giá vốn</label>
                  <div className="customer-info-content">
                <div className="input-main">
                  <input type="text" onChange={(e)=>setCapital(e.target.value)} placeholder='Nhập vốn sản phẩm' />
                    </div>
                </div>
                </div>
            </div>

            <div className="formname-sdt">
                <div className="form-group">
                <label htmlFor="">Tồn kho</label>
                  <div className="customer-info-content">
                <div className="input-main">
                  <input type="text" onChange={(e)=>setWareHouse(e.target.value)} placeholder='0' />
                    </div>
                </div>
                </div>

                <div className="form-group">
                <label htmlFor="">Khối lượng (dùng tính phí vận chuyển)</label>
                  <div className="customer-info-content">
                <div className="input-main">
                  <input type="text" onChange={(e)=>setMass(e.target.value)} placeholder='Đơn vị: gam' />
                    </div>
                </div>
                </div>
            </div>
            
            
          </form>
          <div className="buttonaddcustom">
            <button className='bt-cannel'  onClick={handleClose}>Thoát</button>
            <button className='bt-add-customer ' onClick={handleAddCustomer}>Thêm</button>

          </div>
          </div>
        </div>
    </div>
    );
}

export default Index;