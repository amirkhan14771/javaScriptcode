// ===============================================================================================================

// This is synchronous code so Loop first work and second Hello print

// function test() {
//   for (let i = 1; i <= 10; i++) {
//     console.log(i);
//   }
// }
// test();
// console.log("Hello"); // work will be same

// async function test() {
//   for (let j = 1; j <= 10; j++) {
//     console.log(j);
//   }
// }
// test();
// console.log("Hello"); // work will be same

// ================================================================================================================

// ================================================================================================================

// Promise is a Asynchronous Code so promise work will be Last work

// const prom = new Promise((resolve, reject) => {
//   resolve();
// });
// prom.then(() => {
//   for (let k = 1; k <= 10; k++) {
//     console.log(k);
//   }
// });
// console.log("Hello");

// setTimeout(() => {
//   for (let l = 0; l <= 10; l++) {
//     console.log(l);
//   }
// }, 0);
// console.log("Hello");

// ===============================================================================================================

// function test() {
//   fetch("https://restcountries.com/v3.1/name/india").then(() => {
//     // fetch is a Asynch Code beacause fetch is return promise
//     console.log("Hello From Async Function"); // and promise is Async Code
//   });
// }
// test();
// console.log("Hello"); // same work

// async function test() {
//   fetch("https://restcountries.com/v3.1/name/india").then(() => {
//     console.log("Hello From Async Function");
//   });
// }
// test();
// console.log("Hello"); // same work

// // Agar kisi fn. ko Async bna diya gya to veh promise return krega aur do fn. 1.value, 2. Error paas krenge
// // agar return me kuch value hogi to Dedega, otherwise Undefined

// async function takeOrder(foodItem) {
//   return `Your order for ${foodItem} is ready now. `;
// }
// const reciept = takeOrder("Pizza");
// // console.log(reciept);
// reciept.then(
//   (value) => {
//     console.log(value);
//   },
//   (error) => {
//     console.log(error);
//   }
// );

// async function takeOrder() {
//   return 100;
// }
// const reciept2 = takeOrder();
// // console.log(reciept);
// reciept2.then(
//   (value) => {
//     console.log(value);
//   },
//   (error) => {
//     console.log(error);
//   }
// );

// async function takeOrder() {
//   fetch("https://restcountries.com/v3.1/name/india").then((response) => {
//     console.log(response);
//   });
// }
// const reciept3 = takeOrder();
// reciept3.then(
//   (value) => {
//     console.log(value);
//   },
//   (error) => {
//     console.log(error);
//   }
// );

// Answer undefined beacause we not return Anything

// async function takeOrder() {
//   fetch("https://restcountries.com/v3.1/name/india").then((response) => {
//     console.log(response);
//   });
//   return 500;
// }
// const reciept4 = takeOrder();
// reciept4.then(
//   (value) => {
//     console.log(value);
//   },
//   (error) => {
//     console.log(error);
//   }
// );

// Answer 500 beacause we return 500
