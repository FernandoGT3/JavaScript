//Funções
//Funções Imediatas ou Auto-Invocadas
// IIFE -> Immediately invoked function expression
//A função não tem nome, então não toca o escopo global

(function(idade, peso, altura){//podemos passar parâmetros para ela também
    //a função está protegendo tudo isso do escopo global
    const sobrenome = 'Moloni';
    function criaNome(nome){
        return nome + ' ' + sobrenome;
    }

    function falaNome(){
        console.log(criaNome('Luiz'));
    }

    falaNome();
    console.log(idade, peso, altura);

    
})(19, 60, 1.61); //chamando a função imediatamente