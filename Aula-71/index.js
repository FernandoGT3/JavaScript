//Classes
//Heranças --> "Herdam tudo dos pais, mas os pais não herdam nada dos filhos"

class DispositivoEletronico {
    constructor(nome) {
        this.nome = nome;
        this.ligado = false;
    }

    ligarDispositivos() {
        if (this.ligado) {
            console.log(`${this.nome} já ligado!`);
            return;
        }

        this.ligado = true;
    }

    desligarDispositivos() {
        if (!this.ligado) {
            console.log(`${this.nome} já desligado!`);
            return;
        }

        this.ligado = false;
    }
}
//Exetendendo a classe DispositivoEletronico para Smarthphone
class Smarthphone extends DispositivoEletronico { //smarthphone herdando as coisas do dispositivo eletronico
    constructor(nome, cor, modelo) {
        super(nome); //chamando o construtor da classe pai e executando
        this.cor = cor;
        this.modelo = modelo;
    }
}
class Tablet extends DispositivoEletronico {
    constructor(nome, temWifi) {
        super(nome);
        this.temWifi = temWifi;
    }

    //sobreescrevendo o método
    ligarDispositivos(){
        console.log('Olha, você alterou o método ligar');
    }
}

const d1 = new DispositivoEletronico('SmarthPhone');
d1.desligarDispositivos();
d1.ligarDispositivos();
console.log(d1);

const s1 = new Smarthphone('Samsung', 'Preto', 'Galaxy S10');
console.log(s1);

const t1 = new Tablet('Ipad', true);
console.log(t1);
t1.ligarDispositivos();









