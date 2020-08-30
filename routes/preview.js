const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Cocktail = require('../models/cocktail.js')

// mongoose.connect('mongodb://localhost/cocktailBase', { useNewUrlParser: true, useUnifiedTopology: true });
router.route('/')
  .get(async (req, res) => {
    const allCocktall = await Cocktail.find({})
 
    res.render('coctail/preview', { allCocktall })
  })
  //.limit(10){title:`${ qweryInSerch }`}
  .post(async (req, res) => {
    const { qweryInSerch } = req.body;
    console.log(qweryInSerch);
    const selectCocktail = await Cocktail.findOne({ title: `${qweryInSerch}` })

    const selectCocktailIngrdients = await Cocktail.find({ ingredients: { $regex: `${qweryInSerch}`, $options: "i" } })

    const selectCocktailRecipe = await Cocktail.find({ recipe: { $regex: `${qweryInSerch}`, $options: "i" } })

    // console.log(selectCocktail);
    // console.log(selectCocktailIngrdients);
    // console.log(selectCocktailRecipe);
    res.render('preview',{selectCocktail})
    // res.status('200')
    // res.end()
  })

router.get('/choosen',async (req, res) => {
  const { name } = req.query;
  console.log(name);
  const lost = await Cocktail.findOne({ title: `${name}`})
// console.log(lost);
  res.render('coctail/choosen', {lost})
})

router.post('/choosen', async (req, res) => {
  const { qweryInSerch } = req.body;
  // console.log(qweryInSerch);
  const selectCocktail = await Cocktail.findOne({ title: `${qweryInSerch}` })
  res.render('coctail/choosen',{ selectCocktail })
})

router.get('/:id', async (req, res, next) => {
  const coctail = await Cocktail.findById(req.params.id)
  // console.log(coctail);

  return res.render('coctail/coctail', { coctail });
});



module.exports = router;
