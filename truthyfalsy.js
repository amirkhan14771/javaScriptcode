// // Truthy And Falsy


var a = "a"
var b = "b"
console.log(a > b);  // false

var a = "d"
var b = "c"
console.log(a > b);  // true

var a = "2"
var b = "1"

console.log(a > b); // true

var a = "42"
var b = "5"

console.log(a > b); // false

var a = "42"
var b = "3"

console.log(a > b); // true





if (true) {
    console.log("truthy");
}
else {
    console.log("falsy");  // truthy
}


if (false) {
    console.log("truthy");
}
else {
    console.log("falsy");  // falsy
}



if ({}) {
    console.log("truthy");
}

else {
    console.log("falsy");  // truthy
}


if ([]) {
    console.log("truthy");
}
else {
    console.log("falsy");  // truthy
}


if ("0") {
    console.log("truthy");
}
else {
    console.log("falsy");  // truthy
}

if ("false") {
    console.log("truthy");
}
else {
    console.log("falsy");  // truthy
}

if ("true") {
    console.log("truthy");
}
else {
    console.log("falsy");  // truthy
}

if (6) {
    console.log("truthy");
}
else {
    console.log("falsy");  // truthy
}

let demo = false
if (demo) {
    console.log("truthy------");
}
else {
    console.log("falsy------"); // falsy---
}


let demo2 = true
if (demo2) {
    console.log("truthy------");
}
else {
    console.log("falsy------");  // truthy---
}


if (-0) {
    console.log("truthy");
}
else {
    console.log("falsy");  // falsy
}


if (0) {
    console.log("truthy");
}
else {
    console.log("falsy");  // falsy
}

if (0n) {
    console.log("truthy");
}
else {
    console.log("falsy");  // falsy
}

if (NaN) {
    console.log("truthy");
}
else {
    console.log("falsy");  // falsy
}

if (undefined) {
    console.log("truthy");
}
else {
    console.log("falsy");  // falsy
}


if ("") {
    console.log("truthy");
}
else {
    console.log("falsy"); // falsy
}

if (null) {
    console.log("truthy");
}
else {
    console.log("falsy");  // falsy
}