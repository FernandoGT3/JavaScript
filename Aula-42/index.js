//Funções
//Retorno da Função
//return - termina a função e retorna um valor
//pode retornar qualquer coisa
//Tem funções que não retornam nada, mas mesmo assim são uteis

function soma (a, b){
    return a + b;
}

function criaPessoa (nome, sobrenome) {
    return { //retornando um objeto
        nome: nome, 
        sobrenome: sobrenome
    };
}

const p1 = criaPessoa('Luiz', 'Moloni');
console.log(p1);

function falaFrase(comeco){
    function falaResto(resto){
        return comeco + " " + resto;
    }
    return falaResto; //retornando uma função
}

const olaMundo = falaFrase('Olá'); //atribuindo a função falaResto
console.log(olaMundo(' Mundo!'));

//Exemplo de Função dentro de Função

function criaMultiplicador(multiplicador){
    return function(n) { //retornando uma função
        return n * multiplicador;
    };
}

const duplica = criaMultiplicador(2);
const triplica = criaMultiplicador(3);
const quadriplica = criaMultiplicador(4);

console.log( duplica(2));
console.log( triplica(2));
console.log( quadriplica(2));


//ESCOPO LÉXICO
//A função conhece o local onde foi declarada, tudo que esta dentro dela e seus vizinhos

const nome = 'Luiz';

function falaNome(){
    console.log(nome);//podemos de dentro da função acessar os vizinhos dela
}

function usaFalaNome(){
    const nome = 'Moloni'; //não está no escopo da função falaNome
    falaNome(); //a função usaFalaNome está protegendo esta variável
}

usaFalaNome();