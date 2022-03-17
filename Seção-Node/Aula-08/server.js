//Parâmetros
 const express = require('express');
 const app = express();

//URL PARAMS
//http://facebook.com/profiles/4232
//única coisa que muda dentro da rota http://facebook.com/profiles/ é o parâmetro da url (4232)

//QueryStrings-> é um par de chave e valor
//(campanha=googleads&nome_campanha=seila)
//inicia apos o ?
//http://facebook.com/profiles/4232?campanha=googleads&nome_campanha=seila

//===========================================================================================//

//Tipo de Requisição que vai no corpo da Requisição -> Quando Postamos um Formulário
//Não aparece para o usuário na url os dados

app.use(express.urlencoded({extended: true}));//fazendo com que o express trate os dados do body postados e retorna um objeto
//assim, qualquer put/post será tratado, não aparecerá como undefined
app.get("/", (req, res) => {
    res.send(`
        <form action='/' method = "POST">
        Nome: <input type="text" name="nome">
        <button>Enviar</button>
    `);
});

app.post("/", (req, res) => {
    console.log(req.body); //tem em POST e PUT
    res.send(`O que você me enviou foi: ${req.body.nome}`);
});


//URL PARAMS
//com /testes não podemos receber parâmetros
//com /testes/:idUsers podemos receber parâmetros e estes serão adicionados na chave idUser no objeto, porém /testes não funciona mais
//com /testes/:idUsers? deixa opcional, podemos ou não receber os parâmetros e ambos funcionam
                  //recebendo os parâmetros com :idUsers, o (?) deixa o parâmetro opcional, ele pode ou nao ser enviado, assim o /teste volta a funcionar
app.get('/testes/:idUsers?', (req, res) => {
    console.log(req.params); //cria um objeto que irá conter os objetos que mandarmos
    res.send(req.params);//usando obj dentro do sistema
});
//se mandarmos: http://localhost:3000/testes/123 teremos : {idUser: '123}

//Query Strings -> não precisamos alterar nada
app.get('/test', (req, res) => {
    console.log(req.query)
    res.send(req.query);
});

//===================================================================================//

 app.listen(3000, () => {
     console.log('Acessar http://localhost:3000/');
     console.log('Servidor Executando na Porta 3000');
});
