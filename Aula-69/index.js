//Criando Classes

class Pessoa {
    constructor(nome, sobrenome){ //método especial executado smp quando criamos uma classe
        //se não precisarmos dele, ele pode não existir
        //mas se queremos passar parâmetros para a classe, precisamos dele
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    //Os métodos são automaticamente linkados no prototype da classe
    falar() {
        console.log(`${this.nome} está falando`);
    }

    comer() {
        console.log(`${this.nome} está comendo`);
    }

    beber() {
        console.log(`${this.nome} está bebendo`);
    }

}

//instanciando uma pessoa(criando um objeto a partir de uma classe, que é um molde)
const p1 = new Pessoa('Luiz', 'Moloni');

console.log(p1);

//Paralelo com Função Construtora

function Pessoa2(nome, sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;
}

Pessoa2.prototype.falar = function(){
    console.log(`${this.nome} está falando`);
}

const p2 = new Pessoa2('Fernando', 'Moloni');

console.log(p2);
