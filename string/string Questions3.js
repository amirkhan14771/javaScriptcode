// Question 1
// Write a JavaScript function to capitalize the first character of the string.

// for example:
// allenacademy

// output:
// Allenacademy


// function capitalizeFirstChar(str) {
//     return str.charAt(0).toUpperCase() + str.slice(1);
// }
// let str = "allenacademy";
// let capitalizedStr = capitalizeFirstChar(str);
// console.log(capitalizedStr); // "Allenacademy"


// function captilizeFirstChar(str) {
//     return str.charAt(0).toUpperCase() + str.slice()
// }
// let str = "allenacademy";
// let capitalizeFirstChar = captilizeFirstChar(str);
// console.log(capitalizeFirstChar);


// Question 2
// Write a JavaScript function to insert a string within a string at a particular position

// for example:
// We are learning exercises.

// now insert the word JavaScript at 14 position so output will be:

// We are learning JavaScript exercises.


// function insertString(originalString, stringToInsert, index) {
//     return originalString.slice(0, index) + stringToInsert + originalString.slice(index)
// }
// let originalString = "we are learning exercises.";
// let stringToInsert = " JavaScript";
// let index = 15;
// let newString = insertString(originalString, stringToInsert, index)
// console.log(newString);


// Question 3
// Write a JavaScript function to count the occurrence of a substring in a string.

// "My name is allen academy and my friend name is Arun Kumar."

// find count of 'is' in this word is 2.



// Question 4
// Ask user below questions:

// What is your name ?
// What is your mobile number ?
// What is your account number ?
// What is your atm card number ?
// What is your aadhar number ?
// Now do below tasks:

// Mask last 3 digits of the mobile number
// Mask middle of 5 numbers of the account
// Mask last 8 digit of atm card number
// Mask starting 4 digits and last 4 digits of aadhar number


function maskStart(str, num) {
    return str.slice(num).padStart(str.length, '*');
}

function maskEnd(str, num) {
    return str.slice(0, -num).padEnd(str.length, '*');
}

let name = prompt("What is your name")
let mobileNumber = prompt("What is your Mobile Number")
let accountNumber = prompt("What is your Accout Number")
let atmCardNumber = prompt("What is your ATM Card Number")
let aadhaarNumber = prompt("What is aadharNumber")

let maskedMobileNumber = maskEnd(mobileNumber, 3)
let maskedAccountNumber = maskStart(maskEnd(accountNumber, 3), 5);
let maskedAtmCardNumber = maskEnd(atmCardNumber, 8);
let maskedAadhaarNumber = maskStart(maskEnd(aadhaarNumber, 4), 4);

console.log("Name:", name);
console.log("Mobile number:", maskedMobileNumber);
console.log("Account number:", maskedAccountNumber);
console.log("Aadhaar number:", maskedAadhaarNumber);





// Question 5
// Print below pattern using repeat function

// $
// $$$
// $$$$$
// $$$$$$$
// $$$$$$$$$
// $$$$$$$$$$$

// Question 6
// Ask below questions:

// What is your name ?
// What is your birth year ?
// What is your address ?
// What is your country code ?
// What is your mobile number ?
// Now using string template literal syntax show below output based on your answer:

// My name is Sajid Khan.I was born in 1993 and my current age is 30 years.My address is Jhotwara, Jaipur and my mobile number is + 919565465654.

// Question 7
// Divide a string in two part.

// Now in right side part add Hello in the end In left side of the string add World in starting
// for example:
// let str = "Allen Academy"

// output:
// Allen Hello World Academy

// Question 8
// Guessing Game ? Ask user what character is present at particular index in a word.
// If user guess is right then show him Congrulations message otherwise show Sorry message.
// for example:

// Allen Academy

// What is the character you are guessing ? A
// What is the index ? 3

// Sorry

// Question 9
// Print Pattern using repeat function

// ***********
//  *********
//   *******
//    *****
//     ***
//      *

//     Question 10
// Print below Series using repeat function

// 1 224 3339 44412 555520