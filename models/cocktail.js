const mongoose = require('mongoose');

module.exports = mongoose.model("cocktail", {
  title: String,
  titleEng: String,
  filters: Array,
  img: String,
  ingredients : Array,
  nameofIngr: String,
  volume: Number,
  sizes: String,
  recipe: String,
  description: String,
});

