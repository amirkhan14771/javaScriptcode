// // Scope

// What is Scoping
// Lexical Scoping
// Different types of scopes in JavaScript ?
// Global Scope
// Functional scope
// Block scope

// var a = 10;
// let b = 20;
// let c = 30;
// console.log(a, b, c);

// function test() {
//   console.log(a, b, c);
// }
// test();

// if (10 < 20) {
//   console.log(a, b, c);
// }

// 1  This is Global Scope - isme hm code ko functhion ke bhar and andar khi bhi use kr skte h

// function test() {
//   var a = 10;
//   let b = 20;
//   const c = 30;
//   console.log(a, b, c); // Allow
// }
// test();
// console.log(a, b, c); // Not Allow

// 1  This is function Scope - isme hm code ko functhion ke andar use kr skte h but bhar nhi

// if(10 < 20){
//     var a = 10;
//     let b = 20;
//     const c = 30;
//     console.log(a,b,c);
// }
// console.log(a); // Allow
// console.log(b);// Not Allow
// console.log(c);// Not Allow

// 1  This is Block Scope - isme hm code ko functhion ke andar use kr skte h but bhar nhi only Var ko use kr skte h

// console.log(window);
// console.log(i);
// console.log("Hello");
// console.log("Hello");
// console.log("Hello");
// console.log("Hello");

// var i = 10;
// console.log(i);

// let j = 10;
// function test() {
// //   let j = 20;
//   (10 < 20)
//     console.log(j);
//     console.log("hello");
//     console.log("hello");
//     console.log("hello");
//     var j = 30;
//     console.log(j); //30
//   }
//   console.log(j); //10

// test();
// console.log(j); //10
// //30 30 10

// let k = 10;
// function test() {
//   let k = 20;
//   if (10 < 20) {
//     // console.log(k); // Not Allow
//     console.log("hello");
//     console.log("hello");
//     console.log("hello");
//     let k = 30;
//     console.log(k); //30
//   }
//   console.log(k); //20
// }
// test();
// console.log(k); //10
// //30 30 10

// var l = 10;
// function test() {
//   var l = 20;
//   if (10 < 20) {
//     //Block scope
//     var l = 30;
//     console.log(l); //30
//   }
//   console.log(l); //30
// }
// test();
// if (10 < 20) {
//   //Block scope
//   var l = 30;
//   console.log(l); //30
// }
// console.log(l); //30
// //30 30 30 30
