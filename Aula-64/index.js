//Herança
//UM E-COMMERCE VENDE: CAMISETA, CANECA, LÁPIS --> PRODUTO (aumento e desconto)

function Produto(nome, preco){
    this.nome = nome;
    this.preco = preco;
}

Produto.prototype.aumento = function(quantia){
    this.preco += quantia;
};
Produto.prototype.desconto = function(quantia){
    this.preco -= quantia;
};

function Camiseta(nome, preco, cor){// é uma especialização de produto, herda as coisas de produto, mas tem suas coisas específicas
    //linkando a função camiseta ao produto
    //simulando o new usando o método call
    Produto.call(this, nome, preco); //((quem será o this nessa função),(passa os argumentos para chamar a outra função))
    this.cor = cor;
}
//Antes : Camiseta.prototype.constructor = Camiseta
Camiseta.prototype = Object.create(Produto.prototype); //criando objeto vazio e setando o prototype como o produto
//Depois : Camiseta.prototype.constructor = Produto
//Então:
Camiseta.prototype.constructor = Camiseta;

//sobrescrevendo a função aumento
Camiseta.prototype.aumento = function(percentual){
    this.preco = this.preco + (his.preco * (percentual/100));
}
//A cadeia está : Camiseta(Objeto Criado) --> Camiseta.prototype --> Produto.prototype -->Object.prototype
const camiseta = new Camiseta('Regata', 25, 'Laranja');

const produto = new Produto('Gen', 3.5);

function Caneca(nome, preco, material, estoque){
    Produto.call(this, nome, preco);
    this.material = material;
    
    Object.defineProperty(this, 'estoque', {
        enumerable: true,
        configurable: false,
        get: function(){
            return estoque;
        },

        set: function(valor){
            if(typeof valor !== 'number') return;
            estoque = valor;
        }
    });
}

Caneca.prototype = Object.create(Produto.prototype); //linkando os prototypes
Caneca.prototype.constructor = Caneca;

const caneca = new Caneca('Pica-Pau', 10, 'Plástico', 50);

console.log(camiseta);

console.log(produto);

console.log(caneca);