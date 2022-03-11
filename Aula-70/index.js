//Classes - GETTERS / SETTERS
// Precisamos prevenir que ocorra : 'c1.velocidade = 1500'
// Criaremos uma propriedade da classe privada e usaremos get e set
//para veririficar se passou ou nao da Vmax ou Vmin

//SYMBOL --> SERVE PARA CRIARMOS CHAVES PRIAVADAS DENTRO DOS OBJETOS

const _velocidade = Symbol; //vai gerar um ID aleatório

class Carro{
    constructor(nome){
        this.nome = nome;
        this[_velocidade] = 0 //agora temos uma propriedade privada
    }

    get velocidade(){
        return this[_velocidade];
    }

    set velocidade(valor){
        if(typeof valor !== 'number') return;
        if(valor >= 100 || valor <= 0) return;
        return this[_velocidade] = valor;
    }

    acelerar(){
        if(this[_velocidade] >= 100) return;
        this[_velocidade]++;
    }

    freiar(){
        if(this[_velocidade]  <= 0) return;
        this[_velocidade]--;
    }
}

const c1 = new Carro('Fusca');
c1.velocidade = 87; //USANDO O SETTER
console.log(c1.velocidade); //usando o GETTER

//Outro Exemplo

class Pessoa {
    constructor(nome, sobrenome){ 
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    get nomeCompleto (){
        return this.nome + ' ' + this.sobrenome;
    }

    set nomeCompleto(valor)
    {
        valor = valor.split(' ');
        this.nome = valor.shift();
        this.sobrenome = valor.join(' ');
    }
}

const p1 = new Pessoa('Fernando', 'Santos');
p1.nomeCompleto = 'Fernando Silveira Miranda';

console.log(p1.nome);
console.log(p1.sobrenome);
console.log(p1.nomeCompleto);