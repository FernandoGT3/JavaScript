//Valores Primitivos e Valores por Referência
/**
 * Tipos de Dados:
 * Primitivos - são valores imutáveis --> string, number, boolean, undefined, null e (bigint e symbol)-- são copiados quando atribuidos
 * Referência - são valores mutáveis --> Arrays, Object, Function -- são passados por referência quando atribuidos
 */

let nome = 'Luiz';
nome = 'Moloni'; //não está mudando o dado, o valor primitivos, mas sim trocando o valor da variável
//já se tentarmos

nome[0] = 'R'; //não conseguimos, porque as string são imutáveis

let a ='A';
let b = a; //faz um cópia e ficam independentes

let c = [1, 2, 3];
let d = c; //porém neste caso não há uma cópia, neste caso b aponta para o mesmo local que a aponta na memória
//assim se alterarmos uma das duas, ambas serão afetadas
let e = [...c]; //copiando valor de C

console.log (c,d,e);

c.push(4);
console.log (c,d,e);

//Mesma coisa para objetos

const pessoa1 = {
    nome: 'José',
    sobrenome: 'Moloni',
    idade:18
};

const pessoa2 = {...pessoa1}; //copiando, as pessoas ficam independentes