//injetando dados só no template do index
exports.paginaInicial = (req, res) => {
    res.render('index', { //podemos injetar um objeto como segundo parâmetro e mandar dados
        titulo: "Título Da Página",
        numeros: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    });
    return;
};

exports.trataPost = (req, res) => {
    res.send(req.body);
    console.log(req.body);
}