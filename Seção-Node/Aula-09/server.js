//Rotas Express -> Separa as Rotas em um Arquivo só de Rotas,
//e adiciona controllers na Aplicação - MVC

const express = require('express');
const app = express();
const routes = require('./routes'); //importando o arquivo de rotas

app.use(express.urlencoded({ extended: true }));
app.use(routes);//falando pro Express usar as rotas

app.listen(3000, () => {
    console.log('Acessar http://localhost:3000/');
    console.log('Servidor Executando na Porta 3000');
});
