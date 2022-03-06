//Funções
//Parâmetros da Função
//Podemos ou não enviar argumentos, e criar ou não parâmetros
//Podemos enviar um ou vários(separados por vírgula)

//Arguments não funciona em arrow functions
//Melhor usar o rest operator que funciona em todos
//Quando definimos uma função com a palavra (function),
//temos disponível a variável (arguments), sustenta todos os argumentos que enviamos
function falaOI() {//mesmo com parâmetros criados, a variável arguments continua a mesma
    console.log(arguments);
}

falaOI('Valor', 1, 2, 3, 4, 5, 6, 7, 8);


function soma() {
    let total = 0;
    for (let argumento of arguments) {
        total += argumento;
    }

    console.log(total);
}

soma(1, 2, 3, 4, 5, 6, 7, 8);


function funcao(a, b = 2, c = 4) {//se não enviar argumentos eles assumirão o valor padrão
    console.log(a + b + c);
}

funcao(2, 10);//só se não passarmos argumento, ou enviarmos 'undefined'
//que b e c assumirão os valores padrão

//Podemos usar Atribuição via Desestruturação também
//COM OBJETOS
function funcao1({ nome, sobrenome, idade }) {
    console.log(nome, sobrenome, idade);
}

funcao1({ nome: 'Luiz', sobrenome: 'Moloni', idade: 19 });

//COM ARRAY
function funcao2([nome, sobrenome, idade]) {
    console.log(nome, sobrenome, idade);
}

funcao2(['Luiz', 'Moloni', 19]);

function conta(operador, acumulador, ...numeros) {//poderia mandar um array tbm, ao inves de usar rest operator
    for(let numero of numeros){
        if(operador === "+") acumulador += numero;
        if(operador === "-") acumulador -= numero;
        if(operador === "*") acumulador *= numero;
        if(operador === "/") acumulador /= numero;
    }

    console.log(acumulador);
}

conta("-", 0, 10, 20, 30, 40, 50);