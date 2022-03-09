//Prototypes -> Objeto Automaticamente Atrelado à funções Construtoras
/*
Javascript é baseado em protótipos para passar propriedades e métodos
de um objeto para outro.
Definição de protótipo
Protótipo é o termo usado para se referir ao que foi criado pela
primeira vez, servindo de modelo ou molde para futuras produções.
Todos os objetos tem uma referência interna para um protótipo (__proto__)
que vem da propriedade prototype da função construtora que foi usada para
criá-lo  (Pessoa.prototype === pessoa1.__proto__). Quando tentamos acessar um membro de um objeto, primeiro o motor
do JS vai tentar encontrar este membro no próprio objeto e depois a cadeia
de protótipos é usada até o topo (null) até encontrar (ou não) tal membro.
*/

//Construtora -> Molde (classe)

function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    // this.nomeCompleto() = () => this.nome + ' ' + this.sobrenome;//problema de perfomance porque a cada instância criamos um novo método deste
    // método dentro do objeto, o motor do Js procurará primeiro aqui, então se deixarmos ativo ele sobreescreveria
    //se tivermos mil pessoas esse método será criado mil vezes também
}

//jogando o método dentro do proto (todos os objetos criados a partir da função construtora pessoa terão este método)
Pessoa.prototype.nomeCompleto = () => this.nome + ' ' + this.sobrenome;

//A cadeia está : pessoa1 --> Pessoa.prototype -->Object.prototype
//cadeia que o motor seguirá

//instância -> gerar novos objetos
//criando uma instância dessa função construtora
const pessoa1 = new Pessoa('Luiz', "M"); // <- Pessoa = Função Construtora
const pessoa2 = new Pessoa('Fernando', "M"); // <- Pessoa = Função Construtora
//Ao usarmos funções construtoras, o Js linka automaticamente o objeto à uma propriedade da função construtora(Prototype)
console.log(pessoa1);

console.log(pessoa2);

const data = new Date(); // <- Date = Função Construtora
//não tem nada no objeto, apenas métodos no proto
//a propriedade (-proto-) não está no objeto, ma sim, está no pai deste objeto,
//ou seja, todos os objetos vão usar esta propriedade, que é apenas uma e está em um lugar só,
//e não é criada para todos os objetos

console.dir(data);