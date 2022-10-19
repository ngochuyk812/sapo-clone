const connect = require('../connect/connectDB')
const { register, login } = require('../controllers/userController')


const router = require('express').Router()
const express = require('express');
const app = express();




// router.use((req, res, next) => {
//     console.log('Time: ', Date.now())
//     next()
// })
// define the home page route
router.post('/register', register)
router.post('/login', login)

module.exports = router
