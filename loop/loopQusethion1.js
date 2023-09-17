// // For Loop Exercise

// Question 1
// Print 1 to 100

// for (let i = 0; i <= 100; i++) {
//   console.log(i);
// }

// Question 2
// Print all Odd numbers from 1 to 100

// for (let i = 0; i <= 100; i++) {
//   if (i % 2 !== 0) {
//     console.log(i);
//   }
// }

// Question 3
// Print all Even numbers from 1 to 100

// for (let i = 0; i <= 100; i++) {
//   if (i % 2 === 0) {
//     console.log(i);
//   }
// }

// Question 4
// Print all numbers which are divisible of 5 in 1 to 100

// for (let i = 0; i <= 100; i++) {
//   if (i % 5 === 0) {
//     console.log(i);
//   }
// }

// Question 5
// Print all numbers which are divisible of 5 and 15 in 1 to 100

// for (let i = 0; i <= 100; i++) {
//   if (i % 5 === 0 && i % 15 === 0) {
//     console.log(i);
//   }
// }

// Question 6
// Print 2's table

// for (let i = 0; i <= 10; i++) {
//   console.log(i * 2);
// }

// Question 7
// Ask user a question "How many times do you want to print Hello World?" and then print Hello World that number of times

// const que = +prompt("How many times do you want to print Hello World");
// for (let i = 0; i <= que; i++) {
//   console.log(i+ "Hello World");
// }

// Question 8
// Calculate sum of all numbers from 1 to 100

// let sum = 0;
// for (let i = 0; i <= 100; i++) {
//   sum = sum + i;
// }
// console.log(sum);

// Question 9
// Calculate sum of all odd numbers from 1 to 100

// let sum = 0;
// for (let i = 0; i <= 100; i++) {
//   if (i % 2 !== 0) {
//     sum = sum + i;
//     console.log(i);
//   }
// }
// console.log(sum);

// Question 10
// Calculate sum of all even numbers from 1 to 100

// let sum = 0;
// for (let i = 0; i <= 100; i++) {
//   if (i % 2 === 0) {
//     sum += i;
//     console.log(i);
//   }
// }
// console.log(sum);

// Question 11
// Print 1,2,4,8,16,32,64.......upto 2048

// for (let i = 1; i <= 2048; i = i *= 2) {
//   console.log(i);
// }

// Question 12
// Print

// 1,2,3,4,5,6,7,8,9,10
// 11,12,13,14,15,16,17,18,19,20
// .
// .
// ......................99,100

// for (let i = 0; i <= 100; i++) {
//   document.write(i);
//   if (i % 10 === 0) {
//     document.write("<br>");
//   }
// }

// Question 13
// Print 1 to 100, but with a specific condition. If a number is divisible by both 3 and 5, it logs "fizzbuzz" to the console instead of the number itself.

// for (let i = 0; i <= 100; i++) {
//   if (i % 3 === 0 && i % 5 === 0) {
//     console.log(i, "fizzbuzz");
//   }
// }

// Question 14
// print 10 table like this

// 2*1=2
// 2*2=4
// 2*3=6
// 2*4=8
// 2*5=10
// .
// .
// .
// // 2*10=20

// for (let i = 1; i <= 10; i++) {
//   console.log(2 + "*" + i + "=" + i * 2);
// }

// Question 15
// Run a loop from 1 to 50

// From 1 to 10 print "A"
// From 11 to 20 print "B"
// From 21 to 30 print "C"
// From 31 to 40 print "D"
// From 41 to 50 print "E"

// for (let i = 1; i <= 50; i++) {
//   if (i <= 10) {
//     console.log(i + "A");
//   } else if (i <= 20) {
//     console.log(i + "B");
//   } else if (i <= 30) {
//     console.log(i + "C");
//   } else if (i < 40) {
//     console.log(i + "D");
//   } else if (i <= 50) {
//     console.log(i + "E");
//   }
// }

// Question 16
// Run a loop from 50 to 1

// From 50 to 41 print "A"
// From 40 to 31 print "B"
// From 30 to 21 print "C"
// From 20 to 11 print "D"
// From 10 to 1 print "E"

// for (let i = 50; i >= 1; i--) {
//   if (i <= 10) {
//     console.log(i, "E");
//   } else if (i <= 20) {
//     console.log(i, "D");
//   } else if (i <= 30) {
//     console.log(i, "C");
//   } else if (i <= 40) {
//     console.log(i, "B");
//   } else if (i <= 50) {
//     console.log(i, "A");
//   }
// }

// Question 17
// Print below series 5 25 125.. till number is less than equal to 10000

// for (let i = 1; i <= 10000; i = i *= 5) {
//   console.log(i);
// }
// Question 18
// Print below series 3,6,9,12... till number is less than equal to 500

// for (let i = 1; i <= 500; i = i *= 3) {
//   console.log(i);
// }

// Question 19
// print below series

// 120
// 221
// 322
// 423
// 524
// 625
// 726
// 827
// 928
// 1029
// for (let i = 1, j = 20; i <= 10; i++, j++) {
//   console.log(i + "" + j);
// }

// Question 20
// print below series 100 95 90 85 80 ... till 0

// for (let i = 100; i >= 0; i = i - 5) {
//   console.log(i);
// }

// Question 21
// Number 70 is divisible by which numbers till 70? Find out and print those numbers

// for (let i = 1; i <= 70; i++) {
//   if (i % 7 === 0) {
//     console.log(i);
//   }
// }

// // while loop Exercise

// Question 22
// Write a while loop that logs the numbers 1 to 10 in the console.

// let i = 1;
// while (i <= 10) {
//   console.log(i);
//   i++;
// }

// Question 23
// Calculate sum of all numbers from 1 to 10

// let i = 1;
// let sum = 0;
// while(i <= 10){
//     console.log(i);
//     sum = sum + i
//     i++
// }
// console.log(sum);

// Question 24
// Counting down from 10 to 1

// let i = 10;
// while(i >= 1){
//     console.log(i);
//     i--
// }

// Question 25
// Print 2's table

// let i = 1;
// while (i <= 10) {
//     console.log(i * 2);
//     i++
// }

// Question 26
// Calculate sum of all odd numbers from 1 to 100

// let i = 1;
// let sum = 0;
// while(i <= 100){
//     if(i % 2 === 1){
//         sum = sum + i
//         console.log(i);
//     }
//     i++
// }
// console.log(sum);

// // do while loop

// Question 27
// Write a do...while loop that logs the numbers 1 to 5 in the console

// let i = 0;
// do{
//     i++;
//     console.log(i);
// }while(i <= 9)

// Question 28
// Counting down from 10 to 1

// let i = 11;
// do{
//     i--;
//     console.log(i);
// }while(i >= 1)

// Question 29
// Calculate sum of all numbers from 1 to 10

// let i = 0;
// let sum = 0;
// do{
//     i++;
//     console.log(i);
//     sum = sum + i
// }while(i <= 9)
// console.log(sum);

// Question 30
// Print 2's table

// let i = 0;
// do{
//     i++;
//     console.log(i * 2);
// }while(i <= 9)

// Question 31
// Ask user a question "How many times do you want to print Hello World?" and then print Hello World that number of times

// const prm = prompt("How Many Times Do You Want to Print Hello World")
// let i = 0;
// do{
//     i++;
//     console.log(i,"Hello World")
// }while(i <= prm)

// Question 32
// Calculate sum of all even numbers from 1 to 100

// let i = 0;
// let sum = 0;
// do {
//   i++;
//   if (i % 2 === 0) {
//     sum = sum + i;
//     console.log(i);
//   }
// } while (i <= 9);
// console.log(sum);

// Pattern questions

// Question 33
// Print pattern

// 1
// 11
// 111
// 1111
// 11111

// for (let i = 1; i <= 5; i++) {
//   let str = "";
//   for (let j = 1; j <= i; j++) {
//     str = str + "1";
//   }
//   console.log(str);
// }

// Question 34
// Print Pattern

// ---

// ---

// ---

// for (let i = 1; i <= 3; i++) {
//   let str = "";
//   for (let j = 1; j <= 3; j++) {
//     str = str + "-";
//   }
//   console.log(str);
// }

// Question 35
// Print pattern

// *
// *
// *
// *

// for (let i = 1; i <= 4; i++) {
//   let str = "";
//   for (let j = 1; j <= 1; j++) {
//     str = str + "*";
//   }
//   console.log(str);
// }

// Question 36
// Print Pattern

// 12345
// 1234
// 123
// 12
// 1

// for (let i = 5; i >= 1; i--) {
//   let str = "";
//   for (let j = 1; j <= i; j++) {
//     str = str + j;
//   }
//   console.log(str);
// }

// Question 37
// Print pattern

// 54321
// 5432
// 543
// 54
// 5

// for (let i = 1; i <= 5; i++) {
//   let str = "";
//   for (let j = 5; j >= i; j--) {
//     str = str + j;
//   }
//   console.log(str);
// }

// Question 38
// Print pattern

// 54321
// 4321
// 321
// 21
// 1
// Question 39
// Print pattern

// $$
// $$

// $$
// $$

// $$
// $$
// Question 40
// Print pattern

// *
// **
// *
// **
// *
// *
// **
// *
// **
// *
// Question 41
// Print pattern

// 10987654321
// 987654321
// 87654321
// 7654321
// 654321
// 54321
// 4321
// 321
// 21
// 1
// Question 42
// Print pattern

// *
// **
// *
// **
// *
// **
// *
// **
// *
// Question 43
// Print pattern

// *
//  *
//   *
//    *
//     *
// Question 44
// Print Pattern

//      *
//     *
//    *
//   *
//  *
// ***