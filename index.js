 var router =require('./router/initAPI') 
 require('dotenv').config();
var express = require('express');
 var app = express();
 const cors=require("cors");
 var bodyParser = require('body-parser');
 app.use(bodyParser.json());
 app.use(bodyParser.urlencoded({
     extended: true
 }));

const corsOptions ={
   origin:'*', 
   credentials:true,           
   optionSuccessStatus:200,
}

app.use(cors(corsOptions))
 app.get('/', function (req, res) {
     return res.send({ error: true, message: 'hello' })
 });

 console.log("Fileee: ",    )
 app.use("/api", router)
 // chỉnh port
 app.listen(5000, function () {
     console.log('Node app is running on port 5000');
 });
 module.exports = app;