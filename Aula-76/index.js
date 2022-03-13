//Async/ Await -> Permite usarmos Promises dentro do corpo da função, como Síncronas

function rand(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function conectarBD(mensagem, tempo) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof mensagem !== 'string') {
                reject('BAD VALUES');
                return;
            }

            resolve(mensagem.toUpperCase() + ' - Passei na Promise');
            return;
        }, tempo);
    });
}

// conectarBD('Fase 1', rand(0, 3))
//     .then( valor => {
//         console.log(valor);
//         return conectarBD('Fase 2', rand(0, 3));
//     })
//     .then( valor => {
//         console.log(valor);
//         return conectarBD('Fase 3', rand(0, 3));
//     })
//     .then(valor => {
//         console.log(valor);
//     })
//     .catch(e => console.log('ERRO:', e));

//Usando a Promise como se fosse algo Síncrono, independente do tempo que cada função irá demorar
//ela vai executar, e será em ordem

//Mesmo melhorando os callbacks, o código continua verboso
//Para isso, temo Async e Await
//Precisamos por o 'async' para podermos usar o await dentro da função
//Await -> espera uma promise ser finalizada
async function executa() {
    try{
        const fase1 = await conectarBD('Fase 1', rand(0, 3)); //código é pausado, até que o valor seja resolvido ou rejietado pela promise
        console.log(fase1);
        const fase2 = await conectarBD('Fase 2', rand(0, 3));
        console.log(fase2);
        // const num = await conectarBD(123, rand(0, 3)); //executa até achar o erro, depois vai para o catch
        // console.log(num);
        const fase3 = await conectarBD('Fase 3', rand(0, 3));
        console.log(fase3);
        const fase4 = conectarBD('Fase 4', rand(0, 3));
        console.log(fase4);// promise pendente, e já estamos chamando o valor dela . NÃO esperamos a execução da função com then/await
        setTimeout(() => {
            console.log('Esta Promise estava pendente:', fase4); //pegando o valor da promise resolvida/rejeitada depois
        }, 4000);
    }catch(error){
        console.log(error)
    }

   
}

//As Promises tem 3 estados
//Pendente (pending) ->Está sendo executada, e ainda não retornou o valor
//fullfilled -> Resolvida
// rejected -> rejeitada

executa();