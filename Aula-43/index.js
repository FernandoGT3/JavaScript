//Funções
//Closures -> Habilidade da Função de acessar o seu escopo léxico(lembra dela e dos vizinhos)


function retornaFuncao (){
    const nome = 'Luiz';
    return function(){
        return nome;
    };
}

const funcao = retornaFuncao('Luiz');//está fechando o escopo com o parâmetro luiz
const funcao2 = retornaFuncao('Joao');//mudando o contexto léxico, fechou o escopo com closures = joao
console.dir(funcao);
//Não muda nada, se comparado ao console.log no Node
//Só no console do navegador que mostra 'Function anonymous'