// // The Spread Operator

// String to array using spread
// Passing arguments in function


// // The Spread Operator

/* ***************************************/

// // String to array using spread

let str = "Wecode Academy";
let arr = [...str];
console.log(arr);

/* ***************************************/

/* ***************************************/

function sum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum = sum + arr[i];
    }
    console.log(sum);
}
sum([1, 2, 3, 4, 5]); // Function me se Sum Nikalna

// Passing argument in Function

function sum(...arr) {
    console.log(arr);
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum = sum + arr[i];
    }
    console.log(sum);
}
sum(1, 2, 3, 4, 5); // Function me se Sum Nikalna

/* ***************************************/

// // The Rest Parameter

// Assign values
// Rest element last element
// Assign values in object
// Variable arguments in function

// // The Rest Parameter

// ***************************************/

// Assign values
// Rest element last element

let arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let [one, two, three, ...others] = arr2;
console.log(one, two, three, others);

// ***************************************/

// ***************************************/

// Assign values in object
const obj = {
    name: "Wecode Academy",
    mobile: 7357101348,
    age: 18,
    email: "amirkhan14771@gmail.com",
};

const { name, ...others2 } = obj;
console.log(name, others2);

// ***************************************/



// ***************************************/
// variable Argument in Function

function sum(a, b, c) {
    console.log(a + b + c);
}

let array = [1, 2, 3];
sum(...array);

// ***************************************/

// // Enhanced Object literals

// Enhanced Object literals
// Exactly same name
// Function in object
// Computer property name

/* ***************************************/

// Enhanced Object literals
// Exactly same name

let name2 = "Wecode";
let age = 21;

let obj4 = {
    name2: name2,
    age: age,
};

console.log(obj4);



let name3 = "Wecode";
let age2 = 21;

let obj5 = {
    name3,
    age2,
};
console.log(obj5);
// Agr kisi function me key ki value kisi varible se leni pdti h aur key and varible name same h to key ke sath value dalna jruri nhi

/* ***************************************/

/* ***************************************/

let obj2 = {
    name: "Wecode Academy",
    sum: function (a, b) {
        console.log(a + b);
    },
};

obj2.sum(1, 2);



// Function in object
let obj3 = {
    name: "Wecode Academy",
    sum(a, b) {
        console.log(a + b);
    },
};
obj3.sum(1, 2);

/* ***************************************/

/* ***************************************/

// Computer property name

let obj6 = {
    name: "Wecode Academy",
    Mobile: 7357101348,

    sajid30: 75979927144,
};
console.log(obj6);

let ans = prompt("What is your Age");
let obj7 = {
    name: "Wecode Academy",
    Mobile: 7357101348,

    ["sajid" + ans]: 75979927144,
};

console.log(obj7);
console.log(obj7["sajid" + ans]);

/* ***************************************/