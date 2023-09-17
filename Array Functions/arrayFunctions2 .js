let arr = ["Shoaib", "Tahir", "Aamir", "Saad", "Ali Sher", "Anis", "Aarif"];
arr.sort(); //Natural Sorting
console.log(arr);

let arr2 = [1, 3, 5, 4, 2, 8, 7, 9];
arr2.sort(); //Natural Sorting
console.log(arr2);

let arr3 = [1, 30, 15, 24, 2, 18, 27, 39, 40];
arr3.sort(); //Natural Sorting
console.log(arr3);

// num1 10 num2  5   num1 >
// num1 5  num2  10  num2 >
// num1 5  num2   5  ===

// a b
// a 10 -  b 5     +    5 a >
// a 5  -  b 10    -   -5 a <
// a 5  -  b 5     0    a == b


let arr4 = [1, 30, 15, 24, 2, 18, 27, 39, 40];
arr4.sort((a, b) => {
    // console.log("a", a, "b", b);
    return a - b;
});
console.log(arr4);


let arr5 = [1, 30, 15, 24, 2, 18, 24, 27, 39, 40];
arr5.sort((a, b) => {
    return 0;
});
console.log(arr5);



let arr6 = [1, 2, 3, 4, 5];
let arr7 = [arr6, 6, 7, 8, 9, 10];

console.log(arr7.flat());



let arr8 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
console.log(arr8.slice(4));
console.log(arr8.slice(5, 7));
console.log(arr8.slice(-4, -1));
console.log(arr8.slice(-4));


let arr9 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
arr9.splice(4, 3) // Konsi index se suru Krna h aur kitne remove Krna h
console.log(arr9);

let arr10 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
arr10.splice(4, 0, 101, 102, 103) // Remove ke alawa add bhi kr skte h
console.log(arr10);



let array3 = [1, 2, 3, 4, 5];
let sum1 = 0;
for (let i = 0; i < array3.length; i++) {
    console.log(array3[i]);
    sum1 = sum1 + array3[i];
}
console.log(sum1);