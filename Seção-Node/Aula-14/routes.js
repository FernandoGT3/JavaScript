const express = require('express');

const route = express.Router();

const homeController = require('./src/controllers/homeController'); 
const contatoController = require('./src/controllers/contatoController');

//trabalhando em uma rota e verbo específico
function meuMiddleware(req, res, next) { //(next) é a próxima função que será executada, precisa chamar a próxima função
    //usando seções para salvar os dados do usuário 
    req.session = {
        nome: 'Luiz',
        sobrenome: 'Moloni'
    };//atrelando algo na requisição, então chegará até o último middle, uma corrente
    console.log();
    console.log('Passei no seu middleware');
    console.log();
    next();//sem o (next), o segundo não é chamado e a requisição, não termina
}
//Rotas da Home
route.get("/", meuMiddleware, homeController.paginaInicial, function (req, res){
    console.log();
    console.log('Ainda estou aqui........');
    console.log();

    console.log(`Olha a req.session.sobrenome: ${req.session.sobrenome}`);
});

route.post('/', homeController.trataPost);

//Rotas de Contato
route.get('/contato', contatoController.paginaInicial);
module.exports = route;