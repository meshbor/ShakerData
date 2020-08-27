const express = require('express');
const router = express.Router();
const mongoose=require('express');


router.get('/',(req, res) => {
  res.render('coctail/preview')
})

module.exports = router;
