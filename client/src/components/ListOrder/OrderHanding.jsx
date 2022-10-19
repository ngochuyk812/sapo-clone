
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './style.css'


Index.propTypes = {
    
};

function Index(props) {
    const arrOderHanding = ["Chờ duyệt", "Chờ thanh toán", "Đang giao hàng", "Chờ giao lại"]
    
      return(
    
    <div className='resultday infowarehouse  title'>
             
        <div className="top-resultday">
           
            <h5  >ĐƠN HÀNG CẦN XỬ LÝ <span style={{fontSize: "14px", fontWeight:"450"}}>(90 ngày gần nhất)</span></h5>
            
        </div>
        <hr />
        <div className="customer-info-content list-oderhanding">
            {arrOderHanding.map((tmp, index)=>{
                return(
                    <div className="item-oder-handing" key = {index}>
                        <p>{tmp} <span>1</span></p>
                        <br />
                        <h6>25,300</h6>
                    </div>
                )
            
            })}
            
           
            
        </div>
    </div>
    );
}

export default Index;