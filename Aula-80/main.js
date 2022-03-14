const nome = 'Luiz';
const obj = { nome };
const novoObj = {...obj};

console.log(novoObj);

// O Babel é um tradutor e compilador de código,
//converte o código para códigos mais antigos, para que nosso projeto
//seja compatível com todos os navegadores

//Pedindo pra converter: npx babel main.js -o bundle.js --presets=@babel/env

//chamamos de 'bundle' poruqe é a junção de arquivos, podemos unir vários

//se fossemos usar em um sistema real, usariamos o bundle, ao inves do script novo

//para não ficarmos toda hora executando este código no terminal ao alterarmos o main
//podemos automatizar, colocando no package.json ->scripts: "babel": "babel ./main.js -o ./bundle.js --preset=@babel/env -w"
//sempre quando salvarmos o main ele irá recompilar o bundle
//para usarmos basta por : npm run babel

class Pessoa{
    constructor(nome, sobrenome){
        this.nome = nome;
        this.sobrenome = sobrenome;
    }
}


