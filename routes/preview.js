const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Cocktail = require('../models/cocktail.js')

// mongoose.connect('mongodb://localhost/cocktailBase', { useNewUrlParser: true, useUnifiedTopology: true });
router.route('/')
  .get((req, res) => {
    res.render('coctail/preview')
  })
  .post(async (req, res) => {
    const { qweryInSerch } = req.body;
    console.log(qweryInSerch);
    const selectCocktail = await Cocktail.find({})
    console.log(selectCocktail);
  })


module.exports = router;
