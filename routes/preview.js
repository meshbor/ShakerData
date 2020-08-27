const express = require('express');
const router = express.Router();
const mongoose = require('express');
const Cocktail = require('../models/cocktail')
router.route('/')
  .get((req, res) => {
    res.render('coctail/preview')
  })
  .post(async (req, res) => {
    const { qweryInSerch } = req.body;
    const selectCocktail = await Cocktail.find({
      title:{ $gt: '50' }
    })
    console.log(selectCocktail);
  })

module.exports = router;
