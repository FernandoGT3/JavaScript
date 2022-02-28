//Temos duas maneiras para criar variáveis
//Salvando 'João' na memória do computador
let nome = 'João'; //String
//o (var) é mais antigo

console.log(nome, "nasceu em 1984");
console.log("Em 2000", nome, "conheceu Maria.");
console.log(nome, "casou-se com Maria em 2012.");
console.log("Maria teve 1 filho com", nome, "em 2015");
console.log("O filho de", nome, " se chama Eduardo");

let number; //Declarando
number = 10; //Inicializando a variável
console.log(number);
number = 18;
console.log(number);

//não podemos criar variáveis com palavras reservadas pelo JS
//Precisam ter nomes significativos
//Não pode começar o nome de uma variável com um número, não pode conter espaços ou traços
//Utilizamos camelCase que é (nomeCliente)
//São case-sensitive, letra maiúscula e minúscula fazem diferença
//Não podemos redeclarar variáveis com let