import React from 'react';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import './style.css'
import InfoCustomer from '../InfoCustomer'
import InfoProduct from '../InfoProduct'
import Bill from '../Bill'
Index.propTypes = {
    
};
const handleAddOrder = ()=>{
    
}
function Index(props) {
   
    return (
        <div className='odermain'>
            <div className="title-page">
            
            </div>
            <div className="odermain">
                <div className="customer ">
                    <div className="customer-info ">
                        <InfoCustomer/>
                    </div>
                    <div className='additional-infor'>
                        <InfoProduct/>
                        <Bill/>
        
                    </div>
                    <div className="button-create-order">
                        <button className='cancel'>Thoát</button>
                        <button className='cancel cearte-oder' onClick={()=>handleAddOrder}>Tạo đơn hàng(F1)</button>

                    </div>
                </div>
            </div>
            
        </div>
    );
}

export default Index;