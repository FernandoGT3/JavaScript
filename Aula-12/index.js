//Strings

//Podemos usar (\) para escapar o caractere ("")
let umaString = "Um \"texto\"";

// (\\) exibi uma barra invertida
console.log(umaString);

//strings são indexadas, cada caracter tem um índice

console.log(umaString[5]);

console.log(umaString.charAt(6));

//das duas formas estamos pegando o elemento de acordo com a sua posição

console.log(umaString.concat(" ","de", " ", "exemplo")); //concatenando

console.log(umaString.indexOf("texto")); //procurando o índice
//a palavra texto começa no índice 4

console.log(umaString.lastIndexOf("texto")); //procurando o índice
//começa de trás pra frente

console.log(umaString.match(/[a-z]/g)); //usa expressões regulares
//retorna todas as letras minúculas

console.log(umaString.search(/x/)); //usa expressões regulares
//retorna o índice onde está o que pedimos
//similar ao indexOf

console.log(umaString.replace('Um', 'Outra')); //usa expressões regulares ou nãp
//faz a substituição

console.log(umaString.replace(/Um/, 'Outra')); //usa expressões regulares ou nãp
//faz a substituição, funciona igual

let strings = "O rato roeu a roupa do rei de roma."

console.log(strings.replace(/r/g, '#')); //substituindo todos os r por "#"
//se não tivesse o g na expressão regular, só substituiria o primeiro r

console.log(strings.length); //tamanho da string

console.log(strings.slice(2, 6)); //(inicio, fim + 1), fatiando a string

console.log(strings.slice(-5, strings.length - 1)); //35 -5 =30, começa no 30 
// é similar ao substrigs, porém este não aceita negativo

console.log(strings.split(' ')); //dividindo a string e colocando num array

console.log(strings.toUpperCase()); //letra maiúscula