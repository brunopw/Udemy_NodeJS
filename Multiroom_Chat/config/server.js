/* importar o módulo do framework express */
var express = require('express');

/* importar o módulo do consign */
var consign = require('consign');

/* importar o módulo do body-parser */
var bodyParser = require('body-parser');

/* importar o módulo do express-validator */
var expressValidator = require('express-validator');

/* iniciar o objeto do express */
var app = express();

/* setar configuraçções de engine e views */
app.set('view engine', 'ejs');
app.set('views', './app/views');

/* configurar os middleware express.static, body-parser e express-validator */
app.use(express.static('./app/public'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(expressValidator());

/* configurar o autoload das rotas, models e controllers no consign para o objeto app */
consign()
    .include('./app/routes')
    .then('./app/models')
    .then('./app/controllers')
    .into(app);

/* exportar o objeto app */
module.exports = app;
