// //   Question 1
// // Create an array with three elements and print out the second element.

// let arr = [100, 200, 300]
// console.log(arr[1]);

// //    Question 2
// // Create an array with five elements and print out the length of the array.

// let arr = [100, 200, 300, 400, 500]
// console.log(arr.length);

// //   Question 3
// // Create an array with four elements and print out each element using a for loop.

// let arr = [100, 200, 300, 400]
// for (let j = 0; j < arr.length; j++) {
//     console.log(arr[j]);
// }

//  //   Question 4
// // Create an array with six elements and print out each element using a forEach loop.

// let arr = [100, 200, 300, 400, 500, 600]
// arr.forEach((value) => {
//     console.log(arr);
// })

// let arr2 = ["Shoaib", "Tahir", "Aamir", "Saad", "Ali Sher", "Anis"]
// arr2.forEach((value) => {
//     console.log(arr2);
// })


// let arr3 = [100, 200, 300, 400, 500, 600]
// arr3.forEach((value) => {
//     if (value > 0) {
//         console.log(value);
//     }
// })


// //    Question 5
// // Create an array with three elements and add a fourth element to the end of the array.

// let arr = [100, 200, 300]
// arr.push(400)
// console.log(arr);

// let arr = ["Shoaib", "Tahir", "Aamir",]
// arr.push("Saad")
// console.log(arr);

// //    Question 6
// // Create an array with four elements and remove the second element.

// let arr = [100, 200, 300, 400]
// arr.splice(1, 1)
// console.log(arr);

// let arr = ["Shoaib", "Tahir", "Aamir", "Aabad"]
// arr.splice(1, 1)
// console.log(arr);


// //    Question 7
// // Create an array with five elements and remove the last element.

// let arr = [100, 200, 300, 400, 500]
// arr.pop()
// console.log(arr);

// let arr = ["Shoaib", "Tahir", "Aamir", "Aabad", "Aanasagar"]
// arr.pop()
// console.log(arr);


// //    Question 8
// // Create an array with three elements and check if the array includes a specific value.

// let arr = [100, 200, 300];
// let specificValue = 100;
// if (arr.includes((specificValue))) {
//     console.log(`yes includes specificValue : ${specificValue}`);
// } else {
//     console.log(`No`);
// }


// //    Question 9
// // Create an array with five elements and sort the array in ascending order.

// let arr = [500, 400, 300, 200, 100]
// arr.sort((a, b) => {
//     return a - b
// })
// console.log(arr);

// let arr = ["Shoaib", "Tahir", "Aamir", "Aabad", "Aanasagar"]
// arr.sort()
// console.log(arr);

// //    Question 10
// // Create an array with five elements and sort the array in descending order.

// let arr = [100, 200, 300, 400, 500]
// arr.sort((a, b) => {
//     return b - a
// })
// console.log(arr);

// let arr = ["Shoaib", "Tahir", "Aamir", "Aabad", "Aanasagar"]
// arr.sort()
// console.log(arr);


// //    Question 11
// // Create two arrays, concatenate them and print out the resulting array.

// let arr = [100, 200, 300, 400]
// let arr2 = [500, 600, 700, 800]

// console.log(arr.concat(arr2));

// let arr = [1, 2, 3, 4, 5]
// let arr2 = [6, 7, 8, 9, 10]
// let arr3 = arr.concat(arr2)
// console.log(arr3);


// //    Question 12
// // Create an array with three elements and convert it to a string.

// let arr = [100, 200, 300, 400]
// let ans = arr.toString()
// console.log(ans);

// //    Question 13
// // Create an array with four elements and reverse the order of the elements.

// let arr = [100, 200, 300, 400]
// arr.reverse()
// console.log(arr);

// let arr = ["Shoaib", "Tahir", "Aamir", "Aabad", "Aanasagar"]
// arr.reverse()
// console.log(arr);

// //    Question 14
// // Create an array with five elements and find the index of a specific value.

// let arr = [2, 4, 6, 8, 10]
// ans = arr.indexOf(6)
// console.log(ans);

// let arr = ["Shoaib", "Tahir", "Aamir", "Aabad", "Aanasagar"]
// ans = arr.indexOf("Aamir")
// console.log(ans);

// //    Question 15
// // Create an array with six elements and slice the array to create a new array with the first three elements.

// let arr = [10, 20, 30, 40, 50, 60];
// ans = arr.slice(0, 3)
// console.log(ans);

// let arr = ["Shoaib", "Tahir", "Aamir", "Aabad", "Aanasagar"]
// ans = arr.slice(0, 3)
// console.log(ans);

// //    Question 16
// // Create an array with six elements and use the map method to double each element.

// let arr = [10, 20, 30, 40, 50, 60];
// ans = arr.map((Value) => {
//     return Value * 2
// })
// console.log(ans);


// //    Question 17
// // Create an array with four elements and use the while loop to calculate the sum of all elements.


// const number = [1, 2, 3, 4]
// let sum = 0
// let j = 0;
// while (j < number.length) {
//     console.log(number[j]);
//     sum = sum + number[j]
//     j++;

// }
// console.log(sum);


// //    Question 18
// // Create an array with five elements and use the filter method to return only the even numbers.

// const number = [1, 2, 3, 4, 5]
// number.filter((value) => {
//     if (value % 2 === 0) {
//         return value
//     }
// })
// console.log(number);


// //    Question 19
// // Create an array with three elements and use the join method to concatenate the elements with a dash(-) separator.

// const number = [1, 2, 3]
// console.log(number.join("-"));

// //    Question 20
// // Create two arrays with three elements each and use the concat method to combine them into a new array.

// let arr = [1, 2, 3]
// let arr2 = [4, 5, 6]
// let arr3 = arr.concat(arr2)
// console.log(arr3);

