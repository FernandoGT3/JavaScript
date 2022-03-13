//Promisses -> Faz com que as coisas que ocorrem de forma assíncrona 
//parecerem que ocorrem de forma síncrona (em ordem)

// function conectarBD(mensagem, tempo){
//     setTimeout(() => {
//         console.log(mensagem);
//     }, tempo);
// }

// function rand(min, max){
//     min *= 1000;
//     max *= 1000;
//     return Math.floor(Math.random() * (max-min) + min);
// }

// conectarBD('Frase 1', rand(1, 3));

// 

// conectarBD('Frase 3', rand(1, 3));

//Precisamos fazer com que executem na ordem, independente do tempo que cada um levar
//Poderíamos usar o callback, porém o código ficaria poluído

//Então usaremos Promisses


function rand(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function conectarBD(mensagem, tempo) {
    //'Promise' recebe uma função como parâmetro
    return new Promise((resolve, reject) => { //(resolve) é quando o código executou com sucesso, 'resolve ele para mim'; 
        //(reject) é quando deu um erro no códgio, 'rejeita ele para mim'.
        if (typeof mensagem !== 'string') reject('BAD VALUES')
        setTimeout(() => {
            resolve(mensagem); //parâmetro único, só podemos mandar um parâmetro
            //retornando a mensagem usando resolve
        }, tempo);
    });
}
                                                //pegando o argumento do resolve()
conectarBD('Conexão com o BD', rand(1, 3)).then(resposta => {//(then) será executado quando resolvermos a promisse, ou seja, com o 'resolve'
    console.log(resposta);
    return conectarBD('Buscando dados da BASE', rand(1, 3)); //podemos retornar outra promisse de dentro desse then()
}).then(resposta => {
    return resposta + ' (vai pro outro THEN)'; //enviando a resposta concatenada para o outro then
}).then(resposta => {
    console.log(resposta);
    return conectarBD('Tratando os dados da BASE', rand(1, 3));
}).then(resposta => {
    console.log(resposta);
}).then(() => {
    console.log("Exibe dados na Tela");
    return conectarBD(1233, rand(1, 3));
}).catch((error) => { //cai quando um código dá erro (reject)
    console.log('ERRO:', error);
});