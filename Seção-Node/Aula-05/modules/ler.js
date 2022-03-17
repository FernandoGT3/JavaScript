const fs = require('fs').promises;

module.exports = (caminho) => {
    return fs.readFile(caminho, 'utf-8');//retrona um promise pq está retornando o fs que retorna uma promise
}