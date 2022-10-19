import React from 'react';
import PropTypes from 'prop-types';
import {AiOutlineClose} from 'react-icons/ai'
import { useDispatch } from 'react-redux';
import {removeItemCustomer} from '../../redux/billSlice'
ShowItem.propTypes = {
    
};

function ShowItem(props) {
    const dispatch = useDispatch()
    const data = props.data || []
    const handleRemoveCustomer=()=>{
        let action = removeItemCustomer();
        dispatch(action)
    }
    return (
        <div className="container-customer-info">
            <div className='item-show-product'>
        <table  >
        
        
            <thead>
            
                <tr >
                    <th><p>Ảnh</p></th>
                    <th><p>Tên sản phẩm</p></th>
                    <th><p>Giá</p></th>
                    <th><p>Số lượng</p></th>
                    <th><p>Tổng</p></th>
                </tr>
            </thead>
            <tbody >
                
                {data.map((tmp, index)=>{
                    return(
                    <tr key={index}>
                        <td><img style={{width: "40px"}} src="https://media.coolmate.me/cdn-cgi/image/quality=80/uploads/March2022/1-10.jpg" alt="" /></td>
                        <td> <div className="main-item-data" >
                            <p className='name-kh'>{tmp.name}</p>
                            <p className='mskh title-inventory'>{tmp.codeProduct}</p>

                        </div></td>
                        <td><p>{tmp.price}</p></td>
                        <td><p>{tmp.amount}</p></td>
                        <td><p>{tmp.amount * tmp.price}</p></td>

                    </tr>
                    )
                })}
                
            </tbody>
        
        </table>
        </div>
        </div>
        
    );
}

export default ShowItem;