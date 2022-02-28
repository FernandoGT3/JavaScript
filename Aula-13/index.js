//Numbers

let num1 = 1500;
let num2 = 2.535355434344;

console.log(num1.toString() + num2); //convertendo o num1 para string temporariamente
console.log(num1.toString(2)); //convertendo para binário

console.log(num2.toFixed(2)); //arredondando o número para duas casas decimais

console.log(Number.isInteger(num1)); //retorna true ou false, diz se o número é inteiro ou não

let temp = num1 * 'olá';

console.log(Number.isNaN(temp)); //retorna true ou false, diz se é ou não um número
//true se não for um número, e false se for

//Imprecisão

let num3 = 0.7;
let num4 = 0.1;

num3 += num4; //daria 0.8, mas costuma dar em 0.79999999999
num3 += num4; //0.9
num3 += num4; //1.0

//ou num3 = ((num3 * 100) + (num4 * 100) / 100)

num3 = parseFloat(num3.toFixed(2)); //Number(), também funcionaria 

/* Poderíamos "resolver" usando o toFixed, o valor se torna correto, porém
   ao checarmos se o num3 é um número inteiro, a resposta será (não), porque no código de máquina ele ainda é float*/
console.log(num3);