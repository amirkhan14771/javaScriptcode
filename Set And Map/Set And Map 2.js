// // // Agr Primative data type me change kiya h aur uska refrance kisi dusre varible me daal Diya to koi fark nhi padega

// // let i = 10;
// // let j = i; //10
// // i = 11;
// // console.log(i, j);


// // // Agr Not Primative data type me change kiya h aur uska refrance kisi dusre varible me daal Diya to 100% fark  padega

// // let arr1 = []; //Literal
// // let arr2 = new Array(); //Object

// // let object1 = {}; //Object
// // let object2 = new Object(); //Object

// // console.log(arr1, arr2);
// // console.log(object1, object2);


// // let obj1 = { name: "wecode" };
// // let obj2 = obj1;
// // let obj3 = obj2;
// // obj1.name = "Hello World";
// // obj2.name = "Hello Dear";
// // obj3.name = "Hi";
// // console.log(obj1, obj2, obj3);







// let arr = [1, 2, 3, 4, 5];
// let arr2 = arr;
// let arr3 = arr2;
// arr.push(6);
// arr2.push(7);
// arr3.push(8);
// console.log(arr, arr2, arr3);

// let map = new Map();
// let map2 = map;
// let map3 = map;
// map.set(1, 100);
// map2.set(2, 200);
// map3.set(3, 300);
// console.log(map, map2, map3);

// let father = { houseAddress: "30, Narayanpuri, Jhotwara" };
// let son = father;
// let daughter = father;

// let arr4 = [1, 2, 3, 4, 5];
// arr4.splice(2, 1);
// let ans = arr4.map((value) => {
//     return value * 10;
// });
// ans.push(100);
// console.log(arr4, ans);


// 1.
// // let arr = [1, 2, 3, 4, 5];
// // let ans = arr.map((value) => {
// //     return [value, value * 2];
// // });
// // //[1,2,2,4,3,6,4,8,5,10]
// // console.log(ans.flat());

// 2.
// // let arr = [1, 2, 3, 4, 5];
// // let ans = arr.flatMap((value) => {
// //     return [value, value * 2];
// // });
// // console.log(ans);





// 1.
// // let arr = ["Hello World", "My name is", "Wecode Academy", "Jaipur"];
// // let ans = [];
// // for (let value of arr) {
// //     let split = value.split(" ");
// //     for (let val of split) {
// //         ans.push(val);
// //     }
// // }
// // console.log(ans);

// 2.
// // let arr = ["Hello World", "My name is", "Wecode Academy", "Jaipur"];
// // let ans = arr.flatMap((value) => {
// //     return value.split(" ");
// // });
const map = new WeakMap()
// map.set(1,100)
// map.set(2,200)
// map.set(3,300)
// map.set(4,400)
// console.log(map); // WeakMap primitive Data ko accept nhi krta h Error deta h

// const map = new WeakMap();
// obj1 = {
//     name:"Wecode",
// },
// obj2 = {
//     name: "Hello",
// },
// obj3 = {
//     name: "Hi"
// }
// map.set(obj1,100)
// map.set(obj2,200)
// map.set(obj3,300)

// console.log(obj1);
// console.log(map.get(obj1)); // WeakMap Non Primitive Data ko accept krta h Error nhi deta

const map = new WeakMap();
obj1 = {
    name: "Wecode",
},
    obj2 = {
        name: "Hello",
    },
    obj3 = {
        name: "Hi"
    }
map.set(obj1, 100)
map.set(obj2, 200)
map.set(obj3, 300)
obj2 = null;
for (let i = 0; i < 100000; i++) {
    console.log(i);
}
console.log(map);