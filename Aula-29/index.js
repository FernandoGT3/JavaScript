//Atribuição Via Desestruturação (Objetos)

const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Molonni',
    idade:19,
    endereco: {
        rua:'Av Brasil',
        numero:320
    }
};
                                  //definindo um valor padrão para altura
const { nome, sobrenome: lastName, idade, altura = 'Não existe' } = pessoa; // extraindo do objeto esta chave e já cria uma variável
              //colocando outro nome na variável, especificando a chave e usando outro nome de variável

console.log(nome, lastName, idade, altura);

const { endereco: {rua, numero}} = pessoa; //pegando objeto dentro de objeto

console.log(rua, numero);

const {nome: name, ...resto} = pessoa;

console.log(resto);
