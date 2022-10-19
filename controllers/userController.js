var jwt = require('jsonwebtoken')
var bcrypt = require('bcrypt')
const User = require('../model/userModel')
const db = require("../connect/connectDB")
var express = require('express');
const randToken = require('rand-token')
const jwtVariable = require('../jwt')
var router = express.Router();
const authMethod = require('./userMethod')
const { async } = require('rxjs');
exports.register = async function(req, res) {
  console.log("API: ",req.body)
  // let getUser =  ()=>{
  //   db.execute(
  //     'SELECT * FROM `user` WHERE username = ?', [req.body.username],
      
  //     function(err, results, fields) {
  //       console.log(results.length)
  //      if(results.length === 0){
  //       const hash_password  = bcrypt.hashSync(req.body.password, 4);

  //       db.execute('INSERT INTO `user` VALUES(?,?,?)', [req.body.username, req.body.email, hash_password])
  //      return res.send("Dang ky thanh cong")
  //      }else{
  //       return res.status(401).send('Tên đăng nhập tồn tại.');
  //      }
  //     }
  //   );

  // }

  User.getUser(req.body.username, async (rs)=>{
    console.log(rs)
     if(rs.length === 0){
        const hash_password  = bcrypt.hashSync(req.body.password, 3);

        db.execute('INSERT INTO `user` (username, email, hash_password) VALUES(?,?,?)', [req.body.username, req.body.email, hash_password])
       return res.send("Dang ky thanh cong")
       }else{
        return res.status(401).send('Tên đăng nhập tồn tại.');  
       }
   
  })
  }

const enCodePas = (pass)=>{
  bcrypt.hash(pass, 10, function (err, hash) {
    console.log(hash);
    return hash
  });
}
 
  
  exports.login = async function(req, res) {
    console.log(req.body)
    User.getUser(req.body.username, async (rs)=>{
      let user = rs[0]
      console.log("Login get data: ", rs)
      if (rs.length === 0) {
        return res.status(401).send('Tên đăng nhập không tồn tại.');
      }
      const isPasswordValid = bcrypt.compareSync(req.body.password, user.hash_password);
      if (!isPasswordValid) {
      return res.status(401).send('Mật khẩu không chính xác.');
      }
      const accessTokenLife = process.env.ACCESS_TOKEN_LIFE;
	  const accessTokenSecret = process.env.ACCESS_TOKEN_SECRET;
    console.log(accessTokenLife)
    const dataForAccessToken = {
      username: user.username,
    };
    const accessToken = await authMethod.generateToken(
      dataForAccessToken,
      accessTokenSecret,
      accessTokenLife,
    );
    if (!accessToken) {
      return res
        .status(401)
        .send('Đăng nhập không thành công, vui lòng thử lại.');
    }
  
    let refreshToken = randToken.generate(jwtVariable.refreshTokenSize); // tạo 1 refresh token ngẫu nhiên
    if (!user.refreshToken) {
      // Nếu user này chưa có refresh token thì lưu refresh token đó vào database
      await User.updateRefreshToken(user.username, refreshToken);
    } else {
      // Nếu user này đã có refresh token thì lấy refresh token đó từ database
      refreshToken = user.refreshToken;
    }
  
    return res.json({
      msg: 'Đăng nhập thành công.',
      accessToken,
      refreshToken
     
    });
    })
   

    
  };
  
  exports.loginRequired = function(req, res, next) {
    if (req.user) {
      next();
    } else {
      return res.status(401).json({ message: 'Unauthorized user!' });
    }
  };