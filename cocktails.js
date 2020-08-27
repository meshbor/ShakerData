const mongoose = require("mongoose");

const Cocktail = require("./models/cocktail");
const ingredients = [];
async function changeCocktail() {
  const cockt = await Cocktail.findOne({});
 

  ingredients.push(cockt.ingredients)
  let newArray = ingredients.map(el => {
    return  el.replace(/(?=[А-Я])/g, ' ').trim()
  })
  newArray = newArray[0].split('Необходимые');
   const final = newArray.map(el=> el.length ? 'Необходимые ' + el : "C'est la vie")
   console.log(final.length);
  //  let newArray2 = newArray.map(el => { return el.split(' ')}
  //  )
  //  console.log(newArray2);
  
   // return newArray;
   
  }
  
  changeCocktail();  
  // let arrResult = await changeCockt();

changeCocktail();
// let arrResult = await changeCockt();
