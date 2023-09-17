// 1. Check if the array is sorted in ascending order.
// let arr = [1, 2, 3, 4, 5]
// let flag = true;
// for (let j = 0; j < arr.length; j++) {
//     let num1 = arr[j];
//     let num2 = arr[j + 1];
//     if (num2 > num1) {
//         continue;
//     }
//     flag = false;
//     break;
// }
// if (flag) {
//     console.log("Ascending order");
// } else {
//     console.log("Descending order");
// }

// 2. Check if the array is sorted in descending order.

// let arr = [5, 4, 3, 2, 1]
// let flag = true;
// for (let a = 0; a < arr.length - 1; a++) {
//     let num1 = arr[a]
//     let num2 = arr[a + 1]
//     if (num2 < num1) {
//         continue;
//     }
//     flag = false;
// }
// if (flag) {
//     console.log(" Ascending order");
// } else {
//     console.log("Descending order");
// }

// 3. Concat two Arrays but without using concat function.
// let arr = [1, 2, 3, 4, 5]
// let arr2 = [6, 7, 8, 9, 10]
// let result = arr.concat(arr2)
// console.log(result);

// let arr = [1, 2, 3, 4, 5]
// let arr2 = [6, 7, 8, 9, 10]
// let arr3 = []
// for (let i = 0; i < arr.length; i++) {
//     arr3.push(arr[i])
// }
// for (let i = 0; i < arr2.length; i++) {
//     arr3.push(arr2[i])
// }
// console.log(arr3);

// 4. Count the total number of odd numbers in the array.
// let arr = [11, 20, 33, 40, 50]
// let Count = 0;
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 === 1) {
//         Count++;
//     }

// }
// console.log(Count);

// 5. Count the total number of even numbers in the array.
// let arr = [11, 22, 50, 59]
// let Count = 0;
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 === 0) {
//         Count++
//     }
// }
// console.log(Count);

// 6. Create a new Array from existing Array using push function.
// let arr = [100, 200, 300, 400, 500];
// let arr2 = [600, 700, 800, 900, 1000]
// let arr3 = [];
// for (let i = 0; i < arr.length; i++) {
//     arr3.push(arr[i])
// }
// for (let i = 0; i < arr.length; i++) {
//     arr3.push(arr2[i])
// }
// console.log(arr3);

// 7. Find the average of the Array
// let arr = [1, 2, 3, 4, 5]
// let Count = 0
// for (let i = 0; i < arr.length; i++) {
//     Count = Count + arr[i]
// }
// console.log(Count / arr.length);

// 8. Find the largest word in the Array
// let arr = ["Hello", "Hello World", "Wecode Academy", "Hi"]


// 9. Create an array of names and sort it using a sort function (do it for practice then we will discuss in the class)

// 10. Create an empty Array

// Now perform the below actions

// Push 3 numbers
// Unshift 3 numbers
// Pop 2 numbers
// Push 1 number
// Unshift 1 number
// Shift 2 numbers

// Now check the result and match

// // 11. Find value greater than 20 using find function
// let arr = [10,20,30,40,50]
// let ans = arr.find((value)=>{
//     return value > 20
// })
// console.log(ans);

// // 12. Find string length greater than 10 using find function
// let arr = ["Wecode Academy", "Amir khan Ashrafi", "Ahsan khan"]
// let ans = arr.find((value) => {
//     return value.length > 10
// })
// console.log(ans);

// // 13. Filter all numbers less than 100
// let arr = [10, 20, 30, 40, 80, 100]
// let ans = arr.filter((value) => {
//     return value < 100;
// })
// console.log(ans);

// // 14. Filter all numbers greater than 50 and multiple of 5
// let arr = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 101, 103]
// let ans = arr.filter((value) => {
//     return value > 50 && value % 2 === 0

// })
// console.log(ans);

// // 15. Filter all words with length > 5 and contains world 'World' in itself for example Hello World, Computer World

// // 16. Calculate sum of all the numbers of array using reduce function
// let arr = [1,2,3,4,5]
// let ans = arr.reduce((prev, curr)=>{
// return

// })
// // 17. Calculate total words with length > 5 in an array using reduce and filter function. Dono se krna hai alag alag
// let arr = ["Hello", "Hello World", "Wecode Academy", "Hi"]
// let ans = arr.filter((value) => {
//     return value.length > 5

// })
// console.log(ans);

// let arr = ["Hello", "Hello World", "Wecode Academy", "Hi"]
// let ans = arr.reduce((prev, curr) => {
//     return

// })
// console.log(ans);

// // 18. Convert any odd number to even number using map function
// let arr = [1, 3, 5, 7]
// let ans = arr.map((value) => {
//     return value * 2
// })
// console.log(ans);
// // 19. Convert any even number to odd number using map function
// let arr = [2, 4, 6, 8]
// let ans = arr.map(((value) => {
//     return value + 1
// })
// console.log(ans);

// // 20. Check if every number is multiple of 5 or not in the array using every function
// let arr = [10, 21, 30, 40, 50]
// let ans = arr.every((value) => {
//     return value % 5 === 0
// })
// console.log(ans);



// // 21. Check if any number is multiple of 5 and less than 10 using some function
// let arr = [10, 20, 25, 30, 55]
// let ans = arr.some((value) => {
//     return value % 5 === 0 && value < 10
// })
// console.log(ans);