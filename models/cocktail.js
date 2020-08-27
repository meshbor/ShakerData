const mongoose = require('mongoose');

module.exports = mongoose.model("cocktail", {
  title: String,
  titleEng: String,
  filters: String,
  img: String,
  ingredients : String,
  volume: Number,
  sizes: String,
  recipe: String,
  description: String,
});

