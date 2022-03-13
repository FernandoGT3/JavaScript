//Promises --> MÉTODOS
//Promise.all -> Passamos um Array para ele com promises ou valores já resolvidos, e nos retorna todos os valores dentro de um Array
//Promise.race
//Promise.resolve --> Entregar uma promessa já resolvida
//Promise.reject --> Entregar uma promessa já rejeitada

function rand(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function conectarBD(mensagem, tempo) {
    return new Promise((resolve, reject) => {
        if (typeof mensagem !== 'string') {
            reject('BAD VALUES');
            return;
        }
        setTimeout(() => {
            resolve(mensagem.toUpperCase() + ' - Passei na Promise');
        }, tempo);
    });
}

//Array de Promises
const promisses = [
    'Primeiro Valor', //mandando valor
    conectarBD('Promise 1', 3), //mandando promises
    conectarBD('Promise 2', 1),
    conectarBD('Promise 3', 2),
    //conectarBD(1000, 1000), //vai dar erro
    //se cai aqui uma vez no ERRO, todas também são rejeitadas,porque só tem um catch
    'Outro Valor'
];

//PROMISE ALL
//Resolvendo todas as promessas
Promise.all(promisses).then(valores => { //executa todas as promisses
    console.log(valores); //pegando todos os valores de volta das promessas
}).catch((error) => {
    console.log(error);
});


//PROMISE RACE
//Como se fosse uma corrida
//passa todas as promessas e retorna só a primeira que resolver
//Porém as outras promessas continuam executando

const promisses2 = [
    conectarBD('Promise 1', rand(1, 5)), //mandando promises
    conectarBD('Promise 2', rand(1, 5)),
    conectarBD('Promise 3', rand(1, 5))
];

Promise.race(promisses2).then(valores => {
    console.log(valores);
}).catch((error) => {
    console.log(error);
});

//PROMISE RESOLVE/REJECT
function baixaPagina() { //espera q retorne uma promessa
    const emCache = false;

    if (emCache) {
        return Promise.resolve('Página em Cache'); //entrega promessa já resolvida, já está em cache
    } else {
        return conectarBD('Baixei a Página', 4); //promessa que ainda vai ser executada
    }
    return Promise.reject('Página NÂO TEM Cache VÁLIDO'); //entrega promessa já rejeitada


}

baixaPagina().then(dadosPagina => {
    console.log(dadosPagina);
}).catch(erro => console.log('ERRO', erro));