//Objeto Date
// A função date é uma função construtora, daí precisamos do 'new', e sua primeira letra é maiúscula

const data = new Date() //se deixarmos sem parâmetro, o Js irá criar um Objeto com a data atual
//tem vária funções, recebe como parâmetro milésimos de segundos
//se colocarmos new Date(0 retornará 01/01/1970 que é o Timestamp Unix ou Época Unix

const umDia = 60 * 60 * 24 * 1000;
const tresHoras = 60 * 60 * 3 * 1000;

console.log(data.toString()); //formato gringo

const data1 = new Date(2020, 3, 20, 15, 14, 34, 500); //formato com number é (ano,mês,dia,hora, minuto, segundo, ms)
console.log(data1.toString());

// Os meses vão de :0 - Janeiro até 11-Dezembro, por isso que Abril é 3

//Outro formato é usando strings

const data2 = new Date('2019-04-20 20:15:59');
console.log(data2.toString());
console.log('Dia', data2.getDate()); //obtendo o dia 
console.log('Mes', data2.getMonth()+1); //obtendo o mes //Mes começa do zero
console.log('Ano', data2.getFullYear()); //obtendo o ano 
console.log('Hora', data2.getHours()); //obtendo a hora
console.log('Min', data2.getMinutes()); //obtendo o minuto 
console.log('Seg', data2.getSeconds()); //obtendo o segundo
console.log('Ms', data2.getMilliseconds()); //obtendo os milisegundos 
console.log('Dia-Semana', data2.getDay()); //obtendo o dia na semana //0 - É domingo e 6- É Sábado

//Obter os milésimos de segundos da data atual, sem criar nada
console.log(Date.now());

const dataBrasil = formataData (data);

function zeroAEsquerda (num){
    return (num >= 10) ? num : `0${num}`;
}

function formataData (data) {
    const dia = zeroAEsquerda(data.getDate());
    const mes = zeroAEsquerda(data.getMonth() + 1); 
    const Ano = zeroAEsquerda(data.getFullYear()); 
    const Hora = zeroAEsquerda(data.getHours()); 
    const Min = zeroAEsquerda(data.getMinutes()); 
    const Seg = zeroAEsquerda(data.getSeconds()); 

    return `${dia}/${mes}/${Ano} ${Hora}:${Min}:${Seg}`;
}

console.log(dataBrasil);