1.
// const person = {
//   firstName: "Amir",
//   lastName: "Khan",
//   id: 1234,
//   fullName: function () {
//     return this.firstName + " " + this.lastName;
//   },
// };
// const ans = person.fullName();
// console.log(ans);

2.
// let x = this;
// console.log(x);

3.
// ("use strict");
// let y = this;
// console.log(y);

4.
// function myFunction() {
//   return this;
// }
// let ans2 = myFunction();
// console.log(ans2);

5.
// ("use strict");
// function myFunctions() {
//   return this;
// }
// let ans3 = myFunctions();
// console.log(ans3);

6.
// const person1 = {
//   fullName: function () {
//     return this.firstName + " " + this.lastName;
//   },
// };

// const person2 = {
//   firstName: "Amir",
//   lastName: "Khan",
// };

// console.log(person1.fullName.call(person2));

7.
// const person1 = {
//   fullName: function () {
//     return this.firstName + " " + this.lastName;
//   },
// };

// const person2 = {
//   firstName: "Amir",
//   lastName: "Khan",
// };

// console.log(person1.fullName.apply(person2));

8.
// const person = {
//   firstName: "Amir",
//   lastName: "Khan",
//   fullName: function () {
//     return this.firstName + " " + this.lastName;
//   },
// };

// const member = {
//   firstName: "Jahir",
//   lastName: "Khan",
// };

// const fullName = person.fullName.bind(member);
// console.log(fullName());