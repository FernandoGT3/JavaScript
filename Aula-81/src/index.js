//Modules -> São arquivos no JS
//Ao exportamos de um arquivoJs uma variável/função/classe, habilitamos a possibilidade
//de outro arquivo importar a variável/função/classe.

import { nome as nomeImport, sobrenome, idade, somaTudo } from "./modulo1"; //importando
           //renomeando na importação 
//pode ocorrer de já termos uma variável com o mesmo nome
const nome = 'Fernando'; //uma variável colide com a outra

console.log(nome, nomeImport, sobrenome, idade);
console.log(somaTudo(5, 5));

import { Pessoa } from "./modulo1";

const p1 = new Pessoa('Samuel','Santos');

console.log(p1);

//podemos importar tudo
import * as MeuModulo from './modulo1';

console.log(MeuModulo); //um objeto com tudo que foi exportado

import qualquerNome from './modulo1'; //(qualquerNome) não esta entre {}, porque estamos importando o padrao, vai buscar o que é padrão no módulo que passamos como caminho
console.log(qualquerNome(5,5)); 