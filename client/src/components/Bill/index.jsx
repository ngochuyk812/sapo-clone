import React, { useState,useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import './style.css'
import notcustomer from '../../img/notcustomer.svg'
import { BiSearch } from "react-icons/bi";
import { AiFillGift, AiOutlineClose } from "react-icons/ai";
import { FaCaravan } from "react-icons/fa";
import { BsBicycle, BsShop } from "react-icons/bs";
import { IoIosClose, IoIosTimer } from "react-icons/io";

import Select from '../Select'
import { addTags, removeTags, setNote, setDelivery } from '../../redux/billSlice';
import {  } from "react-icons/gr";
import { useDispatch, useSelector } from 'react-redux';
import TotalBill from './TotalBill';
Index.propTypes = {
    
};

function Index(props) {
    const bill = useSelector(state => state.bill);
    const [activeDelivery, setActiveDelivery] = useState("");
    const itemsTag = bill.tags || [];
    const dispatch = useDispatch();
    const arrDelivery = [
        {
            title: "Đẩy qua hãng vận chuyển",
            icon: FaCaravan
        },
        {
            title: "Tự gọi shipper",
            icon: BsBicycle
        },
        {
            title: "Nhận tại cửa hàng",
            icon: BsShop
        },
        {
            title: "Giao hàng sau",
            icon: IoIosTimer
        },
    
    ]
    useEffect(()=>{
        console.log("tag",itemsTag);
    })
    const refInput = useRef();
    const [resetInput, setInput] = useState('')
    const [countMethodPayment,setCountMethdPayment] = useState([])
    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            let value = event.target.value
            if(value.length !=0){
                let checkLoop = false
                for (let index = 0; index < itemsTag.length; index++) {
                    const element = itemsTag[index];
                    if(element === value){
                        checkLoop = true
                        break
                    }
                }
                if(!checkLoop){
                    let action =addTags(value)
                    dispatch(action)

                }
            }
            setInput('')
        }
      }
      
      const addPayment =(random)=>{
        let newArr = [...countMethodPayment,random]
        setCountMethdPayment(newArr)
      }
      const delItemTags = (index)=>{
        let action =removeTags(index)
        dispatch(action)
       
      }
      const hanldeInput= (e)=>{
        
        setInput( e.target.value)
      }
     
      const handleNote =(e)=>{
        let action =setNote(e.target.value)
        dispatch(action)
        
      }
      const handleDelivery = (delivery)=>{
        let action =setDelivery(delivery)
        setActiveDelivery(delivery);
        dispatch(action)
      }

      
    return (
    <div className="bill">
        <hr />
        <div className="apply-promotion">
            <span>
                <AiFillGift className='icon-gift'/>
                <p>Áp dụng chương trình khuyến mại</p>
            </span>
        </div>
        <hr />
        <div className="container-bill">
            <div className="left-bill">
                <div className="tags">
                    <p className='name-tags'>Tags</p>
                    <div className="content-tags">
                        {itemsTag.length ===0 ? "" :
                        itemsTag.map((item,index)=>{
                            return(
                             <div key={item} className="item-tags">
                             <p style={{paddingTop:"0"}}>{item}</p>
                             <AiOutlineClose className='icon-del-tags' onClick={()=>delItemTags(index)}/>
                         </div>
                            )
                         })
                        }
                        
                        <input type="text" ref={refInput} onKeyDown={handleKeyDown} value= {resetInput} onChange={(e)=>{hanldeInput(e)}} placeholder='Nhập ký tự và nhấn enter'/>
                    </div>
                </div>
                <br />
                <div className="tags ">
                    <p className='name-tags'>Ghi chú đơn hàng</p>
                        <textarea className='textarea-note content-tags' onChange={(e)=>handleNote(e)} placeholder='Nhập ghi chú cho đơn hàng'></textarea>
                </div>
            </div>
            <TotalBill/>
        </div>
        <hr />
        <div className="packing-delivery">
            <p>Đóng gói và giao hàng</p>
            <div className='items-delivery'>
                {arrDelivery.map(tmp=>{
                    const Icon = tmp.icon;
                    return(
                        <div className={activeDelivery === tmp.title ? "item-delivery active" : "item-delivery"} key={tmp.title} onClick = {()=>handleDelivery(tmp.title)}>
                            <Icon className='icons'/>   
                            <p>{tmp.title}</p>     
                        </div>    
                    )
                })}
                
            </div>
        </div>

    </div>
    );
}

export default Index;