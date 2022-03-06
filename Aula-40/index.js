//Funções
//Declaração de Funções

//Delcaração mais literal de Função
//Nesta declaração ocorre o Function Hoisting(a engine do Js
//eleva a declaração de funções com (function) e variáveis com (var) para o topo,
//ou seja, podemos usá-las antes de declara-las)

function falaOI(){
    console.log('Oi');
}

falaOI();

//No Js as funções são objetos de primeira classe - First Class Objects,
//podemos tratar as funções como dado


//Function Expression - Joga uma função numa variável
//Interessanto poruqe assim conseguimos passar a nossa função como parâmetro para outra função
const souUmDado = function(){
    console.log('Sou um dado.');
}

function executaFuncao(funcao){
    funcao();
}

executaFuncao(souUmDado);

//Arow Function
 const funcaoArrow = () =>{
     console.log('Sou uma Arrow Function');
 }

 funcaoArrow();

 //Todos os Tipos de Função são tratados como Dado

 //Podemos ter funções dentro de objetos

 const obj = {
    falar: function(){//criando uma função em um atributo
        console.log('Estou falando...');
    }
    //pode ser tbm:
    // falar(){//criando uma função em um atributo
    //     console.log('Estou falando...');
    // }
 };

 obj.falar();