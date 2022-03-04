//DOM -> (Documente Object Model) Se refere ao navegador, à interface de objetos que permitem manipular o elemento dentro da página
//Árvore do DOM -> Os elementos são filhos de outros elementos

function main (){
    const elementos = [
        {tag:'p', texto: 'Frase 1'},
        {tag:'div', texto: 'Frase 2'},
        {tag:'footer', texto: 'Frase 3'},
        {tag:'section', texto: 'Frase 4'},
    ];
 
    const container = document.querySelector('.container');

    const div = document.createElement('div');

    for(let i = 0; i < elementos.length; i++){
        let { tag, texto } = elementos[i];
        let tagCriada = document.createElement(tag);

        //tagCriada.innerText = texto;
        //poderíamos criar um nó de texto
        let textoCriado = document.createTextNode(texto);
        tagCriada.appendChild(textoCriado);

        div.appendChild(tagCriada);
    }

    container.appendChild(div);
}

main ();