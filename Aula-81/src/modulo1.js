const nome = 'Luiz';
const sobrenome = 'Moloni';
const idade = 19;

function soma(x, y){
    return x + y;
}

//nada disso está disponível para os outros arquivos
//então precisamos exportar

export {nome ,sobrenome, idade, soma as somaTudo}; //exportando 
                            //renomeando na exportação

//podemos exportar diretamente
//cria já exportando
export class Pessoa {
    constructor(nome, sobrenome){
        this.nome = nome;
        this.sobrenome = sobrenome;
    }
} 

export default function subtrai(x, y){ //só pode um padrão por módulo
    return x - y;
}

//para deixar uma variável como padrão seria:
// export {nome as default ,sobrenome, idade, soma as somaTudo};

// export default (x, y) => x * y; exportando uma arrow function anônima como padrão