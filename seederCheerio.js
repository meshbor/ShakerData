let express = require('express');
// let app = express();
let request = require('request');
let cheerio = require('cheerio');
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/GrishaProject', { useNewUrlParser: true, useUnifiedTopology: true });
const Cocktail = require('./models/cocktail')

let page = 1;
let counter = 1;
// async function parser(page,counter) {

while (page<40) {

async function pars(page){

  let url = `https://ru.inshaker.com/cocktails/${page}`
// парсит и сохраняет страницу
await request(url, async (error,response,html) =>{
  if (!error && response.statusCode == 200) {
    const $ = cheerio.load(html);
    const title = $('.common-name').text();
    const titleEn = $('.name-en').text();
    const recipe = $('.steps').text();
    const description = $('.body').text();
    
    // console.log(description);
    
    let arrayOfIngr = [];
    let arrayOfVol = [];
    let arrayOfUnit = [];
    let cocktailArray = []
    let tagsArray = [];
    $('.js-tracking-ingredient').each( (i, elem) => {
      const item = $(elem).text();
      // ingred[`name_${i}`] = item;
      arrayOfIngr[i] = item
    });
    $('.amount').each( (i, elem) => {
      const item = $(elem).text();
      // ingred[`name_${i}`] = item;
      arrayOfVol[i] = item
    });
    $('.unit').each( (i, elem) => {
      const item = $(elem).text();
      // ingred[`name_${i}`] = item;
      arrayOfUnit[i] = item;
    });
    for (let i = 0; i < arrayOfIngr.length; i++) {
      cocktailArray[i] = [arrayOfIngr[i],arrayOfVol[i],arrayOfUnit[i]]
    }
    $('.item .tag').each( (i, elem) => {
      const tags = $(elem).text();
      tagsArray[i]= tags;
    });

    let oneCocktail = await new Cocktail ({
      title: title,
      titleEng: titleEn,
      filters: tagsArray,
      ingredients : cocktailArray,
      recipe: recipe,
      description: description,
    })
    await oneCocktail.save();
    console.log(oneCocktail);
  }

});

}
page+=1;
pars(page)
}
// counter+=1;
// if (page<40) {
//   console.log(`keep going >>>${counter}`);  }
//  await parser(page,counter)

// }

// parser(page,counter);
