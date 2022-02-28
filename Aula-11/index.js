//Exercício

//Valor de A tenha valor de B
//Valor de B tenha valor de C
//Valor de C tenha valor de A

let varA = "A"; //B
let varB = "B"; //C
let varC = "C"; //A
let varGuarda = null;

varGuarda = varA;

varA = varB;
varB = varC;
varC = varGuarda;

console.log(varA, varB, varC);