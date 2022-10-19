import React, { useEffect } from 'react';
import './style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react';
import axios from 'axios';
import Notify from '../Notify'
import {
  Link,
  useNavigate
} from 'react-router-dom';
Index.propTypes = {
    
};

function Index({setToken}) {
  const[username, setUsername] = useState("");
  const[password, setPassword] = useState("");
  const[linkTo, setLinkTo] = useState(false);
  const[notify, setNotify] = useState({type: "", content:""})
  
  const navigator = useNavigate();
   const handleInput = (event)=>{
    if(event.target.name === 'email'){
      setUsername(event.target.value)
    }else{
      setPassword(event.target.value)
    }
   }
   const handleSubmit = async e => {
    e.preventDefault();
    const user = { username, password };
    const headers = {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
    }


    const rs = await axios.post(
      "http://localhost:5000/api/login",
      user, 
      {headers}
    ).then((response)=>{
      localStorage.setItem('user', response.data.accessToken)
      console.log(response.data)
      setToken(response.data.accessToken)
 
    })
    .catch(()=>{
      setNotify({type: "Error", content: "Sai tài khoản hoặc mật khẩu"})

      console.log("EWrros");
    })
    .finally(()=>{
      setLinkTo(true)
    })
    
    
  };
  useEffect(()=>{
    navigator('/');
  },[linkTo])

    return (
        <section className="vh-100" >
          {linkTo ?
        <div>
        <Notify type={notify.type} content = {notify.content} setLinkTo={setLinkTo}></Notify>
      </div>:""  
        }
  <div className="container-fluid h-custom">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-md-9 col-lg-6 col-xl-5 l-login">
        <img
          src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
          className="img-fluid"
          alt="Sample image"
        />
      </div>
      <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1 r-login" style={{marginTop:"80px"}}>
        <form className='form-login'>
          <div className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
            <p className="lead fw-normal mb-0 me-3">Đăng nhập</p>
            
          </div>
          <div className="divider d-flex align-items-center my-4">
          </div>
          
          {/* Email input */}
          <div className="form-outline mb-4">
            <input
              type="text"
              name='email'
              
              id="form3Example3"
              value={username}
              className="form-control form-control-lg"
              placeholder=" " 
              onChange={handleInput}

              //Enter a valid email address
            />
            <label className="form-label" htmlFor="form3Example3">
              Email address
            </label>
          </div>
          
          {/* Password input */}
          <div className="form-outline mb-3">
            <input
              type="password"
              name="password"
              id="form3Example4"
              value={password}
              className="form-control form-control-lg"
              placeholder=" "
              onChange={handleInput}
              //Enter password
            />
            <label className="form-label" htmlFor="form3Example4">
              Password
            </label>
          </div>
          <div className=" checkbox-remenber">
            {/* Checkbox */}
            <div className="form-check mb-0">
              <input
                className="form-check-input me-2"
                type="checkbox"
                defaultValue=""
                id="form2Example3"
              />
              <label className="form-check-label" htmlFor="form2Example3">
                Remember me
              </label>
            </div>
            <a href="#!" className="text-body">
              Forgot password?
            </a>
          </div>
          <div className="text-center text-lg-start mt-4 pt-2">
            <button
              type="button"
              onClick={handleSubmit}
              className="btn btn-primary btn-lg"
              style={{ paddingLeft: "2.5rem", paddingRight: "2.5rem", cursor: "pointer" }}
            >
              Login
            </button>
            <p className="small fw-bold mt-2 pt-1 mb-0">
              Don't have an account?{" "}
             
                
                <Link to='/register' className="link-danger">Register</Link>
             
            </p>
          </div>
        </form>
      </div>
    </div>
  </div>
  <div className=" lg-f d-flex flex-column flex-md-row text-center text-md-start justify-content-between py-4 px-4 px-xl-5 bg-primary">
    {/* Copyright */}
    <div className="text-white mb-3 mb-md-0 " >
      
      Copyright © 2020. All rights reserved.
    </div>
    {/* Copyright */}
    {/* Right */}
    <div>
      <a href="#!" className="text-white me-4">
        <i className="fab fa-facebook-f" />
      </a>
      <a href="#!" className="text-white me-4">
        <i className="fab fa-twitter" />
      </a>
      <a href="#!" className="text-white me-4">
        <i className="fab fa-google" />
      </a>
      <a href="#!" className="text-white">
        <i className="fab fa-linkedin-in" />
      </a>
    </div>
    {/* Right */}
  </div>
</section>

    );
}

export default Index;