//Arrays
//Filter- Filtra os Valores de um Array ->Sempre retrona um Array com a msm quantidade de elementos ou menos
//NÃO MODIFICA O ARRAY ORIGINAL
//.filter((recebe um função de callback que vai iterar sobre os elementos do Array))
//Requer você retorne um bollean (true ou false)
//true -> para quando queremos que o elemento seja embutido no novo array
//false -> para quando NAO queremos que o elemento seja embutido no novo array
//Retorne os números maiores que 10
//               0  1   2   3  4  5  6..........
const numeros = [5, 50, 80, 1, 2, 3, 5, 12, 34, 65, 78, 08, 45];

// function callbackFilter(valor, indice, array){//recebe os parâmetros automaticamente
//     console.log(valor, indice); a cada laço ele manda um valor, como se fosse um 'for' 
//      return (valor > 10);
// }

// const maioresDez = numeros.filter(callbackFilter); //criando um novo array e recebendo os valores filtrados
//não queremos executar função que criamos
//mas sima, que a função filter a execute, por isso não usamos: callbackFilter();

//diminuindo o código
const maioresDez = numeros.filter((valor) => valor > 10); 

console.log(maioresDez);

//Retorne as Pessoas que tem o nome com 5 letras ou mais
//Retorne as Pessoas com mais de 50 anos
//Retorne as Pessoas cujo nome termina com a

const pessoas = [
    {nome: 'Luiz', idade: 62},
    {nome: 'Maria', idade: 23},
    {nome: 'Eduardo', idade: 55},
    {nome: 'Leticia', idade: 19},
    {nome: 'Rosana', idade: 32},
    {nome: 'Wallace', idade: 47}
];

const pessoaComNome5 = pessoas.filter((valor) => (valor.nome.length >= 5));

const pessoaComMais50 = pessoas.filter(valor => valor.idade > 50);

const pessoaComFinalA = pessoas.filter(valor => valor.nome.toLowerCase().endsWith('a')); //deixando com letra minúscula e vendo se termina com a

console.log(pessoaComNome5);

console.log(pessoaComMais50);

console.log(pessoaComFinalA);