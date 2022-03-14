//Fetch API e Axios (JSON)
//Buscaremos os dados do arquivo JSON e carregamos dentro de elementos na página

// fetch('pessoas.json') //dois then porque .json retorna uma nova promise
//     .then(resposta => resposta.json()) //ao carregarmos um json, ele é convertido p/ objetos
//     .then(json => carregaElementosNaPagina(json));

axios('pessoas.json')//já pega o dados diretamente
    .then(resposta => carregaElementosNaPagina(resposta.data));

function carregaElementosNaPagina(json) {
    const table = document.createElement('table');
    for (let pessoa of json) {//vai retornar um objeto de pessoa por volta do laço
        const tr = document.createElement('tr');

        let td = document.createElement('td');
        td.innerHTML = pessoa.nome;
        tr.appendChild(td);

        td = document.createElement('td');
        td.innerHTML = pessoa.idade;
        tr.appendChild(td);

        td = document.createElement('td');
        td.innerHTML = `R$: ${pessoa.salario}`;
        tr.appendChild(td);

        table.appendChild(tr);

    }

    const resultado = document.querySelector('.resultado');
    resultado.appendChild(table);
}