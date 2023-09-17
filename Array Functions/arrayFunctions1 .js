// // // Array Functions


// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// arr.push(150);// Piche se index ADD krta h
// arr.push(200)
// console.log(arr);

// arr.pop() // Piche se index Delete krta h
// arr.pop()
// console.log(arr);

// arr.unshift(10); // AAge index ADD krta h
// arr.unshift(20)
// console.log(arr);

// arr.shift(); // AAge se index Delete krta h
// arr.shift()
// console.log(arr);


// let arr2 = [1, 2, 3, 4, 5]
// console.log(arr2.toString());// Isse numbers ke bich (,) daal skte h Ex.(,)
// console.log(arr2.join("*")); //Isse numbers ke bich kuch bhi daal skte h Ex.(*)
// console.log(arr2.join("$$"));
// console.log(arr2.reverse());// Isse Arry numbers ULTE ho jate h
// console.log(arr2.at());
// console.log(arr2.at(arr2.length - 1));
// console.log(arr2.at(-1));

// let arr3 = [11, 12, 13, 14, 15]
// let result = arr.concat(arr3);
// console.log(result);






// // forEach Array ko 3 types se kiya h hmne 


let array = [1, 2, 300, "Wecode", 400]
function test(value) {
    console.log(value);
}
array.forEach(test)

let array2 = [1, 2, 300, "Wecode", 400]
array2.forEach((value) => {
    console.log(value);
})

let array3 = [1, 2, 300, "Wecode", 400]
array3.forEach((value, index, array3) => {
    console.log(value, index, array3);
})


let arr = [1, 2, 3, 4, 5];
arr.forEach((value) => {
    if (value > 2) {
        console.log(value);
    }
});


let ans = arr.find((value) => {
    return value > 3;
});
console.log(ans);

ans = arr.some((value) => {
    return value > 3;
});
console.log(ans);

ans = arr.every((value) => {
    return value > 0;
});
console.log(ans);

ans = arr.findIndex((value) => {
    return value > 3;
});
console.log(ans);

ans = arr.map((value) => {
    return value * 10;
    return value + 20
});
console.log(ans);

ans = arr.filter((value) => {
    return value > 2
});
console.log(ans);


ans = arr.reduce((prev, curr) => {
    console.log(prev, curr);
    return prev + curr
})
console.log(ans);


ans = arr.reduce((prev, curr) => {
    console.log(prev, curr);
    return prev + curr
}, 100)
console.log(ans);


let array1 = ["Amir", "Khan", "rekha", "Makka", "Madina"]
let length = array1.reduce((prev, curr) => {
    console.log(prev, curr);
    return prev + curr.length
}, 0)
console.log(length);

