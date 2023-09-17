//     Question 1
// Write a function that takes an object as an input and returns a new object with the same keys and values, but with all the string values capitalized.

//     Question 2
// Write a function that takes two objects as inputs and returns a new object that contains only the keys that are present in both objects, along with their corresponding values from the first object.

//     Question 3
// Write a function that takes an array of objects as an input and returns a new array that contains only the objects that have unique values for a specified key.For example, if the input array contains objects with a "name" key, the function should return an array of objects with unique names.

//     Question 4
// Write a function that takes an object as an input and returns an array of all the keys in the object, sorted alphabetically.

//     Question 5
// Write a function that takes an object and a string as input and returns a new object with all the keys that start with the specified string.The original object should not be modified.

//     Question 6
// What is an object in JavaScript ?
// object ek Datastructure h jiska use hm data store krne ke liye krte h. Object me data key value ki form me store hoti he.

//     Question 7
// What is the difference between dot Annotation and bracket Annotation for accessing object properties ?
// dot annotation me hum actual key ka name likna hota hain.iske leye hum koi variable etc use nahi kar skte hain.pr brecket annotationme hum variable bhi use kar skte hain.variable ki jo value hogi vo value object ke andr key ke form me search hogi or vahi answer hoga.

//     Question 8
// How do you loop through the properties of an object in JavaScript ?

//     Question 9
// What is the difference between an object and an array in JavaScript ?
// object ak datastructure hain. jiska use hum data store karne me karte hain.object me data key value ki form me store hoti hian.
// Yadi hum same kam array se kar na chahye to kar skte hain.lakin array me humye index mainten kar ne padyegi.index yad kar pana kafi tuff hota hain.isleye hum index ki jgha key ka use karte hain.issye key humasa same rahate hain.par value change ho skte hain.

//     Question 10
// Write a JavaScript function to convert an object into a list of[key, value] pairs.
// const object = {
//     "name":"Wecode Academy",
//     "Mobile":7357101348,
//     "fatherName":"Amir",
// }

// let arr = Object.entries(object);
// console.log(arr);

//     Question 11
// Write a function that takes an object representing a person and returns their full name.
// function getFullName(person) {
//     return person.firstName + " " + person.lastName;
// }

// let person = { firstName: "John", lastName: "Doe" };
// console.log(getFullName(person)); // Output: "John Doe"

//     Question 12
// Create an Object with your personal details.Now print all the keys of the object in ascending order.
// const obj = {
// "Name": "Amir Khan",
//     "FatherName": "Niwaj Ali",
//         "MobileNumber": 7357101348,
//             "Village": "Jaipur"
// }
// const keys = Object.keys(obj).sort();

// for (let i = 0; i < keys.length; i++) {
//     console.log(keys[i]);
// }

//     Question 13
// Create an Object with your personal details.Now filter out all the values of the object and show them in descending order.
// let obj = {
//     name: "John",
//     age: 30,
//     address: "123 Main St",
//     city: "Anytown"
//   };

//   // Extract values of the object into an array
//   let values = Object.values(obj);

//   // Sort the array in descending order
//   values.sort(function(a, b) {
//     return b - a;
//   });

//   // Print the sorted array
//   console.log(values);

//     Question 14
// Create an object to hold information on your favorite recipe.It should have properties for title(a string), servings(a number), and ingredients(an array of strings).On separate lines(one console.log statement for each), log the recipe information so it looks like: Mole Serves: 2 Ingredients: cinnamon cumin cocoa
// const recipe = {
//     title: "Mole",
//     servings: 2,
//     ingredients: ["cinnamon", "cumin", "cocoa"]
// };

// console.log(recipe.title);
// console.log(`Serves: ${recipe.servings}`);
// console.log("Ingredients:");
// recipe.ingredients.forEach(ingredient => console.log(ingredient));


//     Question 15
// Create a JavaScript function inside an object which finds max of 3 numbers.Now call this function of the object and print the maximum number.

1.
// let obj = {

//     Max: function (num1, num2, num3) {
//         return Math.max(num1, num2, num3)
//     }
// }
// console.log(obj.Max(10, 20, 40));


2.
// let obj = {
//     name: "Amir khan",
//     Mobile: 7357101348,
//     sum: function (num1, num2, num3) {
//         if (num1 > num2 && num1 > num3) {
//             return num1;
//         } else if (num2 > num1 && num2 > num3) {
//             return num2
//         } else if (num3 > num1 && num3 > num2) {
//             return num3
//         } else {
//             return "Equal"
//         }
//     }
// }
// // console.log(obj);
// console.log(obj.sum(10, 20, 40));