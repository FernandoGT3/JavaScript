//Diferenças entre Var e Let
//Não podemos redeclarar let no meu escopo, porém usando var já é permitido
//Let tem escopo de bloco {.......bloco}
//Var tem escopo de Função, mesmo dentro de uma função, o (var) não vai respeitar os outros blocos

const verdadeira = true

let nome = 'Luiz'; //criando
var nome2 =  'Moloni'; //criando 

var nome2 = 'Cristo'; //Redeclarada

if(verdadeira){
    var nome2 = 'Cristo'; //Redeclarada aqui também
    let nome = 'fernando'; //criando em outro escopo, é uma outra variável
    console.log(nome, nome2);
}

function falaOI (){//tem escopo especial, protege as variáveis dentro dela
    var nome3 = 'Dora';
    console.log(nome2, nome3);
}
// a função sabe das variáveis em seu entorno, podemos, assim, acessar as variáveis que estão em seu entorno
console.log(nome3); //não dá certo, porque a variável está somente no escopo da função 

falaOI();

//Acontece tanto com var como com functions
//Quando criamos uma variável com var ou uma função com function, o Js faz um hoosting (elevação)
// a declaração de variáveis, ele busca ate detectar sua declaração, ao achar ele joga ela ao topo
// porém os valores não, precisamos setar o valor das variáveis antes de usá-la

//Isso já não acontece com (let), se fizermos isso dará erro