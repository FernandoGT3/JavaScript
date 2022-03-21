//Express Middlewares-> Podemos por uma função no meio do caminho,
//ou depois de ter respondido o cliente, para realizar alguma tarefa
//Uma função chama a outra, e esta chama a outra.........

const express = require('express');
const app = express();
const routes = require('./routes');
const path = require('path');
const meuMiddleware = require('./src/middlewares/middleware');//importando o middle global
const { outroMiddleWare } = require('./src/middlewares/middleware'); //importando por associção via desestruturação


app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.resolve(__dirname, "public")));

app.set('views', path.resolve(__dirname, "src", "views"));
app.set('view engine', 'ejs');

//Middle a nivel de todas as rotas e verbos
app.use(meuMiddleware);
// app.use(outroMiddleWare);

app.use(routes);

app.listen(3000, () => {
    console.log('Acessar http://localhost:3000/');
    console.log('Servidor Executando na Porta 3000');
});
