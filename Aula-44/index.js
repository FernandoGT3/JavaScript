//Funções
//CallBack -> Funções que são executadas quando uma ação ocorre

function rand(min = 1000, max = 3000){ //gerando um número aleatório
    const num = Math.random() * (max - min) + min;
    return Math.floor(num);
}

function f1(callback){ //recebendo uma função callback
    setTimeout(function(){ //função de callback
        console.log('f1');
        if(callback) callback(); //se existir alguma função callback eu executo
    }, rand());
}

function f2(callback){
    setTimeout(function(){ //função de callback
        console.log('f2'); //usando setTimeOut para simular algo que demoraria na web
        if(callback) callback(); //se existir alguma função callback eu executo
    }, rand());
}

function f3(callback){
    setTimeout(function(){ //função de callback
        console.log('f3');
        if(callback) callback(); //se existir alguma função callback eu executo
    }, rand());
}

//queremos que f2 seja executada após f1, e f3 após f2
f1(function(){ //enviando a função como parâmetro
    f2(function(){
        f3(function(){
            console.log('Olá Mundo');
        });
    });
});
//Agora um será executada após o outro, uma 'corrente'
//não sabiamos a ordem que seriam executadas
//console.log('Olá Mundo'); //sabemos que será o primeiro