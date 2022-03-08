//Arrays
//Concatenar

const A = [1, 2, 3];
const B = [4, 5, 6];

//Queremos juntar no Array C

const C = A.concat(B, [7, 8, 9], 'Luiz');

console.log(C);

//Podemos concatenar também, usando o spread operator(...)
//O (...) pode ser também o rest operator, que usamos para pegar o resto em parâmetros de funções,
//atribuição via desestruturação
//Também funciona em Objetos
const D = [...A,'Luiz', ...B, ...[7, 8, 9]];
console.log(D); 