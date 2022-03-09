//Manipulando Prototypes

//new Object ->A função construtora tem: Object.prototype
const objA = {
    chaveA: 'A'
    //__proto__: Object.prototype
};

//agora queremos que o __proto__ seja o objA
const objB = {
    chaveB: 'B'
    //__proto__: objA
};

const objC = new Object();
objC.chaveC = 'C';

Object.setPrototypeOf(objB, objA); //configurando o prototye de objB

//a cadeia ficou: objB -> objA -> Object.prototype

//mesmo nn tendo a chaveA em B, podemos acessá-la pleo B

console.log(objB.chaveA);

Object.setPrototypeOf(objC, objB); //configurando o prototye de objC
// se colocarmos objA em vez de objB, pularemos o B
console.log(objC.chaveA);

function Produto(nome, preco) {
    this.nome = nome;
    this.preco = preco;
}

Produto.prototype.desconto = function (percentual) {
    this.preco = this.preco - (this.preco * (percentual / 100));
};

Produto.prototype.aumento = function (percentual) {
    this.preco = this.preco + (this.preco * (percentual / 100));
};

const p1 = new Produto('Camisa', 50);
p1.desconto(50);
console.log(p1);

p1.aumento(70);
console.log(p1);

//Criando Um produto e reaproveitando as funções

const p2 = { nome: "Caneca", preco: 18 };

Object.setPrototypeOf(p2, Produto.prototype);

p2.desconto(40);
console.log(p2);

p2.aumento(100);
console.log(p2);

//criando um objeto e setando o prototype

const p3 = Object.create(Produto.prototype, {
    tamanho: {
        writable: true,
        configurable: true,
        enumerable: true,
        value: 43
    },
    material: {
        writable: true,
        configurable: true,
        enumerable: true,
        value: 'plástico'
    },
    preco: {
        writable: true,
        configurable: true,
        enumerable: true,
        value: 123
    }
});
//Pode receber: ((objeto literal(Object.prototype), ou qualquer outro prototype),
// (podemos por chaves e sua configuração))

p3.aumento(20);
console.log(p3);