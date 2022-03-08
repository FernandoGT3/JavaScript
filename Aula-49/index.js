//Funções
//Funções Recursivas -> Uma função que se chama de volta
// O motor do Js tem um limite de recursividade
function recursiva(max) {
    max++;
    console.log(max);
    if (max >= 10) return;

    recursiva(max);
}

recursiva(1);

//Funções Geradoras
//Conseguem quase que pausar o código em um determinado local
//Faz o LAISY VALUETION(avaliação preguiçosa), não entrega todos os valores de uma vez

function* geradora1() {
    //Código........
    yield 'valor1';   
    //Código........
    yield 'valor2'; //'retornado' na segunda chamada
    //Código........
    yield 'valor3';

}

const g1 = geradora1();
// console.log(g1.next()); //método dentro do objeto gerador
// //objeto com duas chaves: value(valor) e done(diz se já terminou o gerador)

// console.log(g1.next().value); 
// console.log(g1.next().value); 
// console.log(g1.next().value); 

//Podemos iterar, o for sabe até onde ela termina

for(let valor of g1){
    console.log(valor);
}

//Gerador Infinito

function* geradora2 (){
    let i = 0;

    while(true){
        yield i;
        i++;
    }
}

const g2 = geradora2()
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);

//Gerador que delega uma ação para outra gerado fazer

function* geradora3(){
    yield 0;
    yield 1;
    yield 2;

}

function* geradora4(){
    yield* geradora3(); //delegando para geradora 3 fazer o ( 0, 1, 2)
    yield 3;
    yield 4;
    yield 5;

}

const g4 = geradora4();

for(let valor of g4){
    console.log(valor);
}

//Yield com Funções

function* geradora5(){
    yield function(){
        console.log('Vim do Y1');
    };

    //..........

    //O return vai retornar ov alor e fazer com que a função geradora termine ali
    yield function(){
        console.log('Vim do Y2');
    };
}

const g5 = geradora5();
const func1 = g5.next().value;

const func2 = g5.next().value;

func1();
func2();