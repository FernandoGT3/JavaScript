module.exports = (req, res, next) => {
    console.log();
    console.log('Passei no seu middlewar global');
    console.log();

    if(req.body.cliente){//interceptando quando houver o campo preenchido
        req.body.cliente = req.body.cliente.replace('Moloni', 'Santos')//interceptando o valor e alterando o valor
        console.log(`Vi que você postou ${req.body.cliente}`);
    }
    next();
};

exports.outroMiddleWare = (req, res, next)  => {
    console.log('Sou outro Middleware');
    next();
}