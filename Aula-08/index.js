//Tipos de Dados Primitivos

const nome = "Luiz"; //string
const number1 = 10; //number
const number2 = 10.5;  //number
let nomeAluno; //undefined = não aponta para local nenhum da memória
const sobrenome = null; // nulo -> não aponta para local nenhum da memória
// null != undefined
// o null é setado pelo programador, já o undefined não
const boolean = true; //ou false (é lógico), muda o fluxo da aplicação

//Tipo de Dado passado por referência
//A e B apontam para o mesmo valor da memória
const A =[1, 2];
const B = A;

B.push(3);
console.log(A, B); // o valor adicionado em B também foi adicionado em A

//se fosse
let A = 2;
const B = A; //Aqui ele copia o valor msm e não altera o valor de B se mudarmos o do A