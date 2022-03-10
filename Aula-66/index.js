//Polimorfismo --> Fazer com que um Método se comporte de maneira diferente
// em classes filhas de um mesmo pai (subClasses)

//Neste exemplo o Método sacar se comportará de maneira diferente
// de acordo com a necessidade da conta

//SuperClasse
function Conta(agencia, numConta, saldo){
    this.agencia = agencia;
    this.numConta =numConta;
    this.saldo = saldo;
}

Conta.prototype.sacar = function(valor){
    if(this.saldo < valor) {
        console.log(`Saldo Insuficiente: ${this.saldo}`);
        return;
    }

    this.saldo -= valor;
    this.verSaldo();
};
Conta.prototype.depositar = function(valor){
    this.saldo += valor;
    this.verSaldo();
};
Conta.prototype.verSaldo = function(){
    console.log(`Ag/c: ${this.agencia}/${this.numConta} | Saldo: R$${this.saldo.toFixed(2)}`);
};


//Especializando para Conta Poupança e Corrente
//SubClasse
function ContaCorrente(agencia, numConta, saldo, limite){
    Conta.call(this, agencia, numConta, saldo);
    this.limite = limite;
}

ContaCorrente.prototype = Object.create(Conta.prototype);
ContaCorrente.prototype.constructor = ContaCorrente;

//a diferença é que pode sacar até negativo
//Sobreescrevendo
ContaCorrente.prototype.sacar = function(valor){
    if((this.saldo + this.limite) < valor) {
        console.log(`Saldo Insuficiente: ${this.saldo}`);
        return;
    }

    this.saldo -= valor;
    this.verSaldo();
};

//SubClasse
function ContaPoupanca(agencia, numConta, saldo){
    Conta.call(this, agencia, numConta, saldo);
}

ContaPoupanca.prototype = Object.create(Conta.prototype);
ContaPoupanca.prototype.constructor = ContaPoupanca;

// const conta1 = new Conta(11, 22, 750);
// conta1.depositar(50);
// conta1.sacar(70);
//console.log(conta1);

const cc = new ContaCorrente(12, 32, 350, 80);

cc.depositar(70);

cc.sacar(500);

console.log();

const cp = new ContaPoupanca(12, 72, 150);

cp.depositar(170);

cp.sacar(300);