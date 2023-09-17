// // Functions Advanced

// First Class function/Citizen
// High Order function
// Callback function
// setTimeOut
// setInterval
// The call and apply methods
// The bind method
// Immediately invoked function expression
// Closures
// Hoisting
// Temporal Dead Zone
// DRY Principle
// Generator function
// Currying eval()



// const amir = {
//   name: "Amir",
//   mobile: 7357101348,
//   age: 20,
//   address: {
//     pincode: 341515,
//     city: "Harsore",
//   },
//   printDetail() {
//     console.log(
//       this.name,
//       this.mobile,
//       this.age,
//       this.address.pincode,
//       this.address.city
//     );
//   },
// };

// const jahir = {
//   name: "jahir",
//   mobile: 90793876120,
//   age: 31,
//   address: {
//     pincode: 341520,
//     city: "jaipur",
//   },
//   printDetail() {
//     console.log(
//       this.name,
//       this.mobile,
//       this.age,
//       this.address.pincode,
//       this.address.city
//     );
//   },
// };
// amir.printDetail();
// jahir.printDetail();

// // ============================================================================================

// const amir = {
//   name: "Amir",
//   mobile: 7357101348,
//   age: 20,
//   address: {
//     pincode: 341515,
//     city: "Harsore",
//   },
// };

// const jahir = {
//   name: "jahir",
//   mobile: 90793876120,
//   age: 31,
//   address: {
//     pincode: 341520,
//     city: "jaipur",
//   },
// };
// function printDetail(obj) { // Function Object Programing
//   console.log(
//     obj.name,
//     obj.mobile,
//     obj.age,
//     obj.address.pincode,
//     obj.address.city
//   );
// }
// printDetail(amir);
// printDetail(jahir);

// // ==================================================================================

// const amir = {
//   name: "Amir",
//   mobile: 7357101348,
//   age: 20,
//   address: {
//     pincode: 341515,
//     city: "Harsore",
//   },
// };

// const jahir = {
//   name: "jahir",
//   mobile: 90793876120,
//   age: 31,
//   address: {
//     pincode: 341520,
//     city: "jaipur",
//   },
// };
// function printDetail(num1,num2) {
//     console.log(num1,num2);
//   console.log(
//     this.name,
//     this.mobile,
//     this.age,
//     this.address.pincode,
//     this.address.city
//   );
// }
// printDetail.call(amir,10,20);
// printDetail.call(jahir,100,200);

// // =========================================================================================

// const amir = {
//   name: "Amir",
//   mobile: 7357101348,
//   age: 20,
//   address: {
//     pincode: 341515,
//     city: "Harsore",
//   },
// };

// const jahir = {
//   name: "jahir",
//   mobile: 90793876120,
//   age: 31,
//   address: {
//     pincode: 341520,
//     city: "jaipur",
//   },
// };
// function printDetail(num1, num2) {
//   console.log(num1, num2);
//   console.log(
//     this.name,
//     this.mobile,
//     this.age,
//     this.address.pincode,
//     this.address.city
//   );
// }
// printDetail.apply(amir, [10, 20]);
// printDetail.apply(jahir, [100, 200]);

// // ========================================================================================

// const amir = {
//   name: "Amir",
//   mobile: 7357101348,
//   age: 20,
//   address: {
//     pincode: 341515,
//     city: "Harsore",
//   },
// };

// const jahir = {
//   name: "jahir",
//   mobile: 90793876120,
//   age: 31,
//   address: {
//     pincode: 341520,
//     city: "jaipur",
//   },
// };
// function printDetail(num1, num2) {
//   console.log(num1, num2);
//   console.log(
//     this.name,
//     this.mobile,
//     this.age,
//     this.address.pincode,
//     this.address.city
//   );
// }
// const printDetail1020 = printDetail.bind(amir, 10, 20);
// const printDetail100200 = printDetail.bind(jahir, 100, 200);

// printDetail1020();
// printDetail100200();



// function test(a, b) {
//   console.log(a + b);
// }
// const test1020 = test.bind({}, 10, 20);
// test1020();

// ==========================================================================================

// const wecodeAcademy = {
//   name: "WecodeAcademy",
//   mobile: 7357101348,
//   age: 20,
//   address: {
//     pincode: 341515,
//     city: "Harsore",
//   },
// };

// const pixelSoftware = {
//   name: "pixelSoftware",
//   mobile: 90793876120,
//   age: 31,
//   address: {
//     pincode: 341520,
//     city: "jaipur",
//   },
// };

// function instituteDetail() {
//   console.log(
//     `Our Office Address: ${this.name},${this.mobile},${this.age},${this.address.pincode},${this.address.city}`
//   );
// }
// instituteDetail.call(wecodeAcademy);
// instituteDetail.call(pixelSoftware);



// Immediately invoked function expression - Only Ek baat Work Krega

1.
// (function print(){
//     console.log("Hello");
// })()

2.
// (function (){
//     console.log("Hello");
// })()

3.
// (()=>{
//     console.log("Hello");
// })()