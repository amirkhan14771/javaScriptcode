// Debugging - the process of identifying and removing errors from software
//Code flow
//Find out possible future errors
//Development/Testing Issue - Defect - Non Critical
//Production Issue - Bug - Critical
//Break Points - Debug Points

// function one() {
//   console.log(1);
//   two();
//   three();
// }
// function two() {
//   console.log(2);
// }
// function three() {
//   console.log(3);
//   four();
// }
// function four() {
//   console.log(4);
// }
// one();

for (let i = 1; i <= 5; i++) {
  if (i % 2 === 0) {
    console.log("Even");
  } else {
    console.log("Odd");
  }
}

let k = Number(prompt("Enter number"));
switch (k) {
  case 2:
    console.log(2);
    break;
  case 3:
    console.log(3);
    break;
  case 4:
    console.log(4);
    break;
  case 10:
    console.log(10);
    break;
  default:
    console.log("Default case");
    break;
}
console.log("Hello");
console.warn("Warning: Heavy load on the site.");
console.error("Error: You are not connected to the internet");

// How to fix a bug, different steps:
// Identifying bug
// finding bug in code/software/network/database/server
// fixing bug
// Not repeat bugs

function add(a, b) {
  console.log(a + b); //30   1020
}
add(10, "20");
let i = "10";
console.log(i.toLowerCase());
