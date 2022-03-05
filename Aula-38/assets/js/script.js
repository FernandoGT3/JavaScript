function main() {
    const relogio = document.querySelector('.relogio');
    const botaoIniciar = document.querySelector('.iniciar');
    const botaoPausar = document.querySelector('.pausar');
    const botaoZerar = document.querySelector('.zerar');

    let segundos = 0;
    let timer;

    function startClock() {
        timer = setInterval(function () {
            relogio.innerHTML = getTimeFromSeconds(segundos);
            segundos++;
        }, 1000);
    }

    botaoIniciar.addEventListener('click', function(event){
        relogio.classList.remove('pausado');
        clearInterval(timer);
        startClock();
    });

    botaoPausar.addEventListener('click', function(event, segundos){
        clearInterval(timer);
        relogio.classList.add('pausado');
    });

    botaoZerar.addEventListener('click', function(event){
        clearInterval(timer);
        segundos = 0;
        relogio.innerHTML = '00:00:00';
        relogio.classList.remove('pausado');
    });

    function getTimeFromSeconds(seconds) {
        const date = new Date(seconds * 1000);
        return date.toLocaleTimeString('pt-br', {
            hour12: false,
            timeZone: 'GMT'
        });
    }

    // //Poderíamos ter pego o click desta forma:
    // document.addEventListener('click', function (event) { //colocando o listener direto no documento
    //     //console.log(e.target); //fala qual elemento está sendo clicado
    //     const elemento = event.target;
    //     if (elemento.classList.contains('zerar')) {
    //         clearInterval(timer);
    //         segundos = 0;
    //         relogio.innerHTML = '00:00:00';
    //         relogio.classList.remove('pausado');
    //     }
    //     if (elemento.classList.contains('pausar')) {
    //         clearInterval(timer);
    //         relogio.classList.add('pausado');
    //     }
    //     if (elemento.classList.contains('iniciar')) {
    //         relogio.classList.remove('pausado');
    //         clearInterval(timer);
    //         startClock();
    //     }
    // })

}

main();