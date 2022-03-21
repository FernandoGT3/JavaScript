
module.exports = (req, res, next) => {
    //injetando conteúdo em todas as rotas, já que esse middleware é global
    res.locals.umaVariavelLocal = 'Valor da Variável Local';
    next();
};

exports.outroMiddleWare = (req, res, next)  => {

    next();
}