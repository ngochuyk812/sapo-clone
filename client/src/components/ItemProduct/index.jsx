import React from 'react';
import PropTypes from 'prop-types';
import {FaUserCircle} from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux';
import {addItemProduct} from '../../redux/billSlice'
import './style.css'
Index.propTypes = {
  
};

function Index(props) {
  const dispatch =useDispatch()
  const handleCustomer =()=>{
    props.handleOpenList()
    const action = addItemProduct(props.data)
    dispatch(action)
  }
  return (
    <div className="item-search-data" style={{justifyContent:'space-between'}} onClick={handleCustomer}>
               <div className='left-item-product' >
                  <FaUserCircle className='icon-search-data'/>
                  <div className="main-item-data">
                      <p className='name-kh'>{props.data.name}</p>
                      <p className='mskh title-inventory'>{props.data.codeProduct}</p>

                  </div>
               </div>
                <div className='info-product'>
                    <p>Giá: <span style={{fontWeight:'500'}}>{props.data.price}</span></p>
                    <span className='inventory'><span className='title-inventory'>Tồn:</span> {props.data.wareHouse} | <span className='title-inventory'>Có thể bán:</span> {props.data.wareHouse}</span>
                </div>
               <div>
                 
               </div>
    </div>
  );
}

export default Index;