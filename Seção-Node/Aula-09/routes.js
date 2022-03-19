const express = require('express');

const route = express.Router();//Router é responsável por tratar as rotas
//e envia para o controller correto
const homeController = require('./controllers/homeController'); //importando o homeController por completo
//O trabalho dele é fazer um roteamento, ver qual rota é, e chamar um controlador do padrão MVC
//Que vai decidir qual view/model vamos usar
const contatoController = require('./controllers/contatoController');



//Rotas da Home
route.get("/", homeController.paginaInicial);

route.post('/', homeController.trataPost);

//Rotas de Contato
route.get('/contato', contatoController.paginaInicial);
module.exports = route;