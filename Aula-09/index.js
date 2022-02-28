//Operadores
/** Aritméticos
 * + (Faz a Adição e a Subtração)
 * -
 * *
 * /
 * **(potenciação)
 * % (Resto da Divisão)
 * 
 * Ordem de Precedência
 * () ** 
 *  * / % 
 *  + -
 */

const num1 = 5;
const num2 = 10;
console.log(num1 + num2);
console.log(num1 ** num2);
console.log(num1 % num2);


//Se for cons num1 = "5";
//Ocorreria uma concatenação, e a saída seria: 510

let contador = 1;
contador++; //incrementa
//ou ++contador

/**
 * Oparadores de Atribuição
 * contador += 2 é igual a contador = contador + 2
 * contador **= 10 é igual a contador = contador ** 10*/ 

console.log(contador);

//NaN = Not a Number
//parseInt converte strings para int
//parseFloat converte string para float
//Number converte string para Number

const num3 = 10;
const num4 = parseInt('5');

console.log(num3 + num4);