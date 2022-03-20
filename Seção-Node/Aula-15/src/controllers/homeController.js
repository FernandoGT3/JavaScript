
exports.paginaInicial = (req, res, next) => {
    // req.session // a session ativou este recurso ( um objeto) que está dentro da requisição
    //adicionando coisas nesse objeto 

    // req.session.usuario = { nome: 'Luiz', logado: true};//podemos apagar/ reiniciar, que o objeto ainda estará aqui
    res.render('index');
    console.log(req.session.usuario);// o objeto permanecerá intacto por 7 dias
    //        ((tipo de menagem que vou mandar), (mensagem))
    // req.flash('info', 'Olá Mundo');
    // req.flash('error', 'Falha ao Logar');//podemos ter o quanto quisermos
    // req.flash('success', 'Cadastrado !');    
    //elas vão subir se recarregarmos a tela
    console.log(req.flash('error'), req.flash('success'), req.flash('info'));
    next();
};

exports.trataPost = (req, res) => {
    res.send(req.body);
    console.log(req.body);
}