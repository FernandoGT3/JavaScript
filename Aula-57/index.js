//For Each
//Só esta disponível para Arrays
//Só Itera sobre os valores

const a1 = [12, 32, 43, 54, 65, 96, 37, 48, 19];
let total = 0;

a1.forEach(function(valor, indice, array){
    console.log(valor, indice, array);
});

//Simular o Reduce
a1.forEach((valor) => {
    total += valor;
});
console.log(total);
