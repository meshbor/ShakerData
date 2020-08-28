const mongoose = require('mongoose');

module.exports = mongoose.model("cocktailPhoto", {
  title: String,
  img: String,
});

