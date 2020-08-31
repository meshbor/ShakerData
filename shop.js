const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/GrishaProject', { useNewUrlParser: true, useUnifiedTopology: true });
const Cocktail = require('./models/cocktail')
const Order = require('./models/order');
let volumeOrder = 0;

async function fullOrder(arrayofValue) {
  let express = require('express');
  // let app = express();


for (let i = 0; i < arrayofValue.length; i++) {
  let yourOrder = await Cocktail.findOne({ title: `${arrayofValue[i][0]}`});
  if (yourOrder === null) { console.log(`Такого коктейля, как ${arrayofValue[i][0]} в базе нет, добавьте`);
   } else {
     console.log(`Коктейль ${arrayofValue[i][0]} добавлен в базу в количестве ${arrayofValue[i][1]} шт`);
     
  ingredientsAsk = yourOrder.ingredients; // ингредиенты коктейля в заказе 


  for (let j = 0; j < ingredientsAsk.length; j++) {
    let BasaIngred =  await Order.findOne({ ingredients: `${ingredientsAsk[j][0]}`})
    // console.log(BasaIngred.volume);
    if (BasaIngred === null) { //если такого ингредиента еще в базе нет, то создаем его
      volumeOrder = ingredientsAsk[j][1]*arrayofValue[i][1];
      const order = await new Order({
        ingredients : ingredientsAsk[j][0],
        volume: volumeOrder,
        sizes: ingredientsAsk[j][2],
      })
      // console.log(order);
      await order.save();
    } else {
      //иначе если такой ингредиент есть 
      let volumer = BasaIngred.volume + (ingredientsAsk[j][1] * arrayofValue[i][1]);
       const res = await Order.updateOne( {ingredients : `${ingredientsAsk[j][0]}` }, {$set: {volume:`${volumer}`}} ) 
      }
    }
} 

}

}




// let arrayofValue = [
//   ['Белый русский',10],
//   ['Бабулин сад',10],
//   ['Иностранный легион',10],
//   ['что это такое',20]
//   ['Московский мул',1],
//   ['Эль бискоти',10],
//   ['Виски сауэр',10],
//   ['Белый русский',10],
//   ['Дайкири',10],
//   ['Кровавая Мэри',10],
//   ['Иностранный легион',10],
  
// ]
//fullOrder();
module.exports = {fullOrder}
