//Break e Continue
//Temos o controle de pular um elemento, e quebrar um laço
//Pular o código que executa alguma ação dentro da iteração

//CONTINUE CONTINUA PARA PRÓXIMA ITERAÇÃO
//BREAK SAI DO LAÇO

// Quando estamos usando while/do while precisamos incremetar a variável de controle antes do continue/break
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for(n of numeros){
    if(n === 2 || n === 5){ //pulando o 2 e 5
        console.log('Pulei');
        continue;//continua para a próximo iteração do laço, sem executar o restante do código no bloco
    } 
    
    if(n === 7){
        console.log('7 encontrado, saindo......')
        break; //sai do laço, não executa mais nada
    }
     console.log(n);
}
