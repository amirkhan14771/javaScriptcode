// // Object - object ak datastructure hain.jiska use hum data store karne me karte hain.object me data key value ki form me store hoti hian.

// let object = {
//   bankName: "SBI",
//   accountHolderName: "WECode",
//   address: "Jaipur",
//   mobile: 944545454,
//   deposit: function () {
//     console.log("Deposit function");
//   },
//   withdraw: function () {
//     console.log("Withdraw function");
//   },
// };

// let student = {
//   name: "Wecode",
//   id: 101,
//   address: "jaipur",
//   mobile: 94354354543,
//   feeDeposit: () => {
//     console.log("Deposit fee");
//   },
//   attendClass: () => {
//     console.log("Attend Class");
//   },
// };
// console.log(student.name, student.mobile, student.address);
// student.feeDeposit();
// student.attendClass();
// // console.log(student.feeDeposit());

// let array = [
//   [
//     () => {
//       console.log("hello");
//     },
//     [
//       () => {
//         console.log("World");
//       },
//     ],
//   ],
// ];
// array[0][1][0]();
// array[0][1][0]();

// let obj1 = {
//   name: "Wecode",
//   age: 12,

//   sum: function (a, b) {
//     console.log(a + b);
//   },

//   12: 2000,
//   numbers: [1, 2, 3, 4, 5],
//   age2: 100,
// };
// console.log(obj1);
// console.log(obj1.age);
// console.log(obj1.numbers);
// //console.log(obj1.12); //will not work

// obj1.sum(1, 2);

// console.log(obj1.numbers[2]);

// console.log(obj1["age"]);
// console.log(obj1["numbers"]);
// console.log(obj1["12"]); //will work
// console.log(obj1["numbers"][2]);

// console.log(obj1.age + 2); // 14
// console.log(obj1["age" + 2]); // 100

// let obj2 = {
//   name: "Wecode",
//   age: 12,
//   address: {
//     pincode: 302012,
//     city: "Jaipur",
//     address: {
//       pincode: 302012,
//       city: "Jaipur",
//       address: {
//         pincode: 302020,
//         city: "Jaipur",
//       },
//     },
//   },
//   sum: function (a, b) {
//     console.log(a + b);
//   },
//   12: 2000,
//   numbers: [1, 2, 3, 4, 5],
//   age2: 100,
// };
// console.log(obj2.address.address.address);
// console.log(obj2["address"]["address"]["address"]);

// // let age = +prompt("What is your age?");
// // let obj3 = {
// //     ["age" + age]: 5000,
// // };
// // console.log(obj3);

// // console.log(obj3.age100);
// // console.log(obj3["age" + age]);

// let obj4 = {
//   name: "Wecode",
//   mobile: 7357101348,
//   aadharCard: 795361621637,
//   address: {
//     pincode: 341515,
//     city: "Jaipur",
//   },
// };

// console.log(Object.keys(obj4));
// console.log(Object.values(obj4));
// console.log(Object.entries(obj4));

// let arr = [1, 2, 3, 4, 5];
// for (let value of arr) {
//   console.log(value);
// }

// for (let value of Object.keys(obj4)) {
//   console.log(value);
// }

// for (let value of Object.values(obj4)) {
//   console.log(value);
// }

// for (let value of Object.entries(obj4)) {
//   console.log(value);
// }

// let arrys = [
//    {
//     name:"Amir khan",
//     age : 18,
//     mobile : 7357101348,
//     address:{
//         pincode:341515,
//         city:"Harsore"
//     }
//    },
//    {
//     name:"jahir khan",
//     age : 28,
//     mobile : 9079386120,
//     address:{
//         pincode:342020,
//         city:"jaipur"
//     }
//    },
//    {
//     name:"Ahsan khan",
//     age : 38,
//     mobile : 9147564899,
//     address:{
//         pincode:343030,
//         city:"Khunkhuna"
//     }
//    },
// ]

// let ans1 = arrys.filter((value) => {
//   return value;
// });
// console.log(ans1);

// let ans2 = arrys.filter((value) => {
//   return value.age > 20;
// });
// console.log(ans2);

// let ans3 = arrys.filter((value) => {
//   return value.name === "Amir khan";
// });
// console.log(ans3);

// let ans4 = arrys.reduce((total, currentValue) => {
//   return total + currentValue.age;
// }, 0);
// console.log(ans4);

// let ans5 = arrys.find((value) => {
//   return value.age === 38;
// });
// console.log(ans5);

// let ans6 = arrys.every((value) => {
//   return value.age >= 38;
// });
// console.log(ans6);

