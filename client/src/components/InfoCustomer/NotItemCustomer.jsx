import React from 'react';
import PropTypes from 'prop-types';
import { RiProfileLine } from "react-icons/ri";
NotItemCustomer.propTypes = {
    
};

function NotItemCustomer(props) {
    
    return (
        <div className="container-customer-info">
            <RiProfileLine className='icon-content-customer'/>
            <p>Chưa có thông tin khách hàng</p>
        </div>
    )
        
    ;
}

export default NotItemCustomer;