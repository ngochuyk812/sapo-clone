import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './style.css';
import { AiFillCaretDown } from "react-icons/ai";
import imgnotproduct from'../../img/nottopproduct.svg';
import Select from '../Select'

Index.propTypes = {
    
};

function Index(props) {

    const dataSelect = ['Hôm nay', 'Hôm qua', '7 ngày qua', 'Tháng này', 'Tháng trước', 'Năm nay', 'Năm ngoái']
    
    return (
        <div className='resultday topproduct'>
            <div className="top-resultday">
                <h5>TOP SẢN PHẨM</h5>
                <Select data = {dataSelect} />
            </div>
            <div className="bottom-oderpending">
                <div className="notvalue">
                    <img src={imgnotproduct} alt="" />
                    <h6 style={{fontSize: "14px", color: "#747C87"}}>Chưa có dữ liệu</h6>
                </div>
            
             

               
            </div>
        </div>
    );
}

export default Index;