const puppeteer = require('puppeteer');
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/cocktailBase', {useNewUrlParser: true, useUnifiedTopology:true});

const Cocktail = require('./models/cocktail')

let cocktailUrl ='';
let dataArray =[];
let result=[];
// async function counter (){
  for (let i = 1; i < 5; i++) {
    cocktailUrl = `https://ru.inshaker.com/cocktails/${i}`;
    simpleParser(cocktailUrl)
  }
  // }
  // counter();
  // console.table(result);
  
async function simpleParser(cocktailUrl){ 
  
  let browser = await puppeteer.launch(); // init browser by ppt
  let page = await browser.newPage(); 
  
  await page.goto(cocktailUrl, {waitUntil: "networkidle2"}); // ppt goes to this movie url
  
  let data = await page.evaluate(()=>{  //  this func allows to evaluate anything in that page, that we add
    
    let title = document.querySelector('h1[class="common-name"]').innerText
    let ingredients = document.querySelector('div[class="ingredient-tables"]').innerText
    let recipe = document.querySelector('ul[class="steps"]').innerText
    return {
      title,
      ingredients,
      recipe,
    };
  });
  const oneCocktail = await new Cocktail({
    title: data.title,
    ingredients : data.ingredients,
    recipe: data.recipe,
  })
  console.log(data);
  // console.table(dataArray);
  await oneCocktail.save()
  dataArray.push(data)
  await browser.close();
}

