// const puppeteer = require('puppeteer');
// const mongoose = require('mongoose');
// require('events').EventEmitter.defaultMaxListeners = 25;
// mongoose.connect('mongodb://localhost/GrishaProject', { useNewUrlParser: true, useUnifiedTopology: true });

// const Cocktail = require('./models/cocktail')

// const LAUNCH_PUPPETEER_OPTS = {
//   args: [
//     '--no-sandbox',
//     '--disable-setuid-sandbox',
//     '--disable-dev-shm-usage',
//     '--disable-accelerated-2d-canvas',
//     '--disable-gpu',
//     '--window-size=1920x1080'
//   ]
// };

// const PAGE_PUPPETEER_OPTS = {
//   networkIdle2Timeout: 5000,
//   waitUntil: 'networkidle2',
//   timeout: 3000000
// };

// let cocktailUrl = '';
// let dataArray = [];
// let result = [];


//   for (let i =  50; i < 55; i++) {
//     cocktailUrl = `https://ru.inshaker.com/cocktails/${i}`;
//     simpleParser(cocktailUrl)
//   }
  


//  async function simpleParser(cocktailUrl) {

//   let browser = await puppeteer.launch(PAGE_PUPPETEER_OPTS); // init browser by ppt
//   let page = await browser.newPage();

//   await page.goto(cocktailUrl, PAGE_PUPPETEER_OPTS); // ppt goes to this movie url

//   let data = await page.evaluate(() => {  //  this func allows to evaluate anything in that page, that we add

//     let title = document.querySelector('h1[class="common-name"]').innerText;
//     let titleEng = document.querySelector('div[class="name-en"]').innerText;
//     let filters = document.querySelector('ul[class="tags"]').innerText;
//     let ingredients = document.querySelector('div[class="ingredient-tables"]').innerText
//     // let nameofIngr = document.querySelector('tr').innerText
//     let recipe = document.querySelector('ul[class="steps"]').innerText
//     let description = document.querySelector('blockquote[class="body"]').innerText
    
//     return {
//       title,
//       titleEng,
//       filters,
//       ingredients,
//       recipe,
//       description,
//     };
//   });
  
//   let ingredientsTemp = [];
//   ingredientsTemp.push(data.ingredients);
//   let newArray = ingredientsTemp.map(el => {
//     return  el.replace(/(?=[А-Я])/g, ' ').trim()
//   })
//     newArray = newArray[0].split('Необходимые');
//    const final = newArray.map(el=> el.length ? 'Необходимые ' + el : `name ${data.title}`)
//   //  data.ingredients = final;
//   // console.log(final);
  
  
//   const oneCocktail = await new Cocktail({
//     title: data.title,
//     titleEng: data.titleEng,
//     filters: data.filters,
//     ingredients: data.ingredients,
//     recipe: data.recipe,
//     description: data.description,
//   })
//   console.log(data);
//   // console.table(dataArray);
//   await oneCocktail.save()
  
//   await browser.close();
  
//   return data;
// }
