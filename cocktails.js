const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/cocktailBase", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const Cocktail = require("./models/cocktail");
const ingredients = [];
const coctail = [];
async function changeCocktail() {
  const cockt = await Cocktail.findOne({});

  ingredients.push(cockt.ingredients);
  let newArray = ingredients.map((el) => {
    return el.replace(/(?=[А-Я])/g, " ").trim();
  });
  console.log(newArray);

  // let newArray2 = newArray.map((el) => {
  //   return el.split(" ");
  // });
  // for (let i = 3; i< newArray2.length; i++) {
  //     if (newArray2[i].includes() ) {
        
  //     }
  //     }
  console.log(newArray2);

  // return newArray;
}

changeCocktail();
// let arrResult = await changeCockt();
