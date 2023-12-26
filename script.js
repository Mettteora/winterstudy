const logins = [`mrhens`, `mrhens2021`, `mrhens2051`, `mrhens2013`];

const loginToFind = `mrhens2013`;
let message = ``;
// for (let i = 0; i <= logins.length - 1; i += 1) {
//   const login = logins[i];
//   console.log(login);
//   console.log(`${login} === ${loginToFind}:`, login === loginToFind);
//   if (login === loginToFind) {
//     message = `Пользователь найден с логином ${login}`;
//     break;
//   }
//   message = `Пользвоатель с логином ${loginToFind} не найден `;
// }
// console.log(message);

// for (login of logins) {
//   if (loginToFind === login) {
//     message = `Пользователь найден с логином ${login}`;
//     break;
//   }
// }
// console.log(message);
// console.log(logins.includes(loginToFind));

const a = logins.includes(loginToFind)
  ? `Пользователь найден с логином ${loginToFind}`
  : `Пользвоатель с логином ${loginToFind} не найден `;
console.log(a);
