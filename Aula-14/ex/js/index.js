const numero = Number(prompt('Digite um número:'));//recebendo o input e já convertendo para número
const numeroTitulo = document.getElementById('num-head');
//obetendo um elemento por ID e salvando numa variável
const operacoes = document.getElementById('num-operations');

numeroTitulo.innerHTML = numero;

operacoes.innerHTML = `<p>Raiz quadrada: ${Math.sqrt(numero)}</p>`;
operacoes.innerHTML += `<p>${numero} é inteiro: ${Number.isInteger(numero)}</p>`;
operacoes.innerHTML += `<p>É NaN : ${Number.isNaN(numero)}</p>`;
operacoes.innerHTML += `<p>Arredondando para baixo: ${Math.floor(numero)} </p>`;
operacoes.innerHTML += `<p>Arredondando para cima: ${Math.ceil(numero)} </p>`;
operacoes.innerHTML += `<p>Com duas casas decimais: ${numero.toFixed(2)}</p>`;
