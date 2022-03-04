function main (){
    const div = document.querySelector('.paragrafos'); //só retorna o primeiro elemento
    //queremos selecionar uma coleção de elementos
    const paragrafos = div.querySelectorAll('p'); //pegando todos os parágrafos
    //retorna uma NodeList (NÃO É UM ARRAY, não é nativo do Js é do DOM, mas é similar)

    //pegar os estilos CSS que o navegador computou do body
    const estilosBody = getComputedStyle(document.body);
    const backgroundColorBody = estilosBody.backgroundColor;//pegando a cor de fundo do body
    
    for(let p of paragrafos) {
        p.style.backgroundColor = backgroundColorBody;
        p.style.color = '#FFF';
    }
}

main();