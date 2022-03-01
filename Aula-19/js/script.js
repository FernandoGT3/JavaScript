function main() { //protegendo nossas variáveis, para não deixá-las global

    const form = document.querySelector('.form'); //seleciona os elementos como se fosse no CSS
    const resultado = document.querySelector('.resultado')
    // form.onsubmit = function (evento){ //colocando os "espiões" para vigiar um evento
    //     evento.preventDefault(); //previnindo o comportamento padrão do navegador de atualizar a página
    //     alert(1);
    // };

    const pessoas = []; //array vazio

    function recebeEventoForm (evento){
        evento.preventDefault();

        const nome = form.querySelector('.nome');
        const sobrenome = form.querySelector('.sobrenome');
        const peso = form.querySelector('.peso');
        const altura = form.querySelector('.altura');

        function criaPessoa (nome, sobrenome, peso, altura){
            return {
            nome: nome.value,
            sobrenome: sobrenome.value,
            peso: peso.value,
            altura: altura.value
            }
        };

        pessoas.push(criaPessoa(nome, sobrenome, peso, altura));

        console.log(pessoas);

        resultado.innerHTML += `<p>Nome: ${nome.value}, Sobrenome: ${sobrenome.value}, Peso: ${peso.value}, Altura: ${altura.value}</p>`; 
    }

    form.addEventListener('submit', recebeEventoForm) //Adicionando um escutador de eventos no formulário, é um método 
    // não precisa por (on) no submit



}

main();