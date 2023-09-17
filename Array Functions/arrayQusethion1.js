// // 1.Array numbers ka.Loop chlana hai.Agar number odd hai to ODD print krna hai otherwise EVEN print krna h

// let numbers = [1, 2, 3, 4, 5]

// for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] % 2 === 0) {
//         console.log("Even");
//     } else {
//         console.log("Odd");
//     }
// }


// // 2. Array numbers ka.Sare numbers ko add krke print krna hai
// let numbers = [1, 2, 3, 4, 5]
// let sum = 0
// for (let i = 0; i < numbers.length; i++) {
//     console.log(numbers[i]);
//     sum = sum + numbers[i]
// }
// console.log(sum);


// // 3. Array numbers ka.Sare Odd numbers ko add krke print krna hai
// let numbers = [1, 2, 3, 4, 5]
// let sum = 0;
// for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] % 2 === 1) {
//         console.log("Odd");
//         sum = sum + numbers[i]
//     }
// }
// console.log(sum);



// // 4. Array numbers ka.Sare Even numbers ko add krke print krna hai
// let numbers = [1, 2, 3, 4, 5]
// let sum = 0;
// for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] % 2 === 0) {
//         console.log("Even");
//         sum = sum + numbers[i]
//     }
// }
// console.log(sum);




// // 5. Array numbers ka.Maximum number btana hai

// 1. let numbers = [10, 5, 20, 8, 15];

// let maxNumber = Math.max(...numbers);

// console.log("The maximum number is:", maxNumber); // Output: 20



// 2. const numbers = [10, 5, 20, 8, 15];
// let maxNumber = numbers[0];

// for (let i = 1; i < numbers.length; i++) {
//     if (numbers[i] > maxNumber) {
//         maxNumber = numbers[i];
// console.log("The maximum number is:", maxNumber); // Output: 20
//     }
// }


// // 6. Array numbers ka.Minimum number btana hai
// 1. let numbers = [10, 5, 20, 8, 15]
// let minNumber = Math.min(...numbers)
// console.log(minNumber);

// let numbers = [10, 5, 20, 8, 15]
// let minNumber = numbers[0]
// for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] < minNumber) {
//         minNumber = numbers[i]
//         console.log("The miniMum numbers is :", minNumber);
//     }
// }

// // 7. Array ka phla number print krvana hai
//     let arr = [1, 2, 3, 4, 5]
//     console.log(arr[0]);

// // 8. Array ka last number print krvana hai
// let arr = [1, 2, 3, 4, 5]
// console.log(arr[arr.length - 1]);

// // 9. Array me kitne numbers aise hai jo 100 se bde hai
// let numbers = [1, 190, 200, 400, 501, 1]
// let count = 0;
// for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] > 100) {
//         count = count + 1;
            // // ++count
//     }
// }
// console.log(count);

// // 10. Array me kitne numbers aise hai jo 20 se bde or Even hai
// let arr = [1, 20, 40, 50, 21]
// let countEven = 0;
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > 100 && arr[i] % 2 === 0) {
//         countEven = countEven + 1;
// //       ++count
//     }
// }
// console.log(countEven);



