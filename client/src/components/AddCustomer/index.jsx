import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './style.css'
import { Form } from 'react-bootstrap';
import { AiOutlineClose } from "react-icons/ai";
import SelectItem from './SelectItem'
import { useDispatch, useSelector } from 'react-redux';
import {addItemCustomer} from '../../redux/customerSlice'
import { useForm } from "react-hook-form";

Index.propTypes = {
    
};

function Index(props) {
  
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [mskh, setMskh] = useState('');
  const [msnv, setMsnv] = useState('');
  const [email, setEmail] = useState('');
  const [taxCode, setTaxCode] = useState('');
  const [gender, setGender] = useState('');
  const [typeGuest, setTypeGuest] = useState('');


  const dataGioiTinh = ['Nam', "Nữ"]
  const dataLoaiKhachHang = ['Vip', 'Bán lẻ', 'Bán buôn']
  const handleClose = ()=>{
      props.checkClost(false)
  }
  const clearInput =()=>{
    setName('')
    setPhone('')
    setAddress('')
    setMskh('')
    setMsnv('')
    setEmail('')
    setTaxCode('')
    setGender('')
    setTypeGuest('')
  }
  const handleAddCustomer =()=>{
    let item = {
      name,
      phone,
      address,
      mskh,
      msnv,
      email,
      taxCode,
      gender,
      typeGuest
    }
    let action =addItemCustomer(item)
    dispatch(action)
    clearInput()
    handleClose()

  }
  const handleGender = (value)=>{
    setGender(value)
  }
  const handleTypeGuest =(value)=>{
    setTypeGuest(value)
  }
      return(
    <div className={props.checkHide? "addcustomer " : "addcustomer hide"}>
        <div className="contaienr-addcustomer">
          <div className="title-addcustomer">
          <p>Thêm mới khách hàng</p>
          <AiOutlineClose className='icon-exit' onClick={handleClose}/>
          </div>
          <hr />
          <div className="form-addcustomer">
          <form action="" method="post">
            <div className="formname-sdt">
                <div className="form-group yeucau">
                <label htmlFor="">Tên khách hàng</label>
                  <div className="customer-info-content">
                <div className="input-main">
                  <input type="text" onChange={(e)=>setName(e.target.value)} placeholder='Nhập tên khách hàng' />
                    </div>
                </div>
                </div>

                <div className="form-group">
                <label htmlFor="">Số điện thoại</label>
                  <div className="customer-info-content">
                <div className="input-main">
                  <input type="text" onChange={(e)=>setPhone(e.target.value)} placeholder='+84' />
                    </div>
                </div>
                </div>
            </div>
            
            <div className="form-group">
                <label htmlFor="">Địa chỉ cụ thể</label>
                  <div className="customer-info-content">
                <div className="input-main">
                  <input type="text" onChange={(e)=>setAddress(e.target.value)} placeholder='Nhập địa chỉ cụ thể(số nhà,..)' />
                    </div>
                </div>
              </div>

              <div className="formname-sdt">
                <div className="form-group">
                <label htmlFor="">Mã khách hàng</label>
                  <div className="customer-info-content">
                <div className="input-main">
                  <input type="text" onChange={(e)=>setMskh(e.target.value)} placeholder='Mã mặc định' />
                    </div>
                </div>
                </div>

                <div className="form-group">
                <label htmlFor="">Nhân viên phụ trách</label>
                  <div className="customer-info-content">
                <div className="input-main">
                  <input type="text" onChange={(e)=>setMsnv(e.target.value)} placeholder='Nhập mã nhân viên' />
                    </div>
                </div>
                </div>
            </div>

            <div className="formname-sdt">
                <div className="form-group">
                <label htmlFor="">Email</label>
                  <div className="customer-info-content">
                <div className="input-main">
                  <input type="text" onChange={(e)=>setEmail(e.target.value)} placeholder='abc@gmail.com' />
                    </div>
                </div>
                </div>

                <div className="form-group">
                <label htmlFor="">Mã số thuế</label>
                  <div className="customer-info-content">
                <div className="input-main">
                  <input type="text" onChange={(e)=>setTaxCode(e.target.value)} placeholder='Nhập mã thuế' />
                    </div>
                </div>
                </div>
            </div>
            <div className="formname-sdt" style={{marginBottom:0}}>
            <SelectItem data= {dataGioiTinh} handleValue = {handleGender} title = 'Giới tính'></SelectItem>
            <SelectItem data= {dataLoaiKhachHang }  handleValue = {handleTypeGuest}  title = 'Loại khách'></SelectItem>

            
            
            
            
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