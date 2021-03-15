const express = require('express');
const { dirname } = require('path');
const app = express();
const path = require('path');
const { allowedNodeEnvironmentFlags } = require('process');

//settings
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');

//middlewares

//routes
//app.use(require('./routes/index.js'));
//app.use(require('./routes/index'));
app.use(require('./routes/'));


//static files
app.use(express.static(path.join(__dirname, 'public')));

//listening the Server
app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));

});