//AJAX -> XMLHttpRequest(GET) + Promises
//Requisição Assíncrona de Vários Tipos de Dados
//GET(chamado também de método) -> representa buscar um conteúdo

//Função que vai buscar as páginas
const request = (obj) => {// recebe um objeto de configuração
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open(obj.method, obj.url, true); //((varbo que queremos), (a url), (se é síncrono(false) ou assíncrono(true))
        xhr.send(); //se fosse um 'POST", que viesse de algum formulário (por ex) enviariamos os dados do formulário
    
        xhr.addEventListener('load', () => { //chechando quando a requisição terminou
            if (xhr.status >= 200 && xhr.status < 300) {//verificando o código http de resposta
                resolve(xhr.responseText); //enviando oque estamos buscando no doc HTML/JSON, para essa função de sucesso
            }else{
                reject({
                    code: xhr.status, //número do erro
                    msg: xhr.statusText //mensagem do erro
                });
            }
        });
    });
};

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

    const objConfig = {
        method: 'GET',
        url: href
        // success(response){ //callback
        //     carregaResultado(response);
        // },
        // error(errorText){ //callback
        //     console.log(errorText);
        // }
    };

    try{
        const response = await request(objConfig)
        carregaResultado(response);
    }catch(e){
        console.log(e);
    }

    // request(objConfig).then(response => carregaResultado(response)).catch(error => console.log(error));

    request(objConfig);
}

function carregaResultado(response){
    const resultado = document.querySelector('.resultado');
    resultado.innerHTML = response;
}