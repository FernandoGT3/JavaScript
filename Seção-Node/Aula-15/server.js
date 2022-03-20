//Sessões- É um modo de identificar um navegador específico do cliente,
//quando salvamos dados de login (por exemplo), os dados do navegador são salvos no servidor
//e um cookie é gerado, ao fazer uma requisição ele envia junto este cookie
//se os cookies forem iguais, os dados são logados (por exemplo)
//não funciona em guia anônima

//Express Session -> Armazena os dados da sessão no servidor;

//Flash Messages -> Mensagens salvas na sessão, que ao usarmos ela deixa de existir ( como quando digitamos a senha errada)
//Salvar a Sessão em Memória é inviável -> Consome muita memória do Servidor e se reiniciarmos o servidor
//perdemos as sessões ativas

require('dotenv').config();

const express = require('express');
const app = express();

const mongoose = require('mongoose');

mongoose.connect(process.env.CONNECTIONSTRING)//enviando os dados da conexão //retorna uma promessa
    .then(() => {
        console.log('Conectado a Base');
        app.emit('Pronto');//Fazendo com que app emita um evento 
    }).catch(e => console.log(e));

const session = require('express-session');
const MongoStore = require('connect-mongo'); //já enviando a sessão
const flash = require('connect-flash');

const routes = require('./routes');
const path = require('path');
const meuMiddleware = require('./src/middlewares/middleware');//importando o middle global
const { outroMiddleWare } = require('./src/middlewares/middleware'); //importando por associção via desestruturação

app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.resolve(__dirname, "public")));

//configurando a sessão
const sessionOptions = session({
    secret: 'omceMCFSADFMCACFSMODmmoampdwcmpqw', //texto que ninguem vai saber
    //store: new MongoStore({ mongooseConnection: mongoose.connection}), //enviando o cliente de conexão do MongoDB
    reseva: false,
    saveUninitialized: false,
    cookie: {
        maxAge: (1000*60*60*24) * 7, //tempo q vai durar o cookie (7dias)
        httpOnly: true
    },
    store: MongoStore.create({ mongoUrl: process.env.CONNECTIONSTRING})
});

app.use(sessionOptions);
app.use(flash());

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

