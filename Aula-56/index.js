//Unindo Filter + Map + Reduce

// Retorne a soma do dobro de todos os pares
// -> Filtrar Pares
// -> Dobrar os Valores
// -> Reduzir (Soma Tudo)
//               0  1   2   3  4  5  6..........
const numeros = [5, 50, 80, 1, 2, 3, 5, 12, 34, 65, 78, 08, 45];

const numPares = numeros.filter(function(valor) {
    return  valor % 2 === 0;
}).map(function(valor){
    return valor * 2;
}).reduce(function(acumulador, valor){
    return acumulador + valor;
});

// const numPares = numeros
// .filter(valor => valor % 2 === 0)
// .map(valor => valor * 2)
// .reduce((acumulador, valor) => acumulador + valor);


console.log(numPares);