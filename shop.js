let express = require('express');
// let app = express();
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/GrishaProject', { useNewUrlParser: true, useUnifiedTopology: true });
const Cocktail = require('./models/cocktail')
const Order = require('./models/order');
const order = require('./models/order');

async function oneOrder(title,volume) {
  
  const oneExample = await Cocktail.findOne({ title: `${title}`})
  for (let i = 0; i < oneExample.ingredients.length; i++) {
       oneExample.ingredients[i][1] = oneExample.ingredients[i][1] * volume;
       const order = await new Order({
         ingredients : oneExample.ingredients[i][0],
         volume: oneExample.ingredients[i][1],
         sizes: oneExample.ingredients[i][2],
       })
       console.log(order);
       await order.save();
      
  }

  return oneExample

}

// oneOrder('Московский мул',1)

let arrayofValue = [
  ['Черный русский',10],
  ['Бабулин сад',10],
  ['Иностранный легион',10],
  ['Московский мул',1],
  ['Эль бискоти',10],
  ['Виски сауэр',10],
  ['Белый русский',10],
  ['Дайкири',10],
  ['Кровавая Мэри',10],
  ['Московский мул',1100],
 
]

async function fullOrder(arrayofValue) {


for (let i = 0; i < arrayofValue.length; i++) {
  let yourOrder = await Cocktail.findOne({ title: `${arrayofValue[i][0]}`})
  ingredientsAsk = yourOrder.ingredients;
  // console.log(yourOrder);

  for (let j = 0; j < ingredientsAsk.length; j++) {
    let BasaIngred =  await Order.findOne({ ingredients: `${ingredientsAsk[j][0]}`})
     if (BasaIngred === null) { //если такого ингредиента еще в базе нет, то создаем его
        let volumeOrder = ingredientsAsk[j][1]*arrayofValue[i][1];
        const order = await new Order({
        ingredients : ingredientsAsk[j][0],
        volume: volumeOrder,
        sizes: ingredientsAsk[j][2],
      })
      console.log(order);
      await order.save();
     } else {
       const res = await Order.update( {ingredients : `Водка Finlandia` }, {$set: {volume:`${}`}} ) 
       //иначе если такой ингредиент есть 

      console.log('tuta');
     }
  }
    

}

}
fullOrder(arrayofValue);

// [["Водка Finlandia","50","мл"],["Кофейный ликер BOLS","25","мл"],["Лед в кубиках ","120","г"]]


//   [ 'Водка Finlandia', '50', 'мл' ],
//   [ 'Лаймовый сок ', '10', 'мл' ],
//   [ 'Имбирное пиво ', '100', 'мл' ],
//   [ 'Лайм ', '20', 'г' ],
//   [ 'Лед в кубиках ', '200', 'г' ]
// ],
// _id: 5f48c38b24a3917b3ec94dc0,
// title: 'Московский мул',

//     [ 'Выдержанный ром ', '45', 'мл' ],
//     [ 'Дюбонне ', '15', 'мл' ],
//     [ 'Апероль Aperol', '15', 'мл' ],
//     [ 'Какао ликер коричневый BOLS', '5', 'мл' ],
//     [ 'Херес манзанилья ', '15', 'мл' ],
//     [ 'Ревеневый биттер ', '1', 'мл' ],
//     [ 'Лимонная цедра ', '1', 'шт' ],
//     [ 'Лед в кубиках ', '420', 'г' ]
//   ],
//   _id: 5f48c38124a3917b3ec94d8b,
//   title: 'Иностранный легион', 10
  
