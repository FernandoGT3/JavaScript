//Arrays
//Método Splice
//nomes.splice((índice que quero mexer), (qunatos elementos quero remover do array), (elementos para adicionar))

const nomes = ['Eduardo', 'Maria', 'Joana', 'Wallace', 'Rosana']; 

//Simulando o:

//POP -> removendo ÚLTIMO elemento do Array
//Também retorna o elemento removido, porém retorna um Array, porque podemos remover mais de um elemento
let removidos = nomes.splice(-1, 1); //podia ser (4,1) ou (-2, NUmber.MAX_VALUE), começa do penultimo e vai até o infinito
console.log(nomes, removidos);

removidos = nomes.splice(2, 2, 'Luiz', 'Moloni'); //adicionando no índice que passmaos (3 e 2) e removendo Joana e Wallace
console.log(nomes, removidos);

//SHIFT -> removendo PRIMEIRO elemento do Array

removidos = nomes.splice(0, 1);
console.log(nomes, removidos);

//PUSH -> adicionando um elemento no FINAL do Array

nomes.splice(nomes.length, 0, 'Otávio');
console.log(nomes, removidos);

//UNSHIFT -> adicionando um elemento no COMEÇO do Array

nomes.splice(0, 0, 'Fernando');
console.log(nomes, removidos);
