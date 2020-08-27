const puppeteer = require('puppeteer');
const mongoose = require('mongoose');

// mongoose.connect('mongodb://localhost/cocktailBase', {useNewUrlParser: true, useUnifiedTopology:true});

require('events').EventEmitter.defaultMaxListeners = 25;



const Cocktail = require('./models/cocktail')

const LAUNCH_PUPPETEER_OPTS = {
  args: [
    '--no-sandbox',
    '--disable-setuid-sandbox',
    '--disable-dev-shm-usage',
    '--disable-accelerated-2d-canvas',
    '--disable-gpu',
    '--window-size=1920x1080'
  ]
};

const PAGE_PUPPETEER_OPTS = {
  networkIdle2Timeout: 5000,
  waitUntil: 'networkidle2',
  timeout: 3000000
};

let cocktailUrl ='';
let dataArray =[];
let result=[];
 async function counter (){

 for (let i = 35; i < 45; i++) {
cocktailUrl = `https://ru.inshaker.com/cocktails/${i}`;

    simpleParser(cocktailUrl)
  }
  }
  counter();
  // console.table(result);
  
async function simpleParser(cocktailUrl){ 
  
  let browser = await puppeteer.launch(PAGE_PUPPETEER_OPTS); // init browser by ppt
  let page = await browser.newPage(); 
  
  await page.goto(cocktailUrl, PAGE_PUPPETEER_OPTS); // ppt goes to this movie url
  
  let data = await page.evaluate(()=>{  //  this func allows to evaluate anything in that page, that we add
    
    let title = document.querySelector('h1[class="common-name"]').innerText;
    let titleEng= document.querySelector('div[class="name-en"]').innerText;
    let filters = document.querySelector('ul[class="tags"]').innerText;
    let ingredients = document.querySelector('div[class="ingredient-tables"]').innerText
    let recipe = document.querySelector('ul[class="steps"]').innerText
    let description = document.querySelector('blockquote[class="body"]').innerText
    
    return {
      title,
      titleEng,
      filters,
      ingredients,
      recipe,
      description,
    };
  });
  const oneCocktail = await new Cocktail({
    title: data.title,
    titleEng: data.titleEng,
    filters: data.filters,
    ingredients : data.ingredients,
    recipe: data.recipe,
    description: data.description,
  })
  console.log(data);
  // console.table(dataArray);
  await oneCocktail.save()
  dataArray.push(data)
  await browser.close();

  
}

