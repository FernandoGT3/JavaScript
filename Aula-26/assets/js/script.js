//Usando  Switch/Case e Objeto Date
//function main() {
//     const showText = document.querySelector('.container h1');
//     const date = new Date();

//     const message = createDate(date);

//     function createDate(date) {
//         const nameDayWeek = getDayWeek(date.getDay());
//         const nameMonth = getNameMonth(date.getMonth());

//         return (`${nameDayWeek}, ${date.getDate()}`+
//         ` de ${nameMonth} de ${date.getFullYear()} `+
//         ` ${zeroLeft(date.getHours())}:${zeroLeft(date.getMinutes())}`);
//     }

//     showText.innerHTML = message;

//     function zeroLeft (num){
//         return (num >= 10) ? num : `0${num}`;
//     }

//     function getDayWeek(dayWeek) {
//         let dayWeekText;

//         switch (dayWeek) {
//             case 0:
//                 dayWeekText = 'Domingo';
//                 return dayWeekText;
//             case 1:
//                 dayWeekText = 'Segunda-Feira';
//                 return dayWeekText;
//             case 2:
//                 dayWeekText = 'Terça-Feira';
//                 return dayWeekText;
//             case 3:
//                 dayWeekText = 'Quarta-Feira';
//                 return dayWeekText;
//             case 4:
//                 dayWeekText = 'Quinta-Feira';
//                 return dayWeekText;
//             case 5:
//                 dayWeekText = 'Sexta-Feira';
//                 return dayWeekText;
//             case 6:
//                 dayWeekText = 'Sábado';
//                 return dayWeekText;
//             default:
//                 dayWeekText = '';
//                 return dayWeekText;
//         }
//     }

//     function getNameMonth(monthNumber) {
//         let nameMonth;

//         switch (monthNumber) {
//             case 0:
//                 nameMonth = 'Janeiro';
//                 return nameMonth;
//             case 1:
//                 nameMonth = 'Fevereiro';
//                 return nameMonth;
//             case 2:
//                 nameMonth = 'Março';
//                 return nameMonth;
//             case 3:
//                 nameMonth = 'Abril';
//                 return nameMonth;
//             case 4:
//                 nameMonth = 'Maio';
//                 return nameMonth;
//             case 5:
//                 nameMonth = 'Junho';
//                 return nameMonth;
//             case 6:
//                 nameMonth = 'Julho';
//                 return nameMonth;
//             case 7:
//                 nameMonth = 'Agosto';
//                 return nameMonth;
//             case 8:
//                 nameMonth = 'Setembro';
//                 return nameMonth;
//             case 9:
//                 nameMonth = 'Outubro';
//                 return nameMonth;
//             case 10:
//                 nameMonth = 'Novembro';
//                 return nameMonth;
//             case 11:
//                 nameMonth = 'Dezembro';
//                 return nameMonth;
//             default:
//                 nameMonth = '';
//                 return nameMonth;
//         }
//     }
// }

// main();

//Jeito Simples

const h1 = document.querySelector('.container h1');
const data = new Date();

h1.innerHTML = data.toLocaleString('pt-BR', {dateStyle: 'full', timeStyle: 'short'});

