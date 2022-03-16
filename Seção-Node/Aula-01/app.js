const mod1 = require('./mod1'); //importando tudo
//vamos fazer um requerimento deste arquivo, para importar o module

const falaNome = require('./mod1').falaNome; //importando só o fala nome
// const {nome, sobrenome, falaNome} = require('./mod1'); importando via destructuring

console.log(mod1);

mod1.falaNome();

const {Pessoa} = require('./mod1'); //quando usamos caminhos, estamos usando módulos criados

//módulos padrão do node ou instalados não requerem caminho
const axios = require('axios');
const path = require('path');

axios('https://www.otaviomiranda.com.br/files/json/pessoas.json')
.then(responde => console.log(responde.data))
.catch(e => console.log(e));


const p1 = new Pessoa('Fernando');

console.log(p1);