// const logins = [`mrhens`, `mrhens2021`, `mrhens2051`, `mrhens2013`];

// const loginToFind = `mrhens2013`;
// let message = ``;
// // for (let i = 0; i <= logins.length - 1; i += 1) {
// //   const login = logins[i];
// //   console.log(login);
// //   console.log(`${login} === ${loginToFind}:`, login === loginToFind);
// //   if (login === loginToFind) {
// //     message = `Пользователь найден с логином ${login}`;
// //     break;
// //   }
// //   message = `Пользвоатель с логином ${loginToFind} не найден `;
// // }
// // console.log(message);

// // for (login of logins) {
// //   if (loginToFind === login) {
// //     message = `Пользователь найден с логином ${login}`;
// //     break;
// //   }
// // }
// // console.log(message);
// // console.log(logins.includes(loginToFind));

// const a = logins.includes(loginToFind)
//   ? `Пользователь найден с логином ${loginToFind}`
//   : `Пользвоатель с логином ${loginToFind} не найден `;
// console.log(a);

// const numbers = [51, 32, 63, 12, 4, 2, 61];
// let bigNumber = numbers[0];

// for (const number of numbers) {
//   if (number > bigNumber) {
//     bigNumber = number;
//   }
// }

// console.log(bigNumber);

const string = `JavaScript`;
let convers = ``;
const words = string.split(``);

// for (let i = 0; i > words.length - 1;)

for (const word of words) {
  convers +=
    word === word.toLowerCase() ? word.toUpperCase() : word.toLowerCase();
}
console.log(convers);
