// // Call Apply Bind Questions

// Question 1
// Write a function that uses the call method to print the name of an object.

// const instituteDetail = {
//   name: "Wecode Academy",
//   mobile: 7357101348,
//   address: {
//     pincode: 342020,
//     city: "jaipur",
//   },
// };
// function printInstituteDetail() {
//   console.log(this.name);
// }
// printInstituteDetail.call(instituteDetail);

// Question 2
// Write a function that uses the apply method to find the minimum value in an array of numbers.

// var numbers = [5, 2, 9, 1, 5, 6];

// var minimumNumber = Math.min.apply(null, numbers);

// console.log(`minimumNumber: ${minimumNumber}`);

// Question 3
// Write a function that uses the bind method to create a new function that always has a specific "this" value.

// const instituteDetail = {
//   name: "Wecode Academy",
//   mobile: 7357101348,
//   address: {
//     pincode: 342020,
//     city: "jaipur",
//   },
// };
// function printInstituteDetail(){
//     console.log(this);
// };

// const ans = printInstituteDetail.bind(instituteDetail);
// console.log(ans);

// Question 4
// Write a function that uses the call method to add two numbers together.

// function addToNumbers(num1, num2) {
//   return num1 + num2
// }

// let num1 = 10;
// let num2= 20;

// const sum = addToNumbers.call(null,num1,num2)
// console.log(sum);

// Question 5
// Write a function that uses the apply method to concatenate two arrays.

// function concatenate(arr1,arr2) {
//   return arr1.concat(arr2);
// }
// const arr1 = [100, 200, 300, 400, 500];
// const arr2 = [600, 700, 800, 900, 1000];

// const concat = concatenate.apply(null, [arr1, arr2]);
// console.log(concat);

// Question 6
// Write a function that uses the bind method to create a new function that multiplies a number by a specified value.

// Question 7
// Write a function that uses the call method to find the length of a string.

// function stringLength(string) {
//   return string.length ;
// }
// let string = "Wecode Academy"

// const ans = stringLength.call(null,string)
// console.log(ans);

// Question 8
// Write a function that uses the apply method to find the sum of all numbers in an array.

// Question 9
// Write a function that uses the bind method to create a new function that logs a message with a specific prefix.

// Question 10
// Write a function that uses the call method to convert a string to uppercase.

// function convertToUpperCase() {
//   return this.toUpperCase();
// }

// let string = "Hello, World!";

// const uppercasedString = convertToUpperCase.call(string);
// console.log("Uppercased String:", uppercasedString);

// Question 11
// Create a function sum that takes in two numbers and returns their sum. Use call to invoke sum with an array [2, 3] as the context and log the result to the console.

// Question 12
// Create an object person with a property name set to your name. Create a function sayHello that logs "Hello, !". Use bind to create a new function sayHi that logs "Hi, !" and use it to greet yourself.

// Question 13
// Write a function greet that takes in a string name and logs "Hello, !". Use apply to pass in an array ["Alice"] as the context and invoke the function.

// Question 14
// Create a function multiply that takes in two numbers and returns their product. Use bind to create a new function double that always doubles its argument, and use it to multiply 5 by 2.

// Question 15
// Create a function square that takes in a number and returns its square. Use map and square to create a new array squares that contains the squares of the numbers in an array [1, 2, 3, 4, 5].

