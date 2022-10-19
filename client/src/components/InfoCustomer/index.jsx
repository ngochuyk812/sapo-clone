import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './style.css'
import { BiSearch } from "react-icons/bi";
import { RiProfileLine } from "react-icons/ri";
import { FaUserCircle } from "react-icons/fa";
import Search from '../Search'
import AddCustomer from '../AddCustomer'
import { useSelector } from 'react-redux';
import NotItemCustomer from './NotItemCustomer';
import ShowItem from './ShowItem';

Index.propTypes = {
    
};

function Index(props) {
    const [openList, setOpenList] = useState(false);
    const [openAddCustom, setOpenAddCustom] = useState(false);
    
    const [itemSelect, setItem] = useState('');
    
    const billCustomer = useSelector(state => state.bill.customer);
    const arrCustomer = useSelector(state => state.customers);

    const handleOpenList =()=>{
        if(!openList){
            setOpenList(true);
            
        }else{
            setOpenList(false);

        }
    }
    const handleAddCustom = (rs)=>{
        setOpenAddCustom(rs)
    }
    
      return(
    
    <div className='resultday infowarehouse  title'>
            <div className={openList ? 'topoutside' : 'topoutside hide'} onClick={handleOpenList}></div>
            <AddCustomer  checkHide ={openAddCustom} checkClost = {handleAddCustom}></AddCustomer>
            
        <div className="top-resultday" style={billCustomer ? {border: "none"}: {}}>
           
            <h5 style={billCustomer ? {marginBottom: '10px'}: {}} >  {billCustomer ? <FaUserCircle />: ''} Thông tin khách hàng</h5>
            
        </div>

        <div className="customer-info-content">
            {billCustomer ? <ShowItem data = {billCustomer}/> :
                <div>
                    <div className="input-main">
                        <input type="text" placeholder='Tìm theo tên, SĐT, mã khách hàng... (F4)' onClick={()=>handleOpenList()}/>
                        <BiSearch className='icon-search'/>
                        <div className="container-info-customer">
                        <Search checkOpen = {openList} handleAdd = {handleAddCustom} data = {arrCustomer} title = {'Thêm khách hàng'}   handleOpenList = {handleOpenList}></Search>
                        </div>
                    </div>
                    <NotItemCustomer/>
                </div>
            
            }
            
        </div>
    </div>
    );
}

export default Index;