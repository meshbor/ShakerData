const express = require('express');
const mongoose = require('mongoose');
const User = require('../models/user')

const router = express.Router();

router.route('/')
  .get((req,res)=>{
  res.render('registration/register')
})
.post( async(req,res)=>{
  const {email,password} = req.body;
    const user =  new User({
    email,
    password,
  })
  if (user.email !== User.findOne({email})) {
  } else {
    console.log('woowowowow');
  }
  await user.save();
   res.status(200);
  res.end(); // прекращает процесс ответа на мой реквест , стандартный метод хттп
})  



module.exports = router;
