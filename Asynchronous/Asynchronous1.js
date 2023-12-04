// API CALL KRNA KA PHELA TARIKA ISE INGANRALE KOI USE NHI KRTA

// This is Ajax

// const XMLHttp = new XMLHttpRequest();
// XMLHttp.onload = function () {
//   console.log(this);
// };
// XMLHttp.open("GET", "https://restcountries.com/v3.1/name/india");
// XMLHttp.send();

// function test(fn1, fn2) {
//   const num = +prompt("What is your favourite number");
//   if (num >= 10) {
//     fn1();
//   } else {
//     fn2();
//   }
// }
// test(
//   () => {
//     console.log("Hello");
//   },
//   () => {
//     console.log("Hi");
// //   }
// // );

// const prom = new Promise((success, failure) => {    // Promise is A Object
//   const num = +prompt("What is your favourite number");
//   if (num >= 10) {
//     success();
//   } else {
//     failure();
//   }
// });

// prom.then(
//   () => {
//     console.error("Hi");
//   },
//   () => {
//     console.log("Hello");
//   }
// );

// const prom1 = new Promise((resolve, reject) => {
//   resolve();
// });
// prom1.then(
//   () => {
//     console.log("Hello"); // Hamesha Hello Hello wala hi call hoga
//   },
//   () => {
//     console.log("Hi");
//   }
// );

// const prom2 = new Promise((resolve, reject) => {
//   reject();
// });
// prom2.then(
//   () => {
//     console.log("Hello");
//   },
//   () => {
//     console.log("Hi"); // Hamesha Hi wala hi Call hoga
//   }
// );

// const prom3 = new Promise((resolve, reject) => {
//   reject();
// });

// prom3.then(undefined, () => {
//   console.log("Hi");
// });

// API CALL KRNE KA DUSRA TARIKA FETCH [PERSENT ME USE HO RHA HE]

// This is a fetch

// const response = fetch("https://restcountries.com/v3.1/name/india"); // fetch is a Function
// console.log(response);
// console.log(typeof response);

// =============================================================================================================

// Promise States

// 3 values:

// Pending
// Fullfilled
// Rejected

// ================================================================================================================

// const prom4 = new Promise((success, failure) => {
//   let i = 10;
//   i.toUpperCase();
//   success();
// });
// console.log(prom4);
// prom4.then(
//   () => {
//     console.error("Hi");
//   },
//   () => {
//     console.log("Hello");
//   }
// );

// const response1 = fetch("https://restcountries.com/v3.1/name/india");
// response1.then(
//   () => {
//     console.log("Success");
//   },
//   () => {
//     console.log("Error");
//   }
// );

// const response3 = fetch("https://restcountries.com/v3.1/name/india");
// response3.then(
//   (res) => {
//     res.json().then((data) => {
//       console.log(data);
//     });
//   },
//   () => {
//     console.log("Error");
//   }
// );
// console.log("Hello");

// NOTE - [ Asynchronous code me se pehle Promise chalega ]

// console.log("Hello");

// setTimeout(() => {
//   console.log("Hello 1");
// }, 0);

// const pro = new Promise((resolve) => {
//   resolve();
// });
// pro.then(() => {
//   console.log("Hello 2");
// });
