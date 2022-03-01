//Objetos

const nome01 ='Luiz'
const sobrenome01 = 'Moloni';
const idade01 = 19;

const nome02 ='Maria'
const sobrenome02 = 'Santos';
const idade02 = 25;

//Percebemos que são variáveis relacionadas, como se fossem um grupo
//seria mais fácil criar um objeto

const pessoa1 = { //objeto literal
    //atributos, variáveis dentro da pessoa;
    nome: 'José',
    sobrenome: 'Moloni',
    idade:18
};

console.log(pessoa1.nome);

console.log(pessoa1.sobrenome);

console.log(pessoa1.idade);

//podemos também criar uma função que cria esses objetos
function criaPessoa(nome, sobrenome, idade){ //factory function
    return{
        //retorna um objeto
        nome: nome,
        sobrenome: sobrenome,
        idade: idade
    }
    //pode ser assim também:
    //return{ nome, sobrenome, idade }
}

const pessoa2 = criaPessoa ('Samuel', 'Santos', 18); //passando os argumentos para os parâmetros

console.log(pessoa2.nome);

//métodos são funções dentro do objeto

const pessoa3 = {
    nome: 'Bruno',
    sobrenome: 'Santos',
    idade:18,

    fala (){ //não precisa colocar (function)
        console.log('Olá Mundo!');
        console.log(`${this.nome} ${this.sobrenome} está falando oi...`);
    },
    //dentro do objeto temos o (this), podemos referenciar o objeto
    //e qualquer atributo deste objeto dentro do método

    incrementaIdade(){
        ++this.idade;
        console.log(this.idade);
    }
};

pessoa3.fala();
pessoa3.incrementaIdade();