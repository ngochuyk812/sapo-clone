import React from 'react';
import './style.css'
import { useState } from 'react';
import axios from 'axios'
import {
  Link,
  useNavigate
} from 'react-router-dom';
Index.propTypes = {
    
};

function Index({type, setLinkTo, content}) {

    const arrNotify = [
      {type: "Successful", icon: 'fa-sharp fa-solid fa-circle-check', color: "green"},
      {type: "Error", icon: "fa-solid fa-triangle-exclamation", color: "red"}
    ]
    const[exit, setExit] = useState(false);
    const handleOK = ()=>{
      setExit(true)
      setLinkTo(false)
    }
    return (
     <div className='notify-main' style={exit ? {display: 'none'} : {}}>
      {arrNotify.map(tmp=>{
        if(tmp.type === type){
          return (
            <div className="notify">
              <i className={tmp.icon} style={{color: tmp.color}}></i>
              <p className='title-notify'>{tmp.type}</p>
              <p className='content-notify' >{content}</p>
              <button onClick={handleOK} style={{backgroundColor: "#346ecf"}}>OK</button>
      </div>

          )
        }
      })}
     
     </div>

    );
}

export default Index;