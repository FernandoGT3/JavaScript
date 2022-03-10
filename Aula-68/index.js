//Objeto Map

const pessoas = [
    { id: 3, nome: 'Luiz' },
    { id: 2, nome: 'Maria' },
    { id: 1, nome: 'Helena' },
];

//Queremos por o Id como a chave neste objeto

// const novasPessoas = {};

//Destructuring
// for (const pessoa of pessoas){
//     const {id} = pessoa;
//     novasPessoas[id] = {...pessoa};
// }

// console.log(novasPessoas);

/**
 * {
  '1': { id: 1, nome: 'Helena' },
  '2': { id: 2, nome: 'Maria' },
  '3': { id: 3, nome: 'Luiz' }
}
 */

//no objeto as chaves só podem ser um simbol ou string, os numbers foram convertidos para string
//e a ordem foi alterada

//por isso usaremos map
const novasPessoas = new Map();

for (const pessoa of pessoas) {
    const { id } = pessoa;
    novasPessoas.set(id, { ...pessoa }); //setando o valor, e podem ser qualquer coisa
}                  //( chave, valor)

console.log(novasPessoas);

console.log(novasPessoas.get(2));//pegando o valor

//Saida
/*Map {
    3 => { id: 3, nome: 'Luiz' },
    2 => { id: 2, nome: 'Maria' },
    1 => { id: 1, nome: 'Helena' }
  } */


  //Ordem de inserção se manteve

  for (const [identifier, {id, nome}] of novasPessoas) {
    console.log(identifier, id, nome); //setando o valor, e podem ser qualquer coisa
}

novasPessoas.delete(2); //deletando a chave 2

console.log(novasPessoas);