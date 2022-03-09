//defineProperty(congela uma propriedade) e defineProperties(congela mais de uma propriedade)
//Relacionadas com as chaves do Objeto
//Temos mais controle com o que pode ou não ser feito com determinada chave

function Produto(nome, preco, estoque) {
    // this.nome = nome; //atributo público, podemos acessá-lo de fora
    // this.preco = preco;
    //this.estoque = estoque;//atributo privado

    Object.defineProperty(this, 'estoque', { //((objeto em que quero mexer),(propeiedade que quero trabalhar), property descriptor(que é um objeto))
        enumerable: true, //mostra a chave qunado usarmos for in ou object.keys
        value: estoque, //valor da chave
        writable: false, //se posso ou não alterar o valor desta variável
        configurable: false // //se posso ou não configurar a chave (como: apagar, editar, reconfig)
    });

    //se o configurable for true podemos reconfigurá-la, assim:
    // Object.defineProperty(this, 'estoque', { //((objeto em que quero mexer),(propeiedade que quero trabalhar), property descriptor(que é um objeto) )
    //     enumerable: true, 
    //     value: estoque, 
    //     writable: true, 
    //     configurable: false 
    // });

    Object.defineProperties(this, { //(((objeto), property descriptor map))
        nome: {
            enumerable: true,
            value: nome,
            writable: true,
            configurable: true
        },
        preco: {
            enumerable: true,
            value: preco,
            writable: true,
            configurable: true
        },
    });
}

const p1 = new Produto('Short', 45, 6);
console.log(Object.keys(p1));
console.log(p1);