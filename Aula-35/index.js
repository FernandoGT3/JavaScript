//Escreva uma função que recebe 2 números e retorne o maior deles

function maior(x, y) {
    const maior = (x > y) ? x : y;
    return maior;
}

console.log(maior(10, 5));

//Melhorando
const max = (x, y) => x > y ? x : y;

console.log(max(20, 5));

/*Escreva uma função chamada ePaisagem que recebe dois argumentos,
largura e altura de uma imagem (number). Retorne true se a imagem 
estiver no modo paisagem*/

function ePaisagem(altura, largura) {
    if (altura < largura)
        return true;
    return false
}

const ePaisagem2 = (altura, largura) => (altura < largura);

console.log(ePaisagem2(30, 20));

/*Escreva uma função que recebe um número e retorne o seguinte:
Número é divisível por 3 = Fizz
Número é divisível por 5 = Buzz
Número é divisível por 3 e 5 = FizzBuzz
Número NÃO é divisível por 3 e 5 = Retorna o próprio número
Checar se o número é realmente número = Retorna o próprio número
Use a função com números de 0 a 100*/

function FizzBuzz(num) {
    if (typeof (num) !== 'number') return num;

    if (num % 3 === 0 && num % 5 === 0)
     return 'FizzBuzz';
    if (num % 3 === 0)
        return 'Fizz';
    if (num % 5 === 0)
            return 'Buzz';
    else
        return num;

}

for(let i = 0; i <= 100; i++)
    console.log(i, FizzBuzz(i));
