if (10 % 2 === 0) {
  console.log("Even");
}
else {
  console.log("Odd");
}
// Even


if (10 % 2 === 1) {
  console.log("Even");
}
else {
  console.log("Odd");
}
// Odd


if (10 % 2 !== 0) {
  console.log("Even");
}
else {
  console.log("Odd");
}
// Odd


let num3 = 4;
if (num3 % 2 === 0 && num3 % 2 === 0) {
  console.log("Even");
}
else {
  console.log("Odd");
}
// Even


let num = 90;
if (num % 2 === 0) {
  console.log("Even");
} else {
  console.log("Odd");
}


let num1 = 90;
if (num1 % 2 === 0 || num1 % 2 !== 0) {
  console.log("Even");
} else {
  console.log("Odd");
}


// Ternary operator

10 % 2 === 0 && 10 <= 10 ? console.log("Yes") : console.log("No"); // Yes
(10 % 2 === 0) ? console.log("Even") : console.log("Odd"); // Even
(10 % 2 === 1) ? console.log("Even") : console.log("Odd"); // Odd

let num2 = 8;
(num2 < 10 && num2 % 2 === 0) ? console.log("yes") : console.log("no");// Yes
