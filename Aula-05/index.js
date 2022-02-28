//não podemos criar constantes com palavras reservadas pelo JS
//Precisam ter nomes significativos
//Não pode começar o nome de uma constantes com um número, não pode conter espaços ou traços
//Utilizamos camelCase que é (nomeCliente)
//São case-sensitive, letra maiúscula e minúscula fazem diferença
//Não podemos redeclarar constantes com const
//Não podemos modificar teu valor

const nome = 'João'; //Precisamos incializar na declaração
console.log('Jõao');

const primerioNumero = 9;
const segundoNumero = 10;

const resultado = primerioNumero * segundoNumero;
const resultadoDuplicado = resultado * 2;

let resultadoTriplicado =  resultado * 3;
resultadoTriplicado = resultadoTriplicado + 5;

console.log(resultado);
console.log(resultadoDuplicado);
console.log(resultadoTriplicado);

console.log(typeof(primerioNumero)); //saber o tipo da variável