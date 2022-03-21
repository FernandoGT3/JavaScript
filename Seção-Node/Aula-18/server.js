//RESUMO

require('dotenv').config();//referente as variáveis de ambiente que estão no arquivo .env
//contem os dados do servidor

const express = require('express');
const app = express(); //iniciando express

const mongoose = require('mongoose');//vai modelar os dados, e garantir que os dados sejam
// salvos da forma dos esquemas
mongoose.connect(process.env.CONNECTIONSTRING)//enviando os dados da conexão //retorna uma promessa
    .then(() => { //retorna uma promessa
        console.log('Conectado a Base');
        app.emit('Pronto');//Fazendo com que app emita um evento, falando que o mongoose ja está conectado
    }).catch(e => console.log(e));

const session = require('express-session');// para identificar o navegador de um cliente
//geralmente salvamos um cookie com ID no pc do cliente, sendo checado pelo servidor ao retornar a sessão
const MongoStore = require('connect-mongo'); //falar que as sessões serão salvas na base de dados
//por padrão são salvas em memória
const flash = require('connect-flash');//mensagens auto-destrutivas, são salvas na sessão

const routes = require('./routes');//rotas da aplicação
const path = require('path');

const helmet = require('helmet');//importando o helmet

const csrf = require('csurf');//csrf tokens que são criados para os formulários, faz com que sites externos não consigam postar coisas em nossa aplicação

//middlewares são funções que são executadas na rota
// const meuMiddleware = require('./src/middlewares/middleware');//importando o middle global
const { checkCSRFError, meuMiddleware, csrfMiddleware } = require('./src/middlewares/middleware'); //importando por associção via desestruturação

app.use(express.urlencoded({ extended: true })); //podemos postar formulários para dentro da aplicação

app.use(express.json()); //fazendo parse de json para dentro da aplicação

app.use(express.static(path.resolve(__dirname, "public")));//arquivos estáticos da aplicação que podem ser acessados diretamente(img, css, js)

app.use(helmet());//usando o helmet

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

app.set('views', path.resolve(__dirname, "src", "views")); //arquivos que renderizamos na tela
app.set('view engine', 'ejs');

app.use(meuMiddleware);

//A cada formulário vamos injetar um token, como se fosse uma senha, checando se o csrf é válido
app.use(csrf());//prevenindo o ataque

app.use(checkCSRFError); //checando o csrf
app.use(csrfMiddleware); //criando tokens

app.use(routes);

//quando o app estiver pronto, passo a função e executo o que quiser
//fazendo com que primeiro conecte a base e depois o app comece a escutar 
app.on('Pronto', () => {
    app.listen(3000, () => {
        console.log('Acessar http://localhost:3000/');
        console.log('Servidor Executando na Porta 3000');
    });
});

