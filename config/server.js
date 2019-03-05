// importando os módulos necessários para startar o servidor
var express = require('express'); // express
var consign = require('consign'); // consign - responsável pelas rotas
var bodyParser = require('body-parser'); // body-parser
var expressValidator = require('express-validator') // express-validator

var app = express();
app.set('view engine', 'ejs'); // motor de geração de views setando pelo express
app.set('views', './app/views'); // indicando onde estão as views EJS

// INCLUINDO MIDDLEWARES >

// inclusão do body-parser - middleware
// urlencoded permite parametros json e afins pela url codificada
app.use(bodyParser.urlencoded({extended: true}));

// inclusão do express-validator - middleware
// funções prontas de validação
app.use(expressValidator());

// AUTO-LOAD DE ROTAS, CONEXÕES COM BANCO E AFINS
// consign reconhece todos os arquivos da pasta routes fazendo scan
// pega os modulos de rota e inclui no start do servidor que é 'app.js'
// funciona como auto-load das rotas e da conexão do banco sem precisar importar em tudo
consign()
    .include('app/routes') // rotas
    .then('config/dbConnection.js') // carregar a conexão de banco de dados - precisa da extensão
    .then('app/models') // incluindo as models no auto-load
    .then('app/controllers') // incluindo os controllers no auto-load
    .into(app); // indicando no server app.js

// exportando as configurações na variável app   
module.exports = app;