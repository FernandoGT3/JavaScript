//Funções
//Funções Fábricas(Factory Function) -> Facilitam a Criação de Objetos
//(this) se refere ao objeto que chamou a função que está executando
//Por exemplo, o método (fala), quem o chama é "p1", então o this neste caso é o p1 
function criaPessoa(nome,sobrenome,altura){
    return{
        nome,
        sobrenome,
        fala: function(assunto){ //método
            return `${nome} está ${assunto}, com ${this.peso}.`; //aqui está usando o parâmetro da função, mas as vezes naõ temos entao:
        },
        peso: 60, //o valor está na chave, então usaremos o (this) para acessá-lo, precisamos falar qual objeto está acessadno esta chave
        altura,
        //GETTER ->OBTÉM O VALOR
        get imc(){ //assim a função passa a fingir ser um atributo do objeto
            const indice = this.peso /(this.altura ** 2)
            return indice.toFixed(2)
        },

        get nomeCompleto(){
            return `${this.nome} ${this.sobrenome}`
        },
        
        //SETTER ->Seta um Valor
        set nomeCompleto(valor){
            valor = valor.split(' ');//divindo o nome por espaços e retornando um array
            this.nome = valor.shift(); //retorna o primeiro valor e remove do array
            this.sobrenome = valor.join(' '); //juntando o resto numa string e separando por espaço
        }
    };
}

const p1 = criaPessoa('Luiz', 'Moloni',1.60);
console.log(p1.fala('falando sobre JS'));

p1.nomeCompleto = 'Fernando Moloni' //a classe vai saber o que é nome e o que é sobrenome
console.log(p1.imc);//acessando o IMC como se fosse um atributo, mas é uma função
console.log(p1.nomeCompleto);