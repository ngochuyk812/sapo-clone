import React from 'react';
import './style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react';
import axios from 'axios'
import Notify from '../Notify'

import {
  Link,
  useNavigate
} from 'react-router-dom';
Index.propTypes = {
    
};

function Index() {
  const[username, setUsername] = useState("");
  const[email, setEmail] = useState("");
  const[password, setPassword] = useState("");
  const[rePassword, setRePassword] = useState("");
  const[linkTo, setLinkTo] = useState(false);
  const[notify, setNotify] = useState({type: "", content:""})
  

  const navigator = useNavigate();
   const handleInput = (event)=>{
    if(event.target.name === 'username'){
      setUsername(event.target.value)
    }else{
      if(event.target.name === 'email'){
        setEmail(event.target.value)
      }else if(event.target.name === 'password'){
        setPassword(event.target.value)
      }else setRePassword(event.target.value)
      
    }
   }
   const handleLinkLogin= (rs)=>{
    if(notify.type === 'Successful'){
      setLinkTo(rs)
      navigator('/')
    }else       setLinkTo(rs)

   }
   const handleSubmit = async e => {
    e.preventDefault();
    if(password !== rePassword){
      setNotify({type: "Error", content: "Nhập lại mật khẩu không trùng"})
      setLinkTo(true)

      return;
    }
    const user = { username,email, password };
    const headers = {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
    }


    const rs = await axios.post(
      "http://localhost:5000/api/register",
      user, 
      {headers}
    ).then((response)=>{
      console.log(response.data)
      setNotify({type: "Successful", content: "Đăng ký thành công"})

    })
    .catch(()=>{
      setNotify({type: "Error", content: "Tên đăng nhập đã tồn tại"})

    })
    .finally(()=>{
      setLinkTo(true)
    })
    
  };

    return (
        <section className="vh-100" >
           {linkTo ?
        <div>
        <Notify type={notify.type} content = {notify.content} setLinkTo={handleLinkLogin}></Notify>
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
      <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1 r-login " style={{marginTop:"40px"}}>
        <form className='form-login'>
          <div className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
            <p className="lead fw-normal mb-0 me-3">Đăng ký</p>
            
          </div>
          <div className="divider d-flex align-items-center my-4">
          </div>
          {/* Email input */}
          <div className="form-outline mb-4">
            <input
              type="text"
              name='username'
              
              id="form3Example3"
              value={username}
              className="form-control form-control-lg"
              placeholder=" " 
              onChange={handleInput}

              //Enter a valid email address
            />
            <label className="form-label" htmlFor="form3Example3">
              Username
            </label>
          </div>

          <div className="form-outline mb-4">
            <input
              type="email"
              name='email'
              
              id="form3Example3"
              value={email}
              className="form-control form-control-lg"
              placeholder=" " 
              onChange={handleInput}

              //Enter a valid email address
            />
            <label className="form-label" htmlFor="form3Example3">
              Email
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

          <div className="form-outline mb-3">
            <input
              type="password"
              name="rePassword"
              id="form3Example4"
              value={rePassword}
              className="form-control form-control-lg"
              placeholder=" "
              onChange={handleInput}
              //Enter password
            />
            <label className="form-label" htmlFor="form3Example4">
              Re-Password
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
                hidden
              />
              <label className="form-check-label" htmlFor="form2Example3">
                
              </label>
            </div>
            
            <Link to='/forgot' className="text-body">Forgot password?</Link>
              
          
          </div>
          <div className="text-center text-lg-start mt-4 pt-2">
            <button
              type="button"
              onClick={handleSubmit}
              className="btn btn-primary btn-lg"
              style={{ paddingLeft: "2.5rem", paddingRight: "2.5rem", cursor: "pointer" }}
            >
              Register
            </button>
            <p className="small fw-bold mt-2 pt-1 mb-0">
              Don have an account?{" "}
             
                
                <Link to='/' className="link-danger">Register</Link>
             
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