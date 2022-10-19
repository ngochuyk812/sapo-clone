import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './style.css';
import Sales from '../Sales'
import Density from '../Density'
Index.propTypes = {
    
};

function Index(props) {
    const[getTab, setTab] = useState(1);
    const handleTab = (param)=>{
        setTab(param)
    }
    return (
        <div className="turnover">
            <div className="tab-header">
                <div className={getTab === 1 ? "item-tab active" : "item-tab"} onClick = {()=>handleTab(1)}>
                   <p> DOANH THU BÁN HÀNG </p>
                </div>
                <div className={getTab === 2 ? "item-tab active" : "item-tab"} onClick = {()=>handleTab(2)}>
                   <p> TỶ TRỌNG BÁN HÀNG </p>
                </div>
            </div>
            <hr />

            <div className="tab-content">
                {getTab === 1 ? <Sales /> : <Density/>}
            </div>
        </div>
    );
}

export default Index;