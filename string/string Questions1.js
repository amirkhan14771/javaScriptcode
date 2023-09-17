// Question 1

// let str = "My name is learn javascript";

// let str = "My name is learn javascript";
// let spl = str.split('');
// console.log(spl);
// let len = str.length;
// console.log(len);

// Split this string using space and find length.

// Question 2
// Write a program to check if a string is palindrome or not ?


// Question 3
// 9581894461 Convert to below

// 95818 *****
// ***** 94461
// 958 ** 944 **

// let str = "7357101348";
// let end = str.substring(5);
// console.log(end.padEnd(10, "*"));

// let str = "7357101348";
// let start = str.substring(5);
// console.log(start.padStart(10, "*"));

// let str = "7357101348";
// let start = str.slice(0, 3)
// console.log(start.padEnd(5, "*"));

// let end = str.slice(5, 8);
// console.log(end.padEnd(5, "*"));
// console.log(start.padEnd(5, "*"), end.padEnd(5, "*"));


//   Question 4
// Write a program to reverse a string.For example:

// Hello -> olleH
// Bye -> eyB

// let str = "Hello";
// console.log(str.split("").reverse().join());

// let str = "Bye";
// let reverse = str.split("").reverse().join();
// console.log(reverse);

// Question 5
// Captialize first character of the String.For example:

// learnjavascript -> Learnjavascript
// hello -> Hello

// let str = "learnjavascript";
// console.log(str.slice(0, 1).toUpperCase() + str.slice(1));

// let str = "hello";
// console.log(str.substring(0, 1).toUpperCase() + str.substring(1));


// Question 6
// In a string convert uppercase character to lowercase and vice versa.

// HeLlo -> hElLO
// leArNjavaScript -> LEaRnJAVAsCRIPT


// Question 7
// Camelize the string.for example:

// Hello World -> helloWorld
// my name is Sajid -> myNameIsSajid
// learn javascript -> learnJavascript

// Question 8
// Count number of spaces in a string.

//  Question 9
// Print below pattern using repeat function

// 1111111111
// 222222222
// 33333333
// 4444444
// 555555
// 66666
// 7777
// 888
// 99
// 0

// console.log("1".repeat(10));
// console.log("2".repeat(9));
// console.log("3".repeat(8));
// console.log("4".repeat(7));
// console.log("5".repeat(6));
// console.log("6".repeat(5));
// console.log("7".repeat(4));
// console.log("8".repeat(3));
// console.log("9".repeat(2));
// console.log("0".repeat(1));

// for (let i = 1; i <= 10; i++) {
//     let line = String(i).repeat(10 - i + 1);
//     console.log(line);
// }


// Question 10
// "My name is Sajid Khan", take input from user and print whatever is there after the word.For example:

// Hello learn javascript
// input: "rn"
// output: javascipt

// Question 11
// substring vs slice vs substr

// Question 12
// What is Regex ? Examples ?

// Question 13
// match vs search function difference

// Question 14
// Take a sentence from prompt.In next question ask for a string and check if that string is present in that sentence or not.

// Question 15
// Take a string and if in that string anything is there other than the characters $, _, number, a - z, A_Z then remove them from the string.Don't use regex. for example:

// We %^% $Cod!@#e -> We$Code