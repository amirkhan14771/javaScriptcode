// // Modern Features 

// What is destructuring
// Reverse values using destructuring
// Return two values from function
// Destructuring of nested array
// Setting default values
// Destructuring Objects
// Extract value
// Different property name
// Default values
// Nested Object
// In Function

/* destructuring - Destrcutring ek syntax hota hai jiski help se hm Array/Object me
  se values easily nikal ke variables me store kr skte hain.
*/

// const arr = [1, 2, 3, 4, 5];
// const one = arr[0];
// const two = arr[1];
// const three = arr[2];
// const four = arr[3];
// console.log(one, two, three);


// Destructuring Arrays

// const arr = [1, 2, 3, 4, 5];
// const [one, , three, four] = arr;
// console.log(one, three, four);

const arr2 = [1, 2, 3, 4, 5];
const arr3 = arr2; // Assingment - Dono object me change hoga
arr2.push(100);
console.log(arr2, arr3);

const arr4 = [1, 2, 3, [9, 10], 6, 7];
const arr5 = [...arr4]; // Shallow Copy Array - Top Level Elememt me koi fark nhi but Nested Element me hoga
arr4.push(100);
arr5.push(500);
arr4[3].push(1000);
console.log(arr4, arr5);

const arr6 = [1, 2, 3, [9, 10], 6, 7];
const arr7 = JSON.parse(JSON.stringify(arr6)); // Deep Copy - Khi bhi koi bhi change nhi hoga
arr6.push(100);
arr7.push(500);
arr6[3].push(1000);
console.log(arr6, arr7);


// // Setting default values:

// const arr8 = [1, 2]; 
// const [one = 10, two = 20, three = 30] = arr8;
// console.log(one, two, three);

const arr9 = [1, 2];
const arr10 = [4, 5];
const arr11 = [7, 8];
const arr12 = [...arr11, ...arr10, ...arr9]; // Concat
console.log(arr12);

// Reverse values using destructuring
let a = 10;
let b = 20;
c = a; // c = 10
a = b; // a = 20;
b = c; // b = 10

console.log(a, b);


// reverse two numbers using destructring
let a1 = 10;
let b1 = 20;
[a1, b1] = [b1, a1]; // Swap/Replace
console.log(a1, b1);


// Return two values from function
function getDetail() {
    return [1, 2, 3, 4, 5];
}
console.log(getDetail());

// Destructuring of nested array
// Yadi hume koi value skip krni hai to uske lie keval comma lgana hoga

const arr13 = [1, 2, 3, [4, 5, [6, 7], 8, 9, 10]];
const [one, , , [four, , [, seven], eight]] = arr13;
console.log(one, four, seven, eight);


// Objects Destructuring

const obj = {
    name: "Wecode",
    Mobile: 7357101348,
    email: "amirkhan14771@gmail.com",
    address: {
        pincode: 341415,
        country: "India",
    },
};
const {
    Mobile: Mynumber, // Different property name
    name,
    email,
    address: { pincode }, // Nested Object
} = obj;

console.log(name, Mynumber, email, pincode);


const obj1 = {
    name: "Wecode",
    Mobile: 7357101348,
    email: "amirkhan14771@gmail.com",
    address: {
        pincode: 341415,
        country: "India",
    },
};

1;
function printDetail(obj1) {
    console.log(obj1.name, obj1.Mobile);
}
printDetail(obj1);

2;
function printDetail({ name, Mobile }) {
    console.log(name, Mobile);
}
printDetail(obj1);