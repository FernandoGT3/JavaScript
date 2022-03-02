//Operadores de Comparação
/**
 * > maior que
 * >= maior que ou igual a
 * < menor que
 * <= menor que ou igual a
 * == igualdade(checa só o valor), o sinal (=) é de atribuição
 * === igualdade estrita (checa valor e tipo)
 * != diferente
 * !== diferente estrito
 *  */

const comp = 10 > 5;   //podemos por uma expressão em uma variável
console.log(comp); //estamos perguntando algo, então retorna somente true or false

console.log(10 >= 10); // será verdadeira se for maior ou igual, se um dos casos for verdadeira já retorna true

const num1 = 22;
const num2 = '22';

const compara = num1 === num2;

//Se usarmos (==) com 22 e '22', ou seja, mesmo comparando number com string, ele retornará true, porque ele converte os tipos
//Por isso é recomendável usar somente o (===)

console.log(compara);