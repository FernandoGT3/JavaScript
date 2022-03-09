// Métodos Objetos
/**
 * Object.values  (retorna os valores)
 * Object.entries (retorna as chaves e os valores em cada array)
 * Object.assign(destino, any) (copiar o objeto)
 * Object.getOwnPropertyDescriptor(objeto, 'propriedade') (retorna o descriptor das propriedades do Property)
 * ...(spread)
 * Object.keys (retorna as chaves)
 * Object.freeze (congela o objeto)
 * Object.defineProperties (define várias propriedades)
 * Object.defineProperty (define uma propriedade)
 */

const produto = { nome: "Caneca", preco: 1.8};
// const produto2 = produto; //linkamos as duas variáveis no mesmo endereço de memória
// //se alterarmos um alteraremos o outro tbm
console.log(produto);

const produto2 = {
    ...produto, //copiando o objeto usando spread operator
    material: 'porcelana' //adicionando uma chave a mais
}; 

produto2.nome = "Xícara";
console.log(produto2);
//copiando usando (assign)
const produto3 = Object.assign({}, produto,{materia: 'plástico'}); //((objeto vazio, destino), (referencia), outros objetos ou propriedades)

console.log(produto3);

console.log(Object.getOwnPropertyDescriptor(produto, 'nome')); //retorna as propriedades do defineProperty

console.log(Object.values(produto));

console.log(Object.entries(produto));

//podemos fazer destructuring
for(let valor of Object.entries(produto)){
    console.log(valor[0], valor[1]);
}