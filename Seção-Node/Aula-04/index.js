//File System -> API para manipular o sistema de Arquivos

const fs = require('fs').promises; //não queremos que retorne o valor antes de terminar de ler os arquivos

const path = require('path');

// fs.readdir(path.resolve(__dirname))//escanear as pastas
// //tem dois tipos de funções(síncrona e assíncrona)
// .then(files => console.log(files))//retorna um array com os arquivos
// .catch(erro => console.log(erro));


async function readdir(rootDir){
    rootDir = rootDir || path.resolve(__dirname);
    const files = await fs.readdir(rootDir);
    walk(files, rootDir);
}
async function walk(files, rootDir) {
    for(let file of files){
        const fileFullPath = path.resolve(rootDir, file)//precisamos do caminho completo baseado na pasta em que esta este arquivo
        const stats = await fs.stat(fileFullPath); //coletando dados do arquivo
        
        if(/\.git/g.test(fileFullPath)) continue;
        if(/\.node_modules/g.test(fileFullPath)) continue;

        if(stats.isDirectory()){ //precisamos saber o que é arquivo e diretório
            readdir(fileFullPath);
            continue; //para não logar os diretórios
        }

        if(!/\.css$/g.test(fileFullPath)) continue;
                
        console.log(file, stats.isDirectory());
        console.log(fileFullPath);
    }
}

readdir('/home/luiz_moloni/Documentos/MeusProjetos/JavaScript/');