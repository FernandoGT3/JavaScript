//FETCH API(GET)

// Suponha que queremos carregar o conteúdo da página 1 com JS
fetch('pag2.html') //já retorna por padrão uma promise
.then(resposta => {//não vem com os dados prontos, precisamos converter os dados
    if(resposta.status !== 200) throw new Error('ERRO 404');
    return resposta.text(); //queremos pegar o html(texto dentro da página), e essa função também retorna uma promise
}).then(html => console.log(html))
.catch(e => console.log(e));


document.addEventListener('click', (event) => {
    elemento = event.target;
    const tag = elemento.tagName.toLowerCase(); //pegando o nome da tag e convertendo para lower case
    //console.log(tag);
    if(tag === 'a'){
        event.preventDefault(); //prevenindo que carregue a página
        carregaPagina(elemento);
    }
});

async function carregaPagina (el) {
    const href = el.getAttribute('href'); //pegando o link do elemento pelo atributo href
    //console.log(href);

    try {
        const response = await fetch(href);

        if(response.status !== 200) throw new Error('ERRO 404');

        const html = await response.text();
        carregaResultado(html);
    } catch (error) {
        console.log(error);
    }

}

function carregaResultado(response){
    const resultado = document.querySelector('.resultado');
    resultado.innerHTML = response;
}