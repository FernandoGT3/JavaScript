//Funções -> trechos de códigos que executam ações
//para criar usamos (function)

function saudacao(nome){ //os parâmetros vão dentro dos parênteses
    //delimitando o corpo da função
    //console.log(`Bom dia ${nome}!`);//exbindo valor na tela
    
    return `Bom dia ${nome}!`; //retornado um valor
}

saudacao('Luiz'); //chamando a função e enviando um argumento, um valor para o parâmetro
const variavel = saudacao('Maria'); //salvando em uma variável
console.log(variavel);

function soma(x, y){ // se por (x=1, y=1), estamos definindo um valor padrão para que caso não for enviado nenhum argumento, já temos
    const resultado = x + y;

    return resultado;
}

console.log(soma(5,2));
//não conseguimos acessar a variável(resultado) de fora da função, ela está protegida no escopo da função
// o fora e dentro da função não se comunicam
 //se não mandar nd como argumento, ele retorna NaN

 //criando uma função anônima, função dentro de uma variável

 const raiz = function (n){
    return n**0.5
 }; //precisa por o (;)

 console.log(raiz(9));


 const raizArrowFunction =  (n) => { //exemplo de arrow function
    return n**0.5
 }; //precisa por o (;)

 //arrow function vieram para simplicar, poderia ser escrito também assim:
 // const raizArrowFunction = n => n**0.5;

 console.log(raizArrowFunction(16));