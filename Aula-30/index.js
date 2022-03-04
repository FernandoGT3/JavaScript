//Estrutura de Repetição --> For- Clássico
// (i) --> index

// (criar uma variável, uma condição, incrementar ou decrementar)
for(let i = 0; i <= 10; i++){// i += 10, iria de 10 em 10
    console.log(`Linha ${i}`);
}

for(let i = 0; i <= 10; i++){
    const par = i % 2 === 0 ? 'par' : 'ímpar';
    console.log(i, par);
}

//podemos percorrer um array com for
const frutas = ['Maçã', 'Pêra', 'Uva'];

for(let i = 0; i < frutas.length; i++){
    console.log(frutas[i]);
}

//Estrutura de Repetição -> For IN
//Lê os Índices ou Chaves do Objetos
const frutasMais = ['Maçã', 'Pêra', 'Uva'];

for(let i in frutasMais){ //lendo os índices do array
    console.log(frutasMais[i]);
}

const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Molonni',
    idade:19,
    endereco: {
        rua:'Av Brasil',
        numero:320
    }
};

for(let chaves in pessoa){ //lendo os índices da chave
    console.log(chaves, pessoa[chaves]);
}

//Estrutura de Repetição -> For OF
//específico para Objetos Iteráveis(que possuem índices), não precisa do índice, o valor já é pego direto
//STRINGS , ARRAYS
const nome = 'Luiz Moloni'; // é iteŕavel

for(let valor of nome){
    //não vem mais o índice, agora vem o valor
    console.log(valor);
}

//Resumo

const nomes =['Luiz', 'Samuel', 'Dora'];

//For CLÁSSICO -> GERALMENTE COM ITERÁVEIS 
//STRINGS E ARRAYS
for(let i = 0; i < nomes.length; i++){
    console.log(nomes[i]); //usa variável original com a variável de controle
}

console.log("###############");

//For IN -> RETORNA O ÍNDICE OU CHAVE 
//STRING ARRAY OU OBJETOS
for(let chaves in nomes){
    console.log(nomes[chaves]); //obtém o índice
}

console.log("###############");

//For OF -> RETORNA O VALOR EM SI
//ITERÁVEIS, ARRAYS, STRINGS
for(let valor of nomes){
    console.log(valor);  //obtém o valor
}

console.log("###############");

//For EACH
nomes.forEach(function (valor, indice, array){
    console.log(valor, indice, array);
});