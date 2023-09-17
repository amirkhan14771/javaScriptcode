let names = ["Amir", "Sharif", "Jahir", "Yasin", "Sakil", "Azhar"]
console.log(names);

// // Array Data Sturcture - Data ko store krna ya rkhna hi Data Structure kahlata

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9] // Array Literal
console.log(numbers);

let arr = new Array(1, 2, 3, 4, 5, 6, 7, 8, 9)
console.log(arr);

// // Array Data Structure hota h
// // Array multiple data ko store krne ke kaam aata hai
// // Array index (position) pr kaam krta hai
// // index 0 start hoti hai
// // Array ek linear data structure hai
// // Array me searching fast hoti hai
// // Array me update krna hai to using index to b fast hoga
// // Array me insertion and deletion slow hota hai agar element start me ya bich me khi add hua hai to

let names2 = ["Amir", "Sharif", "Jahir", "Yasin", "Sakil", "Azhar"]
let numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9]
let arr2 = new Array(1, 2, 3, 4, 5)

console.log(names2.length, numbers2.length, arr2.length);


let demo = ["Jahir", "Amir", "Akram", "Sajid"]
console.log(demo[0]);
console.log(demo[1]);
console.log(demo[2]);
console.log(demo[3]);

demo[1] = "Shoyab"; //Update
console.log(demo);


let names3 = ["Amir", "Sharif", "Jahir", "Yasin", "Sakil", "Azhar"]
for (let i = 0; i < names3.length; i++) {
    console.log(names3[i]);
}

let numbers3 = [1, 2, 3, 4, 5]
for (let j = 0; j < numbers3.length; j++) {
    console.log(numbers3[j]);
}

let names4 = ["Sajid", "Arun", "Aadi", "Monu", "Tasleem", "Aafreen", "Rahil"];
let i = 0;
while (i < names4.length) {
    console.log(names4[i]);
    i++;
}


let numbers4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5];
i = 0;
while (i < numbers4.length) {
    console.log(numbers4[i]);
    i++;
}


let array3 = [1, 2, 3, 4, 5];
let sum1 = 0;
for (let i = 0; i < array3.length; i++) {
    console.log(array3[i]);
    sum1 = sum1 + array3[i];
}
console.log(sum1);



