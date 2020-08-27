const mongoose = require("mongoose");

const Cocktail = require("./models/cocktail");
const array = [];
async function changeCockt() {
  const cockt = await Cocktail.findOne({});
  // const newCockt = cockt.
   array.push(cockt.ingredients)
  // let newArray = array.forEach(el => {
  //   el.split(' ')
  // })
  console.log(array);
  // return newArray;

  }
  changeCockt();
  
  // let arrResult = await changeCockt();

