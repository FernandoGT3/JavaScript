//setInterval --> CONFIGURA O INTERVALO DE TEMPO P/ QUE UMA FUNÇÃO SEJA EXECUTADA
//setTimeOut -->EXECUTA SÓ UMA VEZ, MAS TAMBÉM DEPENDE DO INTERVALO

function mostraHora() {
    let data = new Date();

    return data.toLocaleTimeString('pt-br',{
        hour12:false
    });
}

const timer = setInterval(function funcaoDoInterval () {
    console.log(mostraHora());
}, 1000);//chamando a função sem executar ela, passando referência
//o segundo parâmetro é de quanto em quanto tempo será executado


setTimeout(function funcaoDoTimeout () {
    clearInterval(timer); //(clearInterval) para a execução do código
}, 4000); //faz o timer parar em 10s

setTimeout(function () {
    console.log('Olá Mundo!'); //(clearInterval) para a execução do código
}, 5000); //faz o timer parar em 10s