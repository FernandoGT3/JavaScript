//Arrays
//Reduce -> Reduz o Array em um Unico elemento
//Difere das outras por ter o ACUMULADOR como parâmetro

// Some todos os números (reduce)
// Retorne um Array com os pares (Filter)
// Retorne um Array com o Dobro dos Valores (MAP)
//               0  1   2   3  4  5  6..........
const numeros = [5, 50, 80, 1, 2, 3, 5, 12, 34, 65, 78, 08, 45];

const total = numeros.reduce(function(acumulador, valor, indice, array){
    acumulador += valor;
    return acumulador;
}, 0);//valor inicial para o acumulador, se não por, o valor inicial será o primeiro elemento

console.log(total);

//Reduce Fazendo o Papel do Filter
const pares = numeros.reduce(function(acumulador, valor){
    if(valor % 2 === 0) acumulador.push(valor);
    return acumulador;
}, []);

console.log(pares);

//Reduce Fazendo o Papel do MAP
const Dobro = numeros.reduce(function(acumulador, valor){
    acumulador.push(valor * 2);
    return acumulador;
}, []);

console.log(Dobro);

//Retorne a Pessoa mais Velha

const pessoas = [
    {nome: 'Luiz', idade: 62},
    {nome: 'Maria', idade: 23},
    {nome: 'Eduardo', idade: 55},
    {nome: 'Leticia', idade: 19},
    {nome: 'Rosana', idade: 72},
    {nome: 'Wallace', idade: 47}
];

const maisVelha = pessoas.reduce(function(acumulador, valor){ //o acumulador é o primeiro elemento e o valor é o segundo 
    if(acumulador.idade > valor.idade) return acumulador;
    return valor; //o acumulador passa a ser o valor
});//enviando o valor o acumulador é zero e o valor é o primeiro elemento

console.log(maisVelha);