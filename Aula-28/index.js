//Atribuição Via Desestruturação (Arrays)
//O operador (...) faz duas coisas: pode ser rest operator ou spread (espalha)

//indices        0  1  2  3  4  5  6  7  8 
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const [primeiroNumero, segundoNumero, ,quartoNumero, ...resto] = numeros;

console.log(primeiroNumero, segundoNumero,quartoNumero);
console.log(resto);


//Se tivermos um array dentro de outros array
//                0          1          2
//             0  1  2    0  1  2    0  1  2
const num = [ [1, 2, 3], [4, 5, 6], [7, 8, 9] ]
console.log(num[1][2]);

const [, [, , seis]] = num;
console.log(seis);
//Exemplo
let a = 'A'; //B
let b = 'B'; //C
let c = 'C'; //A

const letras = [b, c, a];
        [a, b, c] = letras;
// desestruturação        array

console.log(a, b, c);
