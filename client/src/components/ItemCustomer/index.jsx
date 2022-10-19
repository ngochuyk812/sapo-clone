import React from 'react';
import PropTypes from 'prop-types';
import {FaUserCircle} from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux';
import {addItemCustomer} from '../../redux/billSlice'

Index.propTypes = {
  
};

function Index(props) {
  const dispatch =useDispatch()
  const handleCustomer =()=>{
    props.handleOpenList()
    const action = addItemCustomer(props.data)
    dispatch(action)
  }
  return (
    <div className="item-search-data" onClick={handleCustomer}>
                <FaUserCircle className='icon-search-data'/>
                <div className="main-item-data">
                    <p className='name-kh'>{props.data.name}</p>
                    <p className='mskh'>{props.data.mskh}</p>

                </div>
    </div>
  );
}

export default Index;