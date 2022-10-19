import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './style.css'
ItemTimeLine.propTypes = {
    
};

function ItemTimeLine(props) {
    const[tmp, setTmp] = useState(props.tmp || null)
    return (
        <div className='item-timeline'>
            <h6>{tmp ? tmp.title : ''}</h6>
            <p>{tmp ? tmp.date : ''}</p>
        </div>
    );
}

export default ItemTimeLine;