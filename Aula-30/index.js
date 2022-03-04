//Estrutura de Repetição --> For- Clássico
// (i) --> index

// (criar uma variável, uma condição, incrementar ou decrementar)
for(let i = 0; i <= 10; i++){// i += 10, iria de 10 em 10
    console.log(`Linha ${i}`);
}

for(let i = 0; i <= 10; i++){
    const par = i % 2 === 0 ? 'par' : 'ímpar';
    console.log(i, par);
}

//podemos percorrer um array com for
const frutas = ['Maçã', 'Pêra', 'Uva'];

for(let i = 0; i < frutas.length; i++){
    console.log(frutas[i]);
}