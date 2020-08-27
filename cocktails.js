const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/cocktailBase', {useNewUrlParser: true, useUnifiedTopology:true});
const Cocktail = require('./models/cocktail')


async function changeCockt(){
  const cockt  = await Cocktail.findOne({})
  const newCockt = cockt.toString()
  newCockt.split( )


}
changeCockt();

