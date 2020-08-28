const mongoose = require('mongoose');

module.exports = mongoose.model("order", {
  title: String,
  ingredients : String,
  volume: Number,
  sizes: String,
  });

