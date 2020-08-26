const express = require('express');
const mongoose = require('mongoose')

const User = require('../models/user');
const session = require('express-session');
const router = express.Router();

router.route('/')
.get((req,res)=>{
  res.render('registration/login')
})
.post(async(req,res)=>{
  const {email,password} = req.body;
  const user = await User.findOne({email})
if (user) {
  req.session.user = user;
  res.status(200)
  res.end()
} else { 
console.log('net'); 
}
})
module.exports = router;
