const path = require('path');

//caminho absoluto
const caminhoArquivo = path.resolve(__dirname, 'test.json');

const escreve = require('./modules/escrever');
const ler = require('./modules/ler');

// const pessoas = [
//     {nome: "João"},
//     {nome: "Maria"},
//     {nome: "Eduardo"},
//     {nome: "Luiz"},
//     {nome: "Samuel"},
//     {nome: "Bruno"},
//     {nome: "Eduarda"},
//     {nome: "Jośe"},
//     {nome: "Gustavo"}
// ];
// const json = JSON.stringify(pessoas, '', 2);//convertendo obj para JSON

// escreve(caminhoArquivo, json); //criando o arquivo

async function leArquivo(caminho){
    const dados = await ler(caminho); //lendo o arquivo
    redenrizaDados(dados);
}

function redenrizaDados(dados){
    dados = JSON.parse(dados); //convertendo o json em um objeto
    dados.forEach(val => {
        console.log(val.nome);
    });
}

leArquivo(caminhoArquivo);
