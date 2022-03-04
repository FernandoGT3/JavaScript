//While do While -> Não sabemos quantas vezes a repetição irá ocorrer 
//até que o laço termine
// while verifica a condição e depois executa o código
// Já o Do while executa o código e depois verifica a condição, executa pelo menos uma vez sempre
let i = 0;

while (i <= 10) { //condição
    console.log(i); //código
    i++; //atualiza variável de controle
}

function random(min, max){
    const r = Math.random() * (max- min) + min;
    return Math.floor(r);
}

const min = 1;
const max = 50;

let rand = random(min, max);
while(rand !== 10){
    rand = random(min, max);

    console.log(rand);
}