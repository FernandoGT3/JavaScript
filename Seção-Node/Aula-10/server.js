//Express Views -> Renderizadno o HTML na tela usando Express
//Certas coisa, precisam ser feitas dentro do template, como if/for,
//dentro do próprio HTML, por isso esta engine, para termos acesso a dados dentro do template
const express = require('express');
const app = express();
const routes = require('./routes');
const path = require('path');

app.use(express.urlencoded({ extended: true }));
app.set('views', path.resolve(__dirname, "src", "views"));
app.set('view engine', 'ejs');
//falando pro express qual pasta usaremos como views, e qual engine usaremos para renderizar
app.use(routes);

app.listen(3000, () => {
    console.log('Acessar http://localhost:3000/');
    console.log('Servidor Executando na Porta 3000');
});
