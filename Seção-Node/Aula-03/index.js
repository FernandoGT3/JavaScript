//"express": "^4.17.3" --> o ^indica que pode atualizar dentro da versão 4 para qualquer outra versão
//pode atualizar quanto a minor como a patch
//se quisermos uma versão exata, sem updates --> npm install express-E
// p ~só atualiza o patch
// 4.    17.    3
//major  minor  patch
// (quebra compatibilidade com versões anteriores)   (novo recurso)   (correção de bugs)
//npm update --> atualiza os pacotes

//Dependências de Desenvolvimento -> Babel/Webpack -> porque geram o arquivo final durante o desenvolvimento
// quando a aplicação estiver rodando no servidor o webpack não será mais necessário

// npm install express --save-dev //movendo para dev-dependences

// npm install express --save-prod //movendo para dependences

//versão específica --> npm install express@2.1.0

//npm uninstall express --> desinstala

//npm ls -> lista os pacotes instalados e dependencias

//npm ls --depth=0 //mostra só o que instalamos

//npm outdated --> mostra os pacotes desatualizados

