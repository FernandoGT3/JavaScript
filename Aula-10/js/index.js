
/*
alert('Olá Mundo!');//não retorna nada
//É um atalho para window.alert();, onde window é um objeto, alert está dentro deste objeto
//Método está dentro de um objeto, funções estão fora do objeto
window.confirm('Deseja realmente apagar?'); //retorna true ou false

window.prompt('Digite o seu nome'); //retorna o input

const confirma = confirm('Deseja realmente apagar?');
*/

//Desafio

let num1 = prompt('Digite um número');
let num2 = prompt('Digite um outro número');

num1 = Number(num1);
num2 = Number(num2);

alert(`O resultado  da conta foi : ${num1 + num2}`);

