//Exercício

const nome = "Luiz";
const sobrenome = "Moloni";
const idade = 18;
const peso = 60;
const alturaEmM = 1.61;
let indiceMassaCorporal;

indiceMassaCorporal = peso / (alturaEmM * alturaEmM);

let anoNascimento;

let AnoAtual = 2022
anoNascimento = AnoAtual - idade;

console.log(nome, sobrenome, "tem", idade, "anos, pesa", peso, "kg");
console.log("tem", alturaEmM, " de altura e seu IMC é de", indiceMassaCorporal);
console.log(nome, "nasceu em", anoNascimento);

// ou 
console.log(nome + " " + sobrenome + " tem " + idade + " anos, pesa " + peso + "kg");
// com template strings
console.log(`tem ${alturaEmM} de altura e seu IMC é de ${indiceMassaCorporal}`);
console.log(nome, "nasceu em", anoNascimento);