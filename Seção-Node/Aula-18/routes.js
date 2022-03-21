const express = require('express');

const route = express.Router();

const homeController = require('./src/controllers/homeController'); 
const contatoController = require('./src/controllers/contatoController');

//A Rota vai decidir qual controller vai ser utilizado
//Controller -> Contola a Rota, decide as coisas sobre a rota ->> o model(controlar os dados), e o view(o que será renderizado)
//Rotas da Home
route.get("/", homeController.paginaInicial);

route.post('/', homeController.trataPost);

//Rotas de Contato
route.get('/contato', contatoController.paginaInicial);

module.exports = route;