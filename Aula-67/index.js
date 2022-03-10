//Factory Functions + Prototypes

//Desacoplando
//Composição(Mixing) -> Compondo um Objeto comm vários outros objetos
//Não há herança
//Objeto que só tem o Método falar, e podemos usá-lo em qualquer objeto
const falar = {
    falar() {
        console.log(`${this.nome} está falando`);
    }
};

const comer = {
    comer() {
        console.log(`${this.nome} está comendo`);
    }
};

const beber = {
    beber() {
        console.log(`${this.nome} está bebendo`);
    },
};

const pessoaPrototype = Object.assign({}, falar, comer, beber);

function criaPessoa(nome, sobrenome) {
    //poderíamos por assim também, porém ainda estão acoplados
    // const pessoaPrototype = {
    //     falar(){
    //         console.log(`${this.nome} está falando`);
    //     },
    //     comer(){
    //         console.log(`${this.nome} está comendo`);
    //     },
    //     beber(){
    //         console.log(`${this.nome} está bebendo`);
    //     },
    // };
    return Object.create(pessoaPrototype, { //linkando o prototype no objeto que estamos retornando
        //criando um objeto vazio e falando que será o teu prototype
        nome: { value: nome },
        sobrenome: { value: sobrenome },
    });
}

const p1 = criaPessoa('Luiz', 'Moloni');
const p2 = criaPessoa('Fernando', 'Moloni');

p1.falar();