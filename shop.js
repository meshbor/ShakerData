let express = require('express');
// let app = express();
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/GrishaProject', { useNewUrlParser: true, useUnifiedTopology: true });
const Cocktail = require('./models/cocktail')
const Order = require('./models/order');


let arrayofValue = [
  ['Черный русский',10],
  ['Бабулин сад',10],
  ['Иностранный легион',10],
  ['Московский мул',1],
  ['Эль бискоти',10],
  ['Виски сауэр',10],
  ['Белый русский',10],
  ['Дайкири',10],
  ['Кровавая Мэри',700],
  ['Московский мул',12],

 
]

async function fullOrder(arrayofValue) {
  let volumeOrder = 0;

for (let i = 0; i < arrayofValue.length; i++) {
  let yourOrder = await Cocktail.findOne({ title: `${arrayofValue[i][0]}`})
  ingredientsAsk = yourOrder.ingredients;
  // console.log(yourOrder);

  for (let j = 0; j < ingredientsAsk.length; j++) {
    let BasaIngred =  await Order.findOne({ ingredients: `${ingredientsAsk[j][0]}`})
    console.log(BasaIngred);
     if (BasaIngred === null) { //если такого ингредиента еще в базе нет, то создаем его
        volumeOrder = ingredientsAsk[j][1]*arrayofValue[i][1];
        const order = await new Order({
        ingredients : ingredientsAsk[j][0],
        volume: volumeOrder,
        sizes: ingredientsAsk[j][2],
      })
      console.log(order);
      await order.save();
     } else {
       //иначе если такой ингредиент есть 
      let volumer = volumeOrder + (ingredientsAsk[j][1] * arrayofValue[i][1]);
       const res = await Order.update( {ingredients : `${ingredientsAsk[j][0]}` }, {$set: {volume:`${volumer}`}} ) 

      console.log('tuta');
     }
  }
    

}

}
fullOrder(arrayofValue);
