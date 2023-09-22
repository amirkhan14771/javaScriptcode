// Why create functions ? Reason ?

// 1. Modular approach(Modules) - Small Small parts me divide
// 2. Reuse function sum 2 numbers add - Reuse
// 3. Maintainance easy ho jata hai
// 4. Coding Guidelines suggests creating functions plus other rules
// 5. Function independent, other code se alag


// 3 ways
// function declaration

// Camel Casing
// sumOfTwoNumbers
// printTwoNumbers
// calculatePercentage
// calculateInterest
// printResult

// 7 max parameters
// return some values else JS will return undefined
// Only 1 return statement will work which comes first
// function openAccount(name, fatherName, aadharCardNo, mobile, email)
// Arguments value will assign from left to right to the parameters
// Agar parameters declare kiye tab b argument dena jruri ni hai
// Syntax of function declaration

function functionName(para1, para2, para3) {
    //code....
    return someValue;
}

// Value will be assigned if passed
// Value will be undefined if not passed
// Values will be ignored if parameters position not matched

functionName(arg1, arg2, arg3);
functionName(arg1, arg2);
functionName(arg1);
functionName();
functionName(arg1, arg2, arg3, arg4, arg5);




function printHello() {
    console.log("Hello");
}
printHello();


function printName(name) {
    console.log(name);
}
printName("Wecode");
printName();
printName("WEcode", "Jaipur");


function printTwoNumbers(num1, num2) {
    console.log(num1, num2);
}
printTwoNumbers(1, 2);
printTwoNumbers(1);
printTwoNumbers(2);
printTwoNumbers();
printTwoNumber(); // error
printTwoNumbers(5, 10, 15, 20, 25);


function addTwoNumbers(num1, num2) {
    console.log(num1 + num2);
    return 1;
}
addTwoNumbers(10, 20);
addTwoNumbers(10);
addTwoNumbers(10, 20, 30, 40, 50);
console.log(addTwoNumbers(10, 20)); //Jo function return krega vhi print hoga
console.log(addTwoNumbers(10, 20));
let ans2 = addTwoNumbers(10, 20);
console.log(ans2 + 100);


function checkReturnValue() {
    return 1;
    let a = 10;
    console.log(a);
    return 2;
    return 3;
    let b = 20;
    console.log(b);
    return 4;
    return 5;
}

console.log(checkReturnValue());




sum(10, 20); //Call/Invoke/Execute/Run

function max(num1, num2) {
    if (num1 > num2) {
        return num1;
    } else if (num2 > num1) {
        return num2;
    } else {
        console.log("Both Are Equal");
        return 501;
    }
}
let ans3 = max(40, 20);
console.log(ans3);

let ans4 = max(20, 20);
console.log(ans4);


function max(num1, num2, num3) {
    if (num1 > num2 && num1 > num3) {
        return num1;
    } else if (num2 > num1 && num2 > num3) {
        return num2;
    } else if (num3 > num1 && num3 > num2) {
        return num3;
    } else {
        console.log("All three numbers Are Equal");
    }
}
let ans = max(40, 50, 60);
console.log(ans);


function fn1() {
    console.log(1);
}
function fn2() {
    console.log(2);
}
function fn3() {
    console.log(3);
}
fn1();
fn2();
fn3();


function fn1() {
    console.log(1);
    fn2();
}
function fn2() {
    console.log(2);
    fn3();
}
function fn3() {
    console.log(3);

}
fn1();


function cafeBae() {
    console.log("Chai");
    mojoCafe();
    console.log("Coffee");
}
function mojoCafe() {
    console.log("Juice");
    starCafe();
    console.log("Shake");
}
function starCafe() {
    console.log("Pasta");
    dominos();
    console.log("French Fries");
}
function dominos() {
    console.log("Pizza");
}
cafeBae(); //Chai Juice Pasta Pizza FrenchFries Shake Coffee
console.log("Hello World");


function fn1() {
    console.log(1);
    console.log(2);
    fn2();
    console.log(3);
}
function fn2() {
    console.log(4);
    fn3();
    console.log(5);
    console.log(6);
}
function fn3() {
    console.log(7);
    console.log(8);
    console.log(9);
}
fn1();// 1 2 4 7 8 9 5 6 3
fn2();// 4 7 8 9 5 6
fn3();// 7 8 9



function fn1() {
    console.log(1);
    console.log(2);
    fn2();
    fn3();
    console.log(3);
}
function fn2() {
    console.log(4);
    console.log(5);
    console.log(6);
}
function fn3() {
    console.log(7);
    console.log(8);
    console.log(9);
}
fn1();
fn2();
fn3();


function fn1() {
    console.log(1);
    console.log(2);
    fn2();
    fn3();
    console.log(3);
}
function fn2() {
    console.log(4);
    console.log(5);
    fn3();
    console.log(6);
}
function fn3() {
    console.log(7);
    console.log(8);
    console.log(9);
}
fn1();// 1 2 4 5 7 8 9 6 7 8 9 3
fn2();// 4 5 7 8 9 6
fn3();// 7 8 9









// // 1.
function sum(a, b, c) {
    console.log(a, b, c);
}
sum(12, 15, 20);
sum();
sum(12);
sum(12, 20);

// // 2.
function num(a, b) {
    console.log(a + b);
    return "Wecode";
}
let a = num(10, 20);
console.log(a);

console.log(num(1, 1));

// // 3.
function sum() {
    return 123;

}
console.log(sum());


// // 4.
function oddEven(a) {
    if (a % 2 === 0) {
        return "Even";

    } else {
        return "Odd"
    }
}
console.log(oddEven(10));
console.log(oddEven(11));
console.log(oddEven("wecode"));
console.log(oddEven("2"));

let x = (oddEven(10));// //isse bhi kr skte h
console.log(x);

let y = (oddEven(11));
console.log(y);


// // 5.
function oddEven(a, b) {
    if (a % 2 === 0 && b % 2 === 1) {
        console.log("Yes");
    }
    else {
        console.log("No");
    }
}
oddEven(10, 11);
oddEven(10, 110);


// // 6.
function table(a) {
    for (i = 1; i <= 10; i++) {
        console.log(i * a);
    }
}
table(2);
table(5);



// // 7.
function table(a, b) {
    for (i = 1; i <= b; i++) {
        console.log(i * a);
    }
}
table(2, 10);
table(5, 10);


// // 8.
function printtWords(a) {
    for (i = 1; i <= a; i++) {
        if (i % 2 === 0) {
            console.log("Hello Word");
        }
        else {
            console.log("Hello Wecode----------");
        }

    }
}
printtWords(10);








function fn2() {
    console.log(4);
    console.log(5);
    fn3(); //Cyclic Dependency - Neven Do This
    console.log(6);
}
function fn3() {
    console.log(7);
    console.log(8);
    console.log(9);
    fn2(); //Cyclic Dependency - Neven Do This
}
fn2();


// // Default Parameter 

function sum(a, b = 200) {
    console.log(a, b);
    console.log(a + b);
}
sum(10, 100);


function sum(a, b = 200) {
    console.log(a, b);
    console.log(a + b);
}
sum(10);


function sum(a = 100, b = 200) {
    console.log(a, b);
    console.log(a + b);
}
sum();


function sum(a = 100, b = 200) {
    console.log(a, b);
    console.log(a + b);
}
sum(undefined, undefined);
sum(); //both are equal
//value pass kr rhe hain to vo value consider hogi
//value pass ni kr rhe hain to undefined
//agar value undefined hai to default value consider hogi
sum(10, 20);
add(10, 20);


function sum(a, b) {
    console.log(a + b); //function declaration
}
sum(10, 20);

const num = function (a, b) {
    console.log(a + b); //function expression
};
num(10, 20);

//1st Difference - Syntax
//2nd Difference - We can not call function expression before declaration
/* Function declaration ko hm jha code likha h uske pehle call/invoke kr skte h
but Function expression ko code jha lkha he uske pehle call/invoke nhi kr skte
*/

// function (a, b) {
//     console.log(a + b); //Anonymous Function - Function without name
// };



const max = function (num1, num2) {
    if (num1 > num2) {
        return num1;
    } else if (num2 > num1) {
        return num2;
    } else {
        return "Both are equal";
    }
};
console.log(max(20, 20));


function hello() {
    console.log("Hello");
}
hello();


eval('function hello() {console.log("Hello");} hello();');
console.log(eval("46+2-3"));


function sum(a, b) {
    console.log(a + b); //function declaration
}

const add = function (a, b) {
    console.log(a + b); //function expression
};

const plus = (a, b) => {
    console.log(a + b); //arrow function
};
sum(10, 20);
add(10, 20);
plus(10, 20);


const add2 = function (a, b) {
    console.log(a + b); //function expression
};
add2(10, 20);


const plus2 = (a, b) => console.log(a + b); //arrow function
plus2(10, 20);



function sum(a, b) {
    return a + b;
}
console.log(sum(10, 20));


const add3 = (a, b) => a + b;
console.log(add3(10, 20));


function sum(a, b) {
    console.log("Hello");
    return a + b;
}
console.log(sum(10, 20));


const add4 = (a, b) => {
    console.log("Hello");
    return a + b;
};
console.log(add4(10, 20));






