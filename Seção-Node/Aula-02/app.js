const multiplicacao = require('./Z/mod2');

console.log(multiplicacao(2,2));

//Caminhos:
//Usamos (.) para irmos para frente e (..) para irmos para trás
// (.) representa a pasta atual
// ./pasta/arquivo ou ./arquivo, acessa a pasta a (/)
// ../ retorna uma pasta

//Duas variáveis internas do module que podemos usar
console.log(__filename); //nome do arquivo atual
console.log(__dirname);  //nome da pasta atual
//mas é o caminho absoluto

//manipular caminhos -> função de um módulo do node ->path

const path = require('path');
//não sabemos em qual sistema a aplicação irá rodar, ele resolve como colocará a barra
//criará o caminho correto
console.log(path.resolve('__dirname', '..', '..', 'arquivos', 'imagens'));
                                     //retornando duas pastas, entrando na pasta arquivos e dps imgs