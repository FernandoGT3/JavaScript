const fs = require('fs').promises;

module.exports = (caminho, dados) =>{
    fs.writeFile(caminho, dados, {flag: 'w', encoding: 'utf-8'} );
    //(caminho do arquivo que queremos escrever), (dados que queremos mandar), opções
    //flag - w --> indica para apagar tudo o que estiver neste arquivo e escrever o que passarmos
    //flag - a --> ele faz um 'append' de escritas, só adiciona novos conteúdos
}
