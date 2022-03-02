/**
 * Operadores Lógicos
 * 
 * && -> AND -> E //todas as expressões precisam ser verdadeiras
 * || -> OR -> OU //se um retornar verdadeiro é true, se todas retornarem falso será false
 * ! -> NOT -> NÃO //inverte uma expressão
 * 
 * False é o falso literal
 * Já os outros são valores que avaliam em falso -> falsy values:
 * 0 -. zero
 * '' "" ->string vazia
 * null/undefined
 * NaN
 * 
 * 
 * O resto avaliam como true
 */

const expressaoAnd = true && false && true; //como tem um false vai retornar falso
console.log(expressaoAnd);

const expressaoOr = true || false || true; 
console.log(expressaoOr);

//Exemplo
const usuario = 'Luiz';
const senha = '123456';

const vailogar = usuario === 'Luiz' && senha === '123456';
console.log(vailogar);

console.log(!true); //invertendo o valor do true

//Avaliação de Curto-Circuito
//Por exemplo quando estamos usando (&&), ao encontrar o 'false' já paramos a checagem

console.log('Luiz' && 0 && 'Maria'); //quando encontra a expressão que avalia em falso ele retorna false

//se nao
console.log('Luiz' && true && 'Maria');//retorna a ultima expressao checada

//Exemplo

function falaOi (){
    return 'Oi';
}

const vaiExecutar = 'Joaozinho'; //se for false ou '', por ex, não aparece nd

console.log(vaiExecutar && falaOi());

//Com Or
console.log(0 || false || null || 'Luiz' || true);//retorna o primerio valor verdadeiro

const corUsuario = null;

const corPadrao = corUsuario || 'red';//se o usuário não setar uma cor aparecerá vermelho

console.log(0 || false || null);// retorna o ultimo falso