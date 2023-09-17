// setTimeout(function () {
//     let a = 10;
//     let b = 20;
//     console.log(a + b);
// }, 2000);

// // SetTimeout ek hi baar chalta h fir otomaticaly off ho jata h

// function test() {
//     console.log("hello from function declaration");
// }
// test();


// setTimeout(function () {
//     let a = 10;
//     let b = 20;
//     console.log(a + b);
// }, 1000);

// setInterval(function () {
//     console.log("Hello");
// }, 1000);

// // // SetInterval kbhi bhi band nhi hota h chalta hi rhta h


// let i = 1;
// setInterval(function () {
//     console.log(i);
//     ++i;
// }, 1000);


// let j = 1;
// let id = setInterval(function () {
//     console.log(j);
//     ++i;
// }, 1000);
// setTimeout(function () {
//     clearInterval(id1);
// }, 10000)

// // // ClearInterval se ID dekar function ko time ke according bnd kr skte h


// let hour = 0;
// let minute = 0;
// let seconds = 0;
// setInterval(function () {
//     ++seconds;
//     if (seconds === 60) {
//         ++minute;
//         seconds = 1
//         if (minute === 60) {
//             ++hour;
//             minute = 1
//         }
//     }
//     console.log(`${hour}:${minute}:${seconds}`);
// }, 1000)



// // let id = setInterval(function () {
// //     console.log("Hello");
// // }, 1000);

// // let id2 = setInterval(function () {
// //     console.log("Hello World");
// // }, 1000);

// // setTimeout(function () {
// //     clearInterval(id);
// // }, 5000);






// setTimeout(function () {
//     console.log("Hello World");
// }, 1000)

// setInterval(function () {
//     console.log("Hello World");
// }, 1000)

// let id = setInterval(function () {
//     console.log("Hello World");
// }, 1000)
// setTimeout(function () {
//     clearInterval(id)
// }, 10000)

// let sum = 1;
// let id = setInterval(function () {
//     console.log(sum);
//     sum++;
// }, 1000)
// setTimeout(function () {
//     clearInterval(id);
// }, 10000)


// let hour = 0;
// let minute = 0;
// let seconds = 0;
// setInterval(function () {
//     ++seconds;
//     if (seconds === 60) {
//         ++minute;
//         seconds = 0
//     } if (minute === 60) {
//         ++hour;
//         minute = 0
//     }
//     let time = hour <= 12 ? "AM" : "PM"
//     console.log(`${addZero(hour)}:${addZero(minute)}:${addZero(seconds)}`);
// }, 1000)
// function addZero(timeUnit) {
//     let timeUnitStr = String(timeUnit);
//     if (timeUnitStr.length === 1) {
//         return "0".concat(timeUnitStr);
//     }
//     return timeUnitStr;
// }


// let num1 = 0;
// let id1 = setInterval(function () {
//     ++num1;
//     console.log(num1);
// }, 1000);
// let equal = "==";
// let id2 = setInterval(function () {
//     ++num1;
//     console.log(num1);
//     console.log(equal);
//     equal += "==";
// }, 1000);
// setTimeout(function () {
//     clearInterval(id1);
//     clearInterval(id2);
// }, 5000);







// function demo(num, cb1, cb2) {
//     if (num % 2 === 1) {
//         cb1();
//     } else {
//         cb2();
//     }
// }
// demo(10, function even() {
//     console.log("Odd");
// },
//     function odd() {
//         console.log("Even");
//     }


// )

// function demo(num, cb1, cb2) {
//     if (num % 2 === 1) {
//         cb1();
//     } else {
//         cb2();
//     }
// }
// demo(10, odd, even)

// function odd() {
//     console.log("Odd");
// }
// function even() {
//     console.log("Even");
// }


// function pixel(num1, num2, num3) {
//     if (num1 && num2 && num3) {
//         return function (num1, num2, num3) {
//             console.log("Max Of 3");
//         }
//     } else {
//         return function () {
//             return "Hello World"
//         }
//     }
// } let ans = pixel(10, undefined, 30)
// let value = ans();
// console.log(value);

// function calculateAge(dateOfBirth) {
//     let currentYear = 2023;
//     let age = currentYear - dateOfBirth;
//     return age;
// }
// let dateOfBirth = 2010;
// let age = calculateAge(dateOfBirth);
// console.log(age);

// let a = 10;
// let b = 20;
// console.log(a + b);


// function sum() {
//     console.log("Hello"); // SyntaxError

// sum(10, 20)
// let a = (a, b) => {
//     console.log(a + b); //ReferenceError

// }

// let num = "string"
// console.log(num.toUpperCase()); // TypeErro

// let i = "wecOde";
// console.log(i.toLowerCase()); //No error

// const j = "10";
// console.log(j.toLowerCase()); //No error

// i = 10;
// console.log(i.toLowerCase()); //Type error


// function test(num) {
//     console.log("Hello");
//     if (num > 1) {
//         test(num);
//     }
// }
// //Uncaught RangeError: Maximum call stack size exceeded

// test(900);


// let i = 10;
// console.log(i.toFixed(100000)); // RangeError

