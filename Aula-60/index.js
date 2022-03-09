//defineProperty --> GETTER E SETTER -> vai muito além de só fazer com que um método de um objeto
//simule ser uma propriedade. Também protegem a propriedade

function Produto(nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;

    let estoquePrivado = estoque;
    Object.defineProperty(this, 'estoque', {
        enumerable: true,
        // value: estoque, não precisamos dos dois porque usaremos getter e setter para obter o valor
        // writable: false, já temos um método que vai trabalhar neste valor
        configurable: false,
        //Queremos Receber só números no estoque, validar o valor
        //Obetendo o Valor
        get: function () {
            return estoquePrivado;
        },
        //Configurando o Valor, e valida o valor
        set: function (valor) {
            if (typeof valor !== 'number'){
                //throw new TypeError('Valor Incorreto');
                console.log('Valor Incorreto');
                return;
            }
            estoquePrivado = valor;
        }
    });

}

const p1 = new Produto('Short', 45, 6);
p1.estoque = "valor que eu quero";
console.log(p1.estoque);
p1.estoque = 23;
console.log(p1.estoque);