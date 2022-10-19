import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import './scss/menu.css'
import { HiLogin } from "react-icons/hi";
import { ImHome } from "react-icons/im";
import { FaClipboardList, FaChevronDown, FaProductHunt, FaMoneyCheck, FaUserCog } from "react-icons/fa";
import { BsBoxSeam, BsPersonCircle, BsFileEarmarkBarGraph } from "react-icons/bs";
import {
    Link
  } from 'react-router-dom';
import { AiOutlineDoubleRight } from "react-icons/ai";
import logo from'../../../img/logo.png'
import useWindowDimensions from './getWidth'
Menu.propTypes = {
    
};

function Menu(props) {
    const [active, setActive] = useState("Tổng quan")
    const arrListMenu = [
        {
            icon: ImHome,
            name: "Tổng quan",
            linkTo: '',
            item: null
        },
        {
            icon: FaClipboardList,
            name: "Đơn hàng",
            linkTo: 'odermain',
            item: [{nameItem: "Tạo đơn và giao hàng", link:"odermain"},{nameItem: "Danh sách đơn hàng", link:"listOder"} ,{nameItem: "Khách trả hàng", link:"oderReturns"}  ]
        },
        {
            icon: FaProductHunt,
            name: "Sản phẩm",
            linkTo: 'transport',
            item: [{nameItem: 'Quản lý sản phẩm', link:"product"},{nameItem: 'Nhóm sản phẩm', link:"group_product"}  ]

        },
        {
            icon: FaUserCog,
            name: "Khách hàng",
            linkTo: 'transport',
            item: [{nameItem: 'Quản lý khách hàng', link:"customer"},{nameItem: 'Nhóm khách hàng', link:"group_customer"}  ]

        },
        {
            icon: FaMoneyCheck,
            name: "Sổ quỹ",
            linkTo: 'cashBook',
            item: [{nameItem:'Phiếu thu', link:"receipts"},{nameItem: "Phiếu chi", link:"payment"}   ]

        },
        // {
        //     icon:BsFileEarmarkBarGraph,
        //     name: "Báo cáo",
        //     linkTo: 'odermain',
        //     item: ["Báo cáo bán hàng", "Báo cáo nhập hàng", "Báo cáo kho", "Báo cáo tài chính", "Báo cáo khách hàng"]
        // },
        // {
        //     icon: BsBoxSeam,
        //     name: "Sản phẩm",
        //     linkTo: 'odermain',
        //     item: ['Danh sách sản phẩm', 'Quản lý kho', 'Nhập hàng', 'Kiểm hàng', 'Chuyển hàng', "Nhà cung cấp", 'Điểu chỉnh giá vốn']
        // },
        // {
        //     icon: BsPersonCircle,
        //     name: "Khách hàng",
        //     linkTo: 'odermain',
        //     item: ['Danh sách khách hàng', 'Nhóm khách hàng']
        // },
        
    ]
    const[openDrop, setOpenDrop] = useState("")
    const[open, setOpen] = useState(true)
   
    const [rsp,setRsp] = useState(true)
    const idClose = useRef();
    const { height, width } = useWindowDimensions();

    const hanldeCloseMenu = ()=>{
        if(open){
            props.handleHideBack(false)
            setOpen(false)
        }else{
            props.handleHideBack(true)
            setOpen(true)
        }
   
    }
    
    const hanldeOpen = ()=>{
        if(open){
            props.handleHideBack(false)
            setOpen(false)
        }else{
            props.handleHideBack(true)
            setOpen(true)
        }
    }

   
      
      useEffect(() => {
        setRsp(false)
          if(width < 1000){
           idClose.current.click()    
               }
      }, [rsp])
    useEffect(()=>{
        setOpen(props.checkOpen )
      
    },[props.checkOpen ])
    
    const handleDrop = (name)=>{
        if(name === openDrop){
            setOpenDrop("")
        }else{
            setOpenDrop(name)
        }
    }
    const handleActive = (linkName)=>{
        setActive(linkName)
    }   
    return (
        
        <div className={!props.checkOpen ? 'menu hide' : 'menu left'} >
            <div className="open-menu" onClick={hanldeOpen} style={!props.checkOpen?{display:'none'}:{}}>
                <span>
                    <AiOutlineDoubleRight className='icon-open'/>
                </span>
            </div>
            <div className="header-menu">
                <div style={{display: "flex", marginLeft:"10px"}}>
                    <img src={logo} alt="" style={{width: '40px', height:'40px',marginTop:"10px"}} className='logo' />
                    <p>FUFU</p>
                </div>
                <span className="close-menu" onClick={hanldeCloseMenu}  ref = {idClose}>
                    <HiLogin className='icon-close-header' id='close'/>
                    
                </span>
            </div>
            <div className="profile-menu">
                <span>
                    <div className='name-user '>
                    Nguyễn Ngọc Huy
                    </div>
                    <div className='email-user '>
                        ngohuyk80169@gmail.com
                    </div>
                </span>
                <div >
                    <img className="avatar-user-menu" src="https://qph.cf2.quoracdn.net/main-thumb-1592242157-200-bryexzlhgqrmuyzbapbyscsyjlrfuwaf.jpeg" alt="" />
                </div>
            </div>

            <div className="menu-main">
                <h6>APPLICATIONS</h6>
                <div className='list-item'>
                    {arrListMenu.map((tmp, index) =>{
                        const Icon = tmp.icon
                        const item = tmp.item 
                        if(item === null){
                            return(
                            <Link to={tmp.linkTo} className='Link' onClick={()=>handleActive(tmp.name)} key={index}>
                                <div >
                                 <div className={tmp.name == active ? "item-menu active": "item-menu"}>
                                 
                                  <Icon className='icon-item-menu'/>
     
                                      <p>{tmp.name}</p>
                                  </div>
                              </div>
                             
                            </Link>
                             
                            
                             )
                        }else{
                            return (
                                <div key = {index}>
                                <div className="item-menu" onClick={()=>handleDrop(tmp.name)}>
                                    <Icon className='icon-item-menu'/>
                                    <p>{tmp.name}</p>
                                    <FaChevronDown className='icon-item-menu' style={{fontSize: "10px", position: "absolute", right: "0", top: "0", bottom: "0"} }/>
                                </div>
                                    <div className={openDrop == tmp.name ? "main-drop show" : "main-drop"}>
                                        {item.map((tmp2,index) =>{
                                            return(
                                                <Link key={tmp2.nameItem } className='Link' onClick={()=>handleActive(tmp2.nameItem)} to={tmp2.link} >
                                                    <div className={tmp2.nameItem == active ? "item-menu active": "item-menu"} >
                                                    <FaClipboardList className='icon-item-menu' style={{opacity:0}}/>
                                                    <p>{tmp2.nameItem   }</p>
                                                </div>
                                                </Link>
                                            )
                                        })}
                                        
                                </div>
                            </div>
                            )
                        }
                        
                    })}

                    {/* <div className="item-menu active">
                        <ImHome className='icon-item-menu'/>
                        <p>Tổng quan</p>
                    </div>
                    <div className="item-menu " onClick={handleDonHang}>
                        <FaClipboardList className='icon-item-menu'/>
                        <p>Đơn hàng</p>
                        <FaChevronDown className='icon-item-menu' style={{fontSize: "10px", position: "absolute", right: "0", top: "0", bottom: "0"} }/>
                    </div>
                        <div className={openDropDonHang ? "main-drop show" : "main-drop"}>
                            <div className="item-menu ">
                                <FaClipboardList className='icon-item-menu' style={{opacity:0}}/>
                                <p>Tạo đơn và giao hàng</p>
                            </div>
                            <div className="item-menu ">
                                <FaClipboardList className='icon-item-menu' style={{opacity:0}}/>
                                <p>Danh sách đơn hàng</p>
                            </div>
                            <div className="item-menu ">
                                <FaClipboardList className='icon-item-menu' style={{opacity:0}}/>
                                <p>Khách trả hàng</p>
                            </div>
                        </div>
                    <div className="item-menu ">
                        <FaShippingFast className='icon-item-menu'/>
                        <p>Vận Chuyển</p>
                        
                    </div>
                    <div className="item-menu ">
                        <ImHome className='icon-item-menu'/>
                        <p>Tổng Quan</p>
                    </div>
                    <div className="item-menu ">
                        <ImHome className='icon-item-menu'/>
                        <p>Tổng Quan</p>
                    </div> */}
                </div>
            </div>
        </div>
    );
}

export default Menu;