import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './style.css';
import imgnotvalue from '../../img/not-value.svg'
Index.propTypes = {
    
};

function Index(props) {
    const[getTab, setTab] = useState(1);
    const handleTab = (param)=>{
        setTab(param)
    }
    return (
        <div className="notvalue">
            <img src={imgnotvalue} alt="" />
            <h6 style={{fontSize: "14px", color: "#747C87"}}>Chưa có dữ liệu</h6>
        </div>
    );
}

export default Index;