//Funções
//Funções Construtoras (Constructor Functions) ->Faz as coisas automaticamente,
//cria o objeto e o retorna (por exemplo)
//A diferença para as funções fábricas é que estas são funções normais
//que retornam um objeto, fazemos ela retornar um objeto

//Nas Funções Construtoras -> o nome começa com letra maiúscula e usamos (new)
//O corpo da função será o objeto
function Pessoa(nome, sobrenome) {
    //Atributos ou Métodos Públicos -> podemos acessar fora da função
    this.nome = nome;
    this.sobrenome = sobrenome;

    this.metodo = function () {
        console.log(this.nome + ': sou um método');
    }

    //Criando Atributos Privados -> que não fiquem disponíveis aos objetos
    const ID = 123456;

    const metodoInterno = function () { };
}

const p1 = new Pessoa('Luiz', 'Moloni');
const p2 = new Pessoa('Maria', 'Oliveira');

p1.metodo();
p2.metodo();

//(new) cria um novo objeto vazio, assim o this aponta para este objeto vazio (p1)
//e retorna o objeto implicitamente para a variável