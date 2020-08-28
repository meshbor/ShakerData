const http = require('http');
const app = require('./app');
const mongoose =require('mongoose')


const server = http.createServer(app);
const PORT = process.env.PORT || 4000;


server.listen(PORT, ()=>{
  mongoose.connect('mongodb://localhost/GrishaProject', {useNewUrlParser: true, useUnifiedTopology:true});
  console.log(`i am on ${PORT}`);
});



