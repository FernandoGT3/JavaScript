//MongoDB -> Se Conectando a uma Base de Dados, e Criando os Primeiros Models
//DotEnv -> Pacote que gerencia os arquivos, para que ele pegue a senha
//através de um arquivo pessoal --> Cria variáveis de ambiente para o nosso computaodor,
//então vamos remover o arquivo de variáveis de ambiente do repositório
//Mongoose --> Faz a Modelagem de Dados, e a conexão com a base de Dados

//Gerenciando O Arquivo que possui a Senha
require('dotenv').config();

const express = require('express');
const app = express();

//Fazendo a Primeira Conexão com a Base De Dados
//A conexão com a Base de Dados deve ocorrer antes de começar a escutar
const mongoose = require('mongoose');

mongoose.connect(process.env.CONNECTIONSTRING)//enviando os dados da conexão //retorna uma promessa
    .then(() => {
        console.log('Conectado a Base');
        app.emit('Pronto');//Fazendo com que app emita um evento 
    }).catch(e => console.log(e));

const routes = require('./routes');
const path = require('path');
const meuMiddleware = require('./src/middlewares/middleware');//importando o middle global
const { outroMiddleWare } = require('./src/middlewares/middleware'); //importando por associção via desestruturação

app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.resolve(__dirname, "public")));

app.set('views', path.resolve(__dirname, "src", "views"));
app.set('view engine', 'ejs');

app.use(meuMiddleware);

app.use(routes);

//quando o app estiver pronto, passo a função e executo o que quiser
//fazendo com que primeiro conecte a base e depois o app comece a escutar 
app.on('Pronto', () => {
    app.listen(3000, () => {
        console.log('Acessar http://localhost:3000/');
        console.log('Servidor Executando na Porta 3000');
    });
});

