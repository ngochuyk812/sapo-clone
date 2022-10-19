import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './style.css'
import ResultDay from'../ResultDay'
import Statistical from '../Statistical'
import OderPending from '../OderPending'
import TopProduct from '../TopProducts'
import WarehouseInfo from '../WarehouseInfo'
import TimeLine from '../TimeLine'
import { FcTimeline } from "react-icons/fc";
Index.propTypes = {
    
};

function Index(props) {
    const [checkHide,setCheckHide] = useState(false);
    const hanldeTimeline =()=>{
        checkHide? setCheckHide(false): setCheckHide(true)
    }
    return (
        <div>
          
            <div className='home'>
            <div className="left-home">
                <ResultDay/>
                <Statistical />
                <OderPending />
                <div className='bottom-home'>
                <TopProduct/>
                <WarehouseInfo/>
                </div>
            </div>
            
            <div className={checkHide ? "right-home appear": "right-home hide"} style ={checkHide?{opacity: 1} : {}}>
                <TimeLine/>
            </div>

            <div className="icontimeline" onClick={hanldeTimeline}>
                    <FcTimeline className='iconicon'/>
            </div>
        </div>
        </div>
    );
}

export default Index;