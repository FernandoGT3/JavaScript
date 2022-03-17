 //Express-> MicroFrameWork
//Ajuda a trabalhar nas rotas da Aplicação

//http://meusite.com/ (/) é uma rota que seria a home do site
//se acessarmos pelo navegador, estamos pedindo ('GET'), para que o navegador entregue a página
//o navegador faz o "GET", o servidor (express) será responsável por saber a rota e a página que deve entregar

//Nas Operações CRUD -> CREATE, READ, UPDATE, DELETE -> Que fazemos na Internet
//Métodos:               POST    GET    PUT   DELETE
//Podemos ter cada um desses métodos numa mesma rota, e entregar uma página para cada uma

//http://meusite.com/ <- GET -> Entregue a Página /
//http://meusite.com/sobre <- GET -> Entregue a Página /sobre
//http://meusite.com/contato <- GET -> Entregue a Página /contato

 const express = require('express');
 const app = express();

 app.get('/', (requisicao, resposta) => {
    resposta.send('Hello World!');
 });
 //((rota), (função que recebe(requisição(referente ao que estou pedindo), resposta(o que vou mandar para o servidor))))
 //o cliente faz a requisição e o servidor tem o trabalho de entregar a resposta

 //O servidor precisa ficar ouvindo em determinada porta do PC, qualquer requisição que chegar nessa porta é respondida
 //Um porta é referente a um processo que está sendo executado no seu servidor, se houver algo rodando em uma porta e tentarmos
 //rodar o express dará erro, por isso usamos portas 3000 e 3333

 app.get("/contato", (req, res) => {
     res.send('Obrigado por entrar em contato com a gente!!');
 });

 app.get("/form", (req, res) => {
    res.send(`
        <form action='/form' method = "POST">
        Nome: <input type="text" name="nome">
        <button>Enviar</button>
    `);
});

app.post("/form", (req, res) => {
    res.send('Recebi o Formulário!!');
});
//Post é para criar, geralmente mandamos dados no corpo da requisição

 app.listen(3000, () => {
     console.log('Acessar http://localhost:3000');
     console.log('Servidor Executando na Porta 3000');
});
//node server.js --> inicia o server