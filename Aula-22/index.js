//Condicionais
//IF -> SE //pode ser usado sozinho
//ELSE -> SENAO //só pode ter um else na checagem
//ELSE IF -> SENAO SE//precisa de um (if) antes, pode ter quantos (else if) quiser na checagem


/**
 * Entre 0 - 11 -> Bom dia
 * Entre 12 - 17 -> Boa Tarde
 * Entre 18 - 23 -> Boa Noite
 */

const hora = 19;

if(hora >= 0 && hora <=11 ){ //se a condição for verdadeira entra no bloco
    console.log('Bom dia!');
} else if (hora >= 12 && hora <= 17){
    console.log('Bom Tarde!');
} else if(hora >= 18 && hora <= 23){
    console.log('Bom Noite!');
}else{
    console.log('Hora Inválida!');
}

const numero = 10;

if (numero >= 0 && numero <= 5){
    console.log('Sim, o número é maior ou igual a zero');
    console.log('O número está entre 0 e 5.');
}else{ //um depende do outro
    console.log('O número NAO está entre 0 e 5.');
}

//ao encontrar uma condição verdadeira, ele executa o bloco e sai das condições

const num = 8;

if(num <10){
    console.log('O número é menor que 10.')
}

if (num >= 0 && num <= 5){
    console.log('O número está entre 0 e 5.');
}else if (num >= 6 && num <= 8){
    console.log('O número está entre 6 e 8.');
}else if (num >= 9 && num <= 11){
    console.log('O número está entre 9 e 11.');
}else{
    console.log('O número NAO está entre 0 e 11.');
}

console.log('...resto do código');
