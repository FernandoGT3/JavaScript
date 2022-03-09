//Objetos

const pessoa = {//corpo do objeto
    nome: 'Luiz', //chave e valor
    sobrenome: 'Moloni'
};

//duas formas de acessar
const chave = 'sobrenome';

console.log(pessoa.nome);
console.log(pessoa['sobrenome']); //bom para acessarmos dinamicamente
console.log(pessoa[chave]); 

const pessoa1 = new Object(); //usando a função construtora
pessoa1.nome = 'Samuel';
pessoa1.sobrenome = 'Santos';

console.log(pessoa1.nome);
console.log(pessoa1.sobrenome);

//apagando a chave nome do Objeto
delete pessoa.nome;

console.log(pessoa);

//Objetos podem conter métodos -> funções que estão dentro dos objetos que executam ações

const pessoa2 = new Object();
pessoa2.nome = 'Samuel';
pessoa2.sobrenome = 'Santos';
pessoa2.idade = 30;
pessoa2.falaNome = function(){ //tem acessso as coisas do objeto dentro da função
    return (`${this.nome} está falando seu nome.`);//(this) aponta para o objeto pessoa2
};
pessoa2.getDataNascimento = function(){
    const dataAtual = new Date();
    return dataAtual.getFullYear() - this.idade;
}

console.log(pessoa2.getDataNascimento());

for(let chave in pessoa2){
    console.log(chave);
}

//Moldes Para Criar Objetos
//Factory Functions e Constructors Functions
//Factory Functions
function criaPessoa(nome, sobrenome){
    return{
        nome,
        sobrenome,
        get nomeCompleto(){ //o get faz com que a função simule ser um atributo
            return `${this.nome} ${this.sobrenome}`;
        }
    }
}

const p1 = criaPessoa('Luiz', 'Moloni');
console.log(p1.nomeCompleto);

//Constructors Functions
function Pessoa(nome, sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome; 

    Object.freeze(this); //congelando todos os objetos  que são criados
}

const p1 = new Pessoa('Luiz', 'Fernando');
Object.freeze(p1); //travando o bjeto, não permite que alteremos mais o valor dele
//(new) primeiramente cria um objeto vazio e atrela o (this), dentro da função, ao objeto
//e retorna essa this (objeto)

//podemos 
p1.nome = 'João'; 
//mesmo sendo (const), porque não estamos alterando o valor da variável,
//mas sim, o valor do valor da variável

//p1 = aponta para um endereço de memória na onde está o valor
//NÃO PODEMOS FAZER: p1 = (NOVO ENDEREÇO DE MEMÓRIA),
//mas podemos alterar os valores que estão neste endereço