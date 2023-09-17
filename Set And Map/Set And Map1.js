// Set is A Data Sturcture
// Set index Support nhi krta h So index is not fix this fiture

// const set = new Set();
// set.add(1)
// set.add(2)
// set.add(3)
// set.add(1)
// set.add(2)
// set.add(3)
// console.log(set);

const set = new Set();
set.add("A")
set.add("B")
set.add("C")
set.add("D")
set.add("A")
set.add("B")
set.add("C")
set.add("D")
console.log(set);

console.log(set.size); // 3
console.log(set.has("A")); // true

// set.clear()
// console.log(set);

// set.delete("A") // A Delete 
// console.log(set);;



for (let value of set) {
    console.log(value);
}

set.forEach((value) => {
    console.log(value);
});


// // ********************************************************************************************************//

let arr = [...set] // // Set ko Array me convert krna
console.log(arr);
console.log(arr[3]); // Allow

console.log(set);
console.log(set[3]); // Not Allow


let array = [1, 2, 3, 4, 5, 1, 2, 3, 4, 6, 7] // // Array ko Set me convert krna
let set2 = new Set(array)
console.log(set2);



let array2 = [1, 2, 3, 4, 5, 1, 2, 3, 4, 6, 7] // // Array ko Set me convert krna
let array3 = []
for (let value of array2) {
    if (array3.includes(value)) {
        continue;
    } else {
        array3.push(value)
    }
}
console.log(array3);

// ***********************************************************************************************************//


const map = new Map()
map.set(1, 100)
map.set("instituteName", "Wecode")
map.set("rollNo", 12345);
map.set("marks", [1, 2, 3, 4, 5]);
map.set("city", "Delhi");

console.log(map);
console.log(map.get(1));
console.log(map.get("marks"));
console.log(map.get("marks")[2]);

console.log(map.size); // 5
console.log(map.has(1)); // true
console.log(map.has("names")); // false

// map.clear()
// console.log(map);

for (let value of map) {
    console.log(value);
    console.log(value[0], value[1]);
}


const map2 = new Map(
    [
        [1, 100, 1000],
        ["state", "Delhi"],
        ["city", "Jaipur"],
    ]);
console.log(map2); // Array to Map
console.log([...map2]); // Map  to Array

map.forEach((value, key, map) => {
    console.log(value, key, map);
})

let obj = {}
map2.forEach((value, key) => {
    obj[key] = value

})
console.log(obj);



