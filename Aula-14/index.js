//Objeto Math

let num1 = 9.54578;

let num2 = Math.floor(num1); //arredondando para baixo, o inteiro mais próximo
let num3 = Math.ceil(num1); //arredondando para cima, o inteiro mais próximo
let num4 = Math.round(num1); //arredonda para o mais próximo

console.log(num2, num3, num4);

console.log(Math.max(1, 2, 3,10, 15, 45, 50, -9)); //pega o maior número de uma sequência
console.log(Math.min(1, 2, 3,10, 15, 45, 50, -9)); //pega o menor número de uma sequência

const aleatório = Math.random() * (10 - 5) + 5 //entre 10 e 5
console.log(aleatório);//gera números aleatórios

console.log(Math.pow(2, 10)); //potenciação
console.log(9 ** (1/2)); //raiz
console.log(Math.sqrt(9));

//No Js não dá erro a divisão por zero, e temos como conta verdadeira

console.log(100/0);