const nome = 'Luiz';
const sobrenome = "Moloni";

const falaNome = () => console.log(nome,sobrenome);

//Node disponibiliza um objeto que podemos adicionar coisas e exportar para fora do módulo

console.log(module);

//possui a chave 'exports', isso que será exportado para fora

// module.exports.nome = nome; //exportando a chave nome com o valor nome

// module.exports.sobrenome = sobrenome;

// module.exports.falaNome = falaNome;

//tem um atalho, exports é uma referência para module.exports

exports.nome = nome;
exports.sobrenome = sobrenome;
exports.falaNome = falaNome;

//(this) aponta para exports

this.qualquerCoisa = 'Exportando pelo This';

console.log(exports);

// module.exports = { //sobreescrevendo o objeto inteiro
//     nome, sobrenome, Pessoa
// }

class Pessoa {
    constructor(nome){
        this.nome = nome;
    }
}

exports.Pessoa = Pessoa;