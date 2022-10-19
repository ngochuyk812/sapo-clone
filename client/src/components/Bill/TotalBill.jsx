import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { HiPlusCircle } from "react-icons/hi";

import { IoIosClose, IoIosTimer } from "react-icons/io";
import { removeTags } from '../../redux/billSlice';
import { useDispatch, useSelector } from 'react-redux';

TotalBill.propTypes = {
    
};

function TotalBill(props) {
    let dispatch = useDispatch();
    const bill = useSelector(state => state.bill)
    const arrProduct = bill.product || []
    const [countMethodPayment,setCountMethdPayment] = React.useState([])
    const [totalPrice, setTotalPrice] = useState(0);
    useEffect(()=>{
        let total = 0;
        arrProduct.map((tmp)=>{
            total += Number(tmp.price) * tmp.amount
        })
        setTotalPrice(total)
    }, [arrProduct])
    const addPayment =(random)=>{
        let newArr = [...countMethodPayment,random]
        setCountMethdPayment(newArr)
      }
      const delItemTags = (index)=>{
        let action =removeTags(index)
        dispatch(action)
       
      }

      const delPayment = (tmp)=>{
        console.log(tmp);
      let newArr = [...countMethodPayment];
      var newArray = newArr.filter((f) =>{ return f != tmp })
      setCountMethdPayment(newArray)
    }
    return (
        <div className="right-bill">
                <div className="itembill maxh">
                        <p>Tổng tiền ({arrProduct.length} sản phẩm)</p> 
                        <h5 style={{marginTop:"15px"}}>{totalPrice}</h5>
                </div>            
                        
                <div className="itembill maxh">
                        <p className='colorAqua'>Phí giao hàng (F7)</p> 
                        <h5 style={{marginTop:"15px"}}>0   </h5>
                </div>   
                <div className="itembill maxh">
                        <p className='colorAqua'>Mã giảm giá</p> 
                        <h5 style={{marginTop:"15px"}}>0   </h5>
                </div>            
                <div className="itembill maxh bold">
                        <p>Khách phải trả</p> 
                        <h5 style={{marginTop:"15px"}}>0   </h5>
                </div>
                <br />            
                <hr />
                <div className="itembill  flex">
                        <p style={{fontWeight: '600',marginBottom:'0px'}}>Khách đã thanh toán</p> 
                            <div className="payment-method">
                                {countMethodPayment.map((tmp, index)=>{
                                    return(
                                        <div className="itembill maxh " key={tmp} >
                                    <p className="form-group">
                                    <IoIosClose  className='icon-del-tags' style={{cursor:'pointer'}} onClick={()=>delPayment(tmp)} />
                                        <select className="form-control" id="exampleFormControlSelect1">
                                        <option>Chọn phương thức </option>
                                        <option>Quẹt thẻ</option>
                                        <option>Thanh toán bằng điểm</option>
                                        <option>Chuyển khoản</option>
                                        <option>Tiền mặc</option>
                                        </select>
                                    </p>
                                    <h5 style={{marginTop: '15px'}}>0</h5>
                                </div>    
                                    )
                                })}
                                <div className="itembill maxh">
                                    <p className='colorAqua' onClick={()=>addPayment(Math.random())}><HiPlusCircle className='icon-add-payment' />Thêm phương thức</p> 
                                    
                                </div>   
                            </div> 
                            

                </div>   
                <br />         
                <hr />
                <div className="itembill maxh " >
                        <p>Còn lại</p> 
                        <h5 style={{marginTop: '15px'}}>0</h5>
                </div>            
                <br />

            </div>
    );
}

export default TotalBill;