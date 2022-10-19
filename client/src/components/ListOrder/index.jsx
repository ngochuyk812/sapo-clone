import React from 'react';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import './style.css'
import OderHanding from './OrderHanding'
import ShowItem from './ShowItem';
Index.propTypes = {
    
};

function Index(props) {
   
    return (
        <div className='odermain'>
            <div className="title-page">
            <h3>Danh sách đơn hàng</h3>
            </div>
            <div className="odermain">
                <div className="customer ">
                    <div className="customer-info ">
                        <OderHanding />
                    </div>
                    
                   
                </div>
                <ShowItem/>
            </div>
            
        </div>
    );
}

export default Index;