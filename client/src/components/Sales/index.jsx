import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './style.css';
import NotValue from '../NotValue/'
Index.propTypes = {
    
};

function Index(props) {
    const[getTab, setTab] = useState(1);
    const[data,setData] = useState(null);

    const handleTab = (param)=>{
        setTab(param)
    }
    return (
        <div className="sales">
            {data ? "Ti trong": <NotValue />}
        </div>
    );
}

export default Index;