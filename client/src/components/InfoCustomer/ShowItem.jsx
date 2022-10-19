import React from 'react';
import PropTypes from 'prop-types';
import {AiOutlineClose} from 'react-icons/ai'
import { useDispatch } from 'react-redux';
import {removeItemCustomer} from '../../redux/billSlice'
ShowItem.propTypes = {
    
};

function ShowItem(props) {
    const dispatch = useDispatch()
    const data = props.data
    const handleRemoveCustomer=()=>{
        let action = removeItemCustomer();
        dispatch(action)
    }
    
    return (
        <div className='show-item'>
            <div className="info-name-mskh">
                <span><h5>{data.name}</h5> - <p>{data.mskh}</p> <p style={{fontSize: '16px', marginTop:'-7px', marginLeft:'10px', cursor:"pointer"}} onClick={handleRemoveCustomer}><AiOutlineClose />  </p></span>
                <hr style={{marginTop: '20px'}}/>
                <div className="main-show-item">
                    <div className="left-main-show-item">
                        <h6>ĐỊA CHỈ GIAO HÀNG</h6>
                        <span>
                            <p>{data.mskh}</p> 
                            <p>{data.address}</p>
                        </span>
                    </div>

                    <div className="right-main-show-item">
                        <li><p>Nợ phải thu</p> <p>0</p></li>
                        <li><p>Tổng chi tiêu (0 đơn)</p> <p>0</p></li>
                        <li><p>Trả hàng (0 sản phẩm)</p> <p>0</p></li>
                        <li><p>Giao hàng thất bại (0 đơn)</p> <p>0</p></li>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ShowItem;