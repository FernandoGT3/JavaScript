//Switch/Case --> Muito usamos quando estamos checando uma variável

const data = new Date();
const DiaSemana = data.getDay();


let diaSemanaTexto;//usando let pq altera o valor da variável de acordo com as condições

switch (DiaSemana) {
    case 0: //caso for zero, faça isso:
        diaSemanaTexto = 'Domingo';
        break; //terminando o código, mandando ele sair
    case 1:
        diaSemanaTexto = 'Segunda';
        break; //no lugar do 'break' usariamos return (em funções)
    case 2:
        diaSemanaTexto = 'Terça';
        break;
    case 3:
        diaSemanaTexto = 'Quarta';
        break;
    case 4:
        diaSemanaTexto = 'Quinta';
        break;
    case 5:
        diaSemanaTexto = 'Sexta';
        break;
    case 6:
        diaSemanaTexto = 'Sábado';
        break;
    default: //valor padrão
        diaSemanaTexto = '';
        break;
}

console.log(DiaSemana,diaSemanaTexto);
// if (DiaSemana === 0) {
//     diaSemanaTexto = 'Domingo';
// } 
// else if (DiaSemana === 1) {
//     diaSemanaTexto = 'Segunda';
// } 
// else if (DiaSemana === 2) {
//     diaSemanaTexto = 'Terça';
// }
// else if (DiaSemana === 3) {
//     diaSemanaTexto = 'Quarta';
// }
// else if (DiaSemana === 4) {
//     diaSemanaTexto = 'Quinta';
// }
// else if (DiaSemana === 5) {
//     diaSemanaTexto = 'Sexta';
// }
// else if (DiaSemana === 6) {
//     diaSemanaTexto = 'Sábado';
// } else {
//     diaSemanaTexto = ' ';
// }
