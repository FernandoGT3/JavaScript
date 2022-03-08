//Arrays
//São Valores por Referência
//Array Literal
const nomes = ['Eduardo', 'Maria', 'Joana', 'Wallace', 'Rosana']; //criando

nomes[2] = 'João'; //alterando o índice 2

const novoArray = nomes.slice(1, -2);//fatiando o Array
console.log(novoArray);

delete nomes[2]; //deletar um elemento sem remover o índice
console.log(nomes);

//Podemos criar usando o construtor do Array
//Funciona para : String, Objetos, Funções, Números

const nomeArray = new Array('Eduardo', 'Maria', 'Joana');

const novo = nomeArray; //tudo que eu fiz em um reflete no outro
const novo2 = [...nomeArray]; //agora um não reflete no outro, porque fizemos apenas uma cópia
//(..)Espalha o Array(Copia)
const removido = novo.pop(); //remove elementos do Array e retorna o elemento removido
//(pop) trabalha no final do Array e o (shift) no começo do Array, e desloca os outros indices do Array

const removido2 = novo2.shift(); 
console.log(nomeArray, removido);

nomeArray.push('Samuel'); //Adicona no final do Array
nomeArray.unshift('Breno'); //Adicona no inicio do Array e desloca os elementos do Array

console.log(novo2, removido2);

//converter string num Array

const nome = 'Luiz Moloni';

console.log(nome.split(" "));

//Para transformar um Array numa string usamos (join)

const nomeArryaString = nomeArray.join(' ');
console.log(nomeArryaString);