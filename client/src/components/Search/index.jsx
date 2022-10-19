import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './style.css';
import {HiPlusCircle} from 'react-icons/hi'
import { useDispatch, useSelector } from 'react-redux';
import ItemCustomer from '../ItemCustomer'
import ItemProduct from '../ItemProduct'
Index.propTypes = {
    
};

function Index(props) {
    const[getTab, setTab] = useState(1);
    const handleTab = (param)=>{
        setTab(param)
    }
    
    const data = props.data || []  
    const Item = props.title === 'Thêm mới sản phẩm' ? ItemProduct : ItemCustomer
    console.log(data);  
    const handleOpenAddCustomer = ()=>{
        props.handleAdd(true)
    }
    return (
        <div className={props.checkOpen ? "search-data ": "search-data hide"} >
            <div className="item-add">
                <p className='colorAqua' onClick={handleOpenAddCustomer} ><HiPlusCircle className='icon-add-payment' />{props.title}</p>       
            </div> 
            <hr /> 
            {data.map((tmp,index)=>{
                    return (
                        <Item key={index} data = {tmp} handleOpenList={props.handleOpenList}/>
                    )
                    
                    
                    
                
            })
            }
           
         
        </div>
    );
}

export default Index;