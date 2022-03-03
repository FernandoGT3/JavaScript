//Operação Ternária
// É dado por: ? :
// (condição) ? 'Valor para Verdadeiro' : 'Valor para Falso';

//Exemplo
const pontuacaoUsuario = 999;
const nivelUsuario = pontuacaoUsuario >= 1000 ? 'Usuário VIP' : 'Usuário Normal'

const corUsuario = null; 
const corPadrao = corUsuario || 'Preta';// se corUsuario for diferente de null, está será a cor padrão, por ex 'Pink'

console.log(nivelUsuario, corPadrao);
// if (pontuacaoUsuario >= 1000) {
//     console.log('Usuário VIP');
// } else {
//     console.log('Usuário Normal');
// }

