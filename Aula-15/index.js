//Arrays -> São listas, coleções de coisas, é considerado um objeto indexado
//                0       1       2
const alunos = ['Luiz','Maira','João'] // também caberia : true, 1, null];
//o ideal é manter os arrays com somente um tipo de dado
// os arrays são indexados por elemento

alunos[0] = 'Eduardo'; //alterando um elemento
alunos[3] = 'Luiza' //adicionando um elemento
//desse jeito precisa saber o tamanho do array

console.log(alunos.length); //tamanho do array

alunos[alunos.length] = 'Mário' //adicionando um elemento
alunos[alunos.length] = 'Fábio' 
alunos[alunos.length] = 'Luana' 

alunos.push('Otávio'); //adiciona no final sem precisar saber o tamanho do array

//se quisermos adicionar no começo precisamos mover os elementos
alunos.unshift('Dora');//essa função faz isso

const removido = alunos.pop(); //remove elemento do fim e poe numa variável

alunos.shift(); //remove do começo
// se queremos remover um elemento e não alterar os índices
// podemos usar
delete alunos[3]; //como não altera os índices, ficaremos com um elemento vazio nessa posição

console.log(alunos);
console.log(alunos instanceof Array); //verificando se é um array
console.log(alunos[0]);
console.log(alunos[2]);

console.log(alunos[50]); //acessando um valor que não existe
// temos o valor "undefined" como resposta, não aponta pra nenhum local na memória

//fatiando o array
console.log(alunos.slice(0,(alunos.length +1)));

