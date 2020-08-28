let express = require('express');
let request = require('request');
let cheerio = require('cheerio');
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/GrishaProject', { useNewUrlParser: true, useUnifiedTopology: true });
const CocktailPhoto = require('./models/cocktailPhoto')


  let url = `https://ru.inshaker.com/cocktails?random_page=60`
// парсит и сохраняет страницу
 request(url, async (error,response,html) =>{
  if (!error && response.statusCode == 200) {
    const $ = cheerio.load(html);
    let tagsArray = [];
    let urlArray = [];
    let object = {}
    // class="search-results common-box cocktail-grid"
    await $('.cocktail-item-name').each( (i, elem) => {
       const titles = $(elem)
      .text();
      tagsArray[i]= titles;
    });
    // console.log(tagsArray);    

    await $('.cocktail-item-image').each( (i, elem) => {
      const img = $(elem)
     .attr('src');
      urlArray[i]= img;
    });
    for (let i = 0; i < tagsArray.length; i++) {
      let url = 'https://ru.inshaker.com/' + urlArray[i]
      let oneUrl = new CocktailPhoto({
        title: tagsArray[i],
        img: url,
      })
     await oneUrl.save()
    }
    // console.log(urlArray);    
  }

});

