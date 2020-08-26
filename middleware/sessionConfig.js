function sessionConfig(app){
    const session = require('express-session');
    const FileStore = require('session-file-store')(session);
    
    app.use(
      session({
        name: 'my_session',
        store: new FileStore(),
        secret: 'keyboard cat',
        resave: false,
        saveUninitialized: false,
        cookie: { 
          expires: 9000000 
        }
      })
    )
};

module.exports = {sessionConfig}
