// Primative Data Types - Primative Data wale variable ko kisi dusre variable me refer krenge to dono ki values same ho jaegi but
//                        dono me se ek me bhi changes kiye to dono me change nhi hoga jisme change kiye usi me hoga

let i = 10;
let j = i;
console.log(i, j); // Same Values
i = 20;
console.log(i, j); // I Change
j = 30;
console.log(i, j); // J Change

// Non-Primative Data Types - NoN-Primative Data wale variable ko kisi dusre variable me refer krenge to dono ki values same ho jaegi And
//                            dono me se ek me kisi me bhi changes kiye to dono me change hoga

// Object pr
let k = { name: "Wecode" };
let l = k;
console.log(k, l);
k.name = "Academy";
console.log(k, l); // K L dono me change hoga
l.name = "jaipur";
console.log(l, k);

// Array pr
let m = [1, 2, 3, 4, 5];
let n = m;
console.log(m, n);
m.push(100000);
console.log(m, n); // K L dono me change hoga
n.push(20000);
console.log(n, m);

// **************************************************************************************************************

let p = 10;
let q = 10;
console.log(p, q);
console.log(p === q); // Equal

// Symbol is a Primative Data Type
let s = Symbol(10);
let t = Symbol(10);
console.log(s, t);
console.log(s === t); // Not Equal

// **************************************************************************************************************

// String Literal - Kitne bhi baar bna do ek hi memory me jaake store honge
let a = "Hello";
let b = "Hello";
console.log(a, b);
console.log(typeof a); // String 

// String Object - sb ko alg alg memory me save krega
let c = new String("Hello");
let d = new String("Hello");
console.log(c, d);
console.log(typeof c);// Object

// Note - Do Object Kbhi Bhi Equal Nhi Ho Skte He



// For In Loop In Object
const obj = {
    name : "Easy Code",
    address : "Jaipur",
    age : 31,
}

for(let key in obj){
    console.log(key);
}

for(let values in obj){
console.log(obj[values]);
}

for(let key in obj){
    console.log(key,obj[key]);
}
