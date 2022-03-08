//Arrays
//Map -> Similar ao Filter, porém altera os valores do Array (não o do Original, mas sim do retornado)
//Recebemos um Array com o mesmo tamanho do Original, só que com valores modificados
//Mesma Coisa que o Filter ---> Recebe a função de callback, envia os parâmentros (valor, indice e array), retorna um novo Array

//Dobre os Números
//               0  1   2   3  4  5  6..........
const numeros = [5, 50, 80, 1, 2, 3, 5, 12, 34, 65, 78, 08, 45];

// const numerosDobro = numeros.map(function(valor, indice, array){
//     return valor * 2;
// });

const numerosDobro = numeros.map(valor => valor * 2);

console.log(numerosDobro);

//Para cada elemento:
//Retorne apenas uma string com o nome da pessoa
//Remova apenas a chave "nome" do objeto
//Adicione uma chave ID em cada objeto

const pessoas = [
    {nome: 'Luiz', idade: 62},
    {nome: 'Maria', idade: 23},
    {nome: 'Eduardo', idade: 55},
    {nome: 'Leticia', idade: 19},
    {nome: 'Rosana', idade: 32},
    {nome: 'Wallace', idade: 47}
];

const nomes = pessoas.map((valor) => valor.nome);

// const idades = pessoas.map((valor) => {
//     delete valor.nome;
//     return valor;
// });

const idades = pessoas.map((valor) => ({ idade: valor.idade }));

const comID = pessoas.map(function(valor, indice){
    const novoObj = {...valor}; //criando um novo objeto para não mexermos no original, já que objetos são passados por referência
    novoObj.ID = indice;
    return novoObj;
});

console.log(nomes);
console.log(idades);
console.log(comID);
console.log(pessoas); //OBJ ORIGINAL INTACTO