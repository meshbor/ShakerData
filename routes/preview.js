const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Cocktail = require('../models/cocktail.js')
const {fullOrder} =require('../shop');
const Order=require('../models/order')

// mongoose.connect('mongodb://localhost/cocktailBase', { useNewUrlParser: true, useUnifiedTopology: true });
router.route('/')
  .get(async (req, res) => {
    const allCocktall = await Cocktail.find({})

    res.render('coctail/preview', { allCocktall })
  })
  //.limit(10){title:`${ qweryInSerch }`}
  .post(async (req, res) => {
    const { qweryInSerch } = req.body;
    console.log('input >>>>',qweryInSerch);
    const selectCocktail = await Cocktail.findOne({ title: `${qweryInSerch}` })

    const selectCocktailIngrdients = await Cocktail.find({ ingredients: { $regex: `${qweryInSerch}`, $options: "i" } })

    const selectCocktailRecipe = await Cocktail.find({ recipe: { $regex: `${qweryInSerch}`, $options: "i" } })

    // console.log(selectCocktail);
    // console.log(selectCocktailIngrdients);
    // console.log(selectCocktailRecipe);
    res.render('preview')
    // res.status('200')
    // res.end()
  })

router.get('/choosen', async (req, res) => {
  const { name } = req.query;
  console.log('choosen cocktail >>>>',name);
  const lost = await Cocktail.findOne({ title: `${name}` })
  // console.log(lost);
  res.render('coctail/choosen', { lost })
})

router.put('/choosen', async (req, res) => {
  const { qweryInSerch } = req.body;
  console.log(qweryInSerch);
  const selectCocktail = await Cocktail.findOne({ title: `${qweryInSerch}` })

  res.json({
    success: true
  })
})

router.get('/order/:id', async (req, res) => {
  const find = await Cocktail.findById(req.params.id)
  console.log('искомый коктейль',find);
 res.render('coctail/order', { find })
})

router.post('/order/:id', async (req, res) => {
  const input = req.body.num;
  console.log(input);
  const find = await Cocktail.findById(req.params.id)
  const array = find.ingredients;
 console.log(input,find,array)


  res.render('coctail/order', { find })
})


router.get('/:id', async (req, res, next) => {
  const coctail = await Cocktail.findById(req.params.id)
  // console.log(coctail);
  return res.render('coctail/coctail', { coctail });
});



module.exports = router;
