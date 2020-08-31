const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Cocktail = require('../models/cocktail.js')
const Order = require('../models/order');
const {fullOrder} =require('../shop')

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
  const   valueInsearch  = req.body;
  await console.log(' valueInsearch >>>>>',valueInsearch);
  const find = await Cocktail.findById(req.params.id)
  console.log('coctail from base >>>',find.title);
  let resultTemp = [[find.title,valueInsearch.name]];
  console.log('ITOGO>>>>',resultTemp);
  const resultShop = await fullOrder([[find.title,valueInsearch.name]])
  await console.log(resultShop);

  const array = find.ingredients;
  // console.log(value,find,array)
  // let number
  // for (let i = 0; i < array.length; i++) {
  //   number = array[i][1]
  //   console.log(number)
  // }
  // res.json({
  //   success: true
  // })
  res.render('coctail/order', { find })
})


router.get('/:id', async (req, res, next) => {
  const coctail = await Cocktail.findById(req.params.id)
  // console.log(coctail);
  return res.render('coctail/coctail', { coctail });
});



module.exports = router;
