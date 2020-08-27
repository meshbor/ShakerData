let express = require('express');
let app = express();
let request = require('request');
let cheerio = require('cheerio');
let port = 8080;

let url = "https://ru.inshaker.com/cocktails/90-aviatsiya";

let content = [];

request(url, function(err, res, body) {
  let $ = cheerio.load(body);
    $('enclosure').each(function(i, elem) {
    	content.push($(this).attr('url'));
   });
    for (let i = 0; i<content.length; i++) {     
      console.log(content[i]);   
    }
});

app.listen(port);


module.exports = { request() }
