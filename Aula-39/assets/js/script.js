function main(){
    const inputTarefa = document.querySelector('.input-nova-tarefa');
    const btnTarefa = document.querySelector('.btn-add-tarefa');
    const tarefas = document.querySelector('.tarefas');

    btnTarefa.addEventListener('click', function (evento){
        if(!inputTarefa.value) return;

        criaTarefa(inputTarefa.value);
    });

    inputTarefa.addEventListener('keypress', function(evento){//pega o evento de pressionar a tela
        if(evento.keyCode === 13){
            if(!inputTarefa.value) return;
            criaTarefa(inputTarefa.value);
        }
    }) 
    //keyup(tecla é pressionada e solta) e keydown(tecla é pressionada e segura)
    function criaItemLista () {
        const li = document.createElement('li');
        return li;
    }

    function criaTarefa(tarefa){
        const li = criaItemLista();
        li.innerHTML = tarefa;
        tarefas.appendChild(li);
        limpaInput();
        criaBotaoApagar(li);
        salvarTarefas();
    }

    function limpaInput (){
        inputTarefa.value = '';
        inputTarefa.focus(); //voltando o foco para o input
    }

    function criaBotaoApagar(li){
        li.innerHTML += ' ';
        const btnApagar = document.createElement('button');
        // btnApagar.classList.add()
        btnApagar.setAttribute('class', 'apagar'); //serve para qualquer atributo, por ex (href)
        btnApagar.innerText = "Apagar";
        li.appendChild(btnApagar);
    }

    document.addEventListener('click', function(evento){
        elemento = evento.target;
        if(elemento.classList.contains('apagar')){
            elemento.parentElement.remove(); //acessando o pai do botão, a partir dele msm
            //e removendo
            salvarTarefas();
        }
    })

    function salvarTarefas(){
        const tarefasSalvas = tarefas.querySelectorAll('li');
        const listaTarefas = [];

        for(let tarefa of tarefasSalvas){
            let tarefaTexto = tarefa.innerText;
            tarefaTexto = tarefaTexto.replace('Apagar', '').trim();
            //(trim) remove espaço sobrando nas pontas
            //(replace) substitui a palavra
            listaTarefas.push(tarefaTexto);
        }

        const tarefasJSON = JSON.stringify(listaTarefas);
        //(stringfy)converte um elemento JavaScript para uma string no formato JSON
        //criando uma string do meu array, e convertida para JSON
        localStorage.setItem('tarefas',tarefasJSON);//nome que vou recuperar dps de novo
        // local no navegador que podemos salvar coisas
    }

    function restauraTarefasSalvas(){
        const tarefas = localStorage.getItem('tarefas');
        const listaTarefas = JSON.parse(tarefas);
        //(parse)convertendo as tarefas de volta para um Array
        for(let tarefa of listaTarefas){
            criaTarefa(tarefa);
        }
    }

    restauraTarefasSalvas();



}


main();