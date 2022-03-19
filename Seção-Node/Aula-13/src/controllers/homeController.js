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