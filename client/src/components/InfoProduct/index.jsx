
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './style.css'
import { BiSearch } from "react-icons/bi";
import { RiProfileLine } from "react-icons/ri";
import { FaUserCircle } from "react-icons/fa";
import Search from '../Search'
import AddProduct from '../AddProduct'
import { useSelector } from 'react-redux';
import NotItem from './NotItem';
import ShowItem from './ShowItem';

Index.propTypes = {
    
};

function Index(props) {
    const dataSelect = ["Giá bán lẻ", "Giá bán buôn"]

    const [openList, setOpenList] = useState(false);
    const [openAddCustom, setOpenAddCustom] = useState(false);
    
    const [itemSelect, setItem] = useState('');
    
    const products = useSelector(state => state.products);
    const bill = useSelector(state => state.bill);
    const data = bill.product || null
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
            <AddProduct  checkHide ={openAddCustom} checkClost = {handleAddCustom}></AddProduct>
            
        <div className="top-resultday">
           
            <h5  >  Thông tin sản phẩm</h5>
            
        </div>

        <div className="customer-info-content">
           
                <div>
                    <div className="input-main">
                        <input type="text" placeholder='Tìm theo tên, mã SKU, hoặc quét mã Barcode...(F3) ' onClick={()=>handleOpenList()}/>
                        <BiSearch className='icon-search'/>
                        <div className="container-info-customer">
                        <Search checkOpen = {openList} handleAdd = {handleAddCustom} data = {products} title = {'Thêm mới sản phẩm'}   handleOpenList = {handleOpenList}></Search>
                        </div>
                    </div>
                    {data ? <ShowItem data = {data}/> : <NotItem/>}
                    
                </div>
          
            
        </div>
    </div>
    );
}

export default Index;