const HomeModel = require('../models/HomeModels');

//Quando pedimos para o mongoose criar, é criado a Base de Dados, Tabela e o Dado
HomeModel.create({ //retorna uma promessa e o doc criado 
    titulo: 'Um Título de Teste 2',
    descricao: 'Uma Descrição de Teste 2'
}).then(dados => console.log(dados)).catch(e => console.log(e));

// HomeModel.find(); mostra todos os dados que temos na base de dados

exports.paginaInicial = (req, res, next) => {
    console.log('Respondendo o Cliente');
    res.render('index');
    console.log(`Olha a req.session.nome: ${req.session.nome}`);
    next();
};

exports.trataPost = (req, res) => {
    res.send(req.body);
    console.log(req.body);
}