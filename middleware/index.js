function middleware(app){
  const express = require('express');
  const morgan = require('morgan');
  const path = require('path');
  // const hbs = require("hbs");
  const cookieMonster = require('cookie-parser')
  const mongoose = require('mongoose')

  // mongoose.connect('mongodb://localhost/GrishaProject', {useNewUrlParser: true, useUnifiedTopology:true});

  app.use(morgan('dev'));
  app.use(cookieMonster())

  
  // for body request working
  app.use(express.json());
  app.use(express.urlencoded({extended:true}))
  app.use(express.static(path.join(__dirname,'../public')))
  
  app.set('view engine', 'hbs')
  app.set('views',path.join(__dirname,'../views'))
} 

module.exports = {middleware}

