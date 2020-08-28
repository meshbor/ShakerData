const express = require('express');
const app = express();
const { middleware } = require('./middleware')
const registerRouter = require('./routes/register')
const loginRouter = require('./routes/login')
const mainRouter = require('./routes/main');
const previewRouter = require('./routes/preview')
const {sessionChecker}= require('./middleware/sessionChecker'); // деструктуризация обязательно и ниже тоже
const {sessionConfig} = require('./middleware/sessionConfig');

middleware(app);
sessionConfig(app); // юзает наш апп



app.get('/', (req,res)=>{
  res.render('main')
});


app.use('/main',mainRouter)
app.use('/login',loginRouter);
app.use('/register',registerRouter)
app.use('/preview',previewRouter)

module.exports = app;

