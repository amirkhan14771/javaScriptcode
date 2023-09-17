// // // max of 2 numbers 

function max(num1, num2) {
    if (num1 > num2) {
        return num1;
    } else if (num2 > num1) {
        return num2;
    } else {
        return "both are equal";
    }
}
console.log(max(20, 10));

const maximum = function (num1, num2) {
    if (num1 > num2) {
        return num1;
    } else if (num2 > num1) {
        return num2;
    } else {
        return "both are equal";
    }
};
console.log(maximum(20, 30));

const maxim = (num1, num2) => {
    if (num1 > num2) {
        return num1;
    } else if (num2 > num1) {
        return num2;
    } else {
        return "both are equal";
    }
};
console.log(maxim(20, 20));




// // // sum of 2 numbers

function sum(num1, num2) {
    console.log(num1 + num2);
}
sum(10, 20);

const sum2 = function (num1, num2) {
    console.log(num1 + num2);
};
sum2(10, 15);

const sum3 = (num1, num2) => {
    console.log(num1 + num2);
};
sum3(15, 20);



// // // oddEven

function oddEven(num) {
    if (num % 2 === 0) {
        return "Even";
    } else {
        return "Odd";
    }
}
console.log(oddEven(23));


const oddEven2 = function (num) {
    if (num % 2 === 0) {
        return "Even";
    } else {
        return "Odd";
    }
}
console.log(oddEven2(24));


const oddEven3 = (num) => {
    if (num % 2 === 0) {
        return "Even";
    } else {
        return "Odd";
    }
};
console.log(oddEven3(24));




// // // table 5

function table(num) {
    for (let i = 1; i <= 10; i++) {
        console.log(5 * i);
    }
}
table(5);


const table2 = function (num) {
    for (let i = 1; i <= 10; i++) {
        console.log(5 * i);
    }
};
table2(5);


const table3 = (num) => {
    for (let i = 1; i <= 10; i++) {
        console.log(5 * i);
    }
};
table3(5);




// // // isEven

function isEven(num) {
    if (num % 2 === 0) {
        console.log("yes");
    } else {
        console.log("no");
    }
}
isEven(10);


const isEven2 = function (num) {
    if (num % 2 === 0) {
        console.log("yes");
    } else {
        console.log("no");
    }
}
isEven2(10);


const isEven3 = (num) => {
    if (num % 2 === 0) {
        console.log("yes");
    } else {
        console.log("no");
    }
}
isEven3(10);




// // // isOdd

function isOdd(num) {
    if (num % 2 === 1) {
        console.log("yes");
    } else {
        console.log("no");
    }
}
isOdd(10);


const isOdd2 = function (num) {
    if (num % 2 === 1) {
        console.log("yes");
    } else {
        console.log("no");
    }
}
isOdd2(10);


const isOdd3 = (num) => {
    if (num % 2 === 1) {
        console.log("yes");
    } else {
        console.log("no");
    }
}
isOdd3(10);

// // Hoisting - Jis line pr code create kia hai usse phle function call kr skte hai ya nhi ?
// //     Function Declaration - Phle use kr skte hain
// //     Func expression and Arrow function ko phle use ni kr skte hain

// // value vs reference
// // address
// // mobile number
// // notes - Value-----
// //     Reference - Paper - Kitchen me white paper - white paper me address hoga
// // Memory - Value 10
// // "Jaipur" Address Value
// // Reference - Memory ka address - Value
// // Value - Directly value use kr loge
// // Reference - Memory location pr jana pdega - value uthani pdegi

// // JavaScript -

function one() {
    two(); //Callback
}
function two() {
    one();

}
// // Function ko as value pass kr skte ho argument me
// // Function ko as value return kr skte ho function se

// function haldi(fn) {
//     mehnadi();
// }
// haldi(mehnadi);
// mehnadi();
// barat();
// reception();


function one(fn) {
    console.log(1);
    fn(); //Callback function
}
function two() {
    console.log(2);
}
const three = function () {
    console.log(3);
};
one(two);


function one1(fn) {
    console.log(1);
    fn(); //Callback function
}
const three1 = function () {
    console.log(3);
};
one1(function two1() {
    console.log(2);
});



function sum(num1, num2) {
    return num1 + num2;
}
console.log(sum(10, 20));

const add = (num1, num2) => num1 + num2;
console.log(add(10, 20));



function calculate(num1, num2, fn) {
    fn(num1, num2);
}
calculate(100, 200, sum);
calculate(100, 200, mul);
calculate(100, 200, divide);
calculate(100, 200, sub);

function sum() {
    console.log(num1 + num2);
}
function mul() {
    console.log(num1 * num2);
}
function sub() {
    console.log(num1 - num2);
}
function divide() {
    console.log(num1 / num2);
}






function calculate(num1, num2, fn) {
    fn(num1, num2);
}
calculate(100, 200, (num1, num2) => {
    console.log(num1 + num2);
});



function test(fn) {
    fn();
}
test(function () {
    console.log("Hello");
});
test(function () {
    console.log("Hello World");
});


function test2(fn) {
    fn(1000);
}
test2(function (num1) {
    console.log(num1);
});

function test3(fn) {
    fn(1000, 2000);
}
test3(function (num1, num2) {
    console.log(num1, num2);
});

function test4(fn) {
    fn(10);
}
test4(function (num1) {
    for (let i = 1; i <= num1; i++) {
        console.log(i);
    }
});




let sum = function (a, b) {
    console.log(a + b);
};
console.log(sum);
sum(100, 900);


function testing(a, b, cb) {
    cb(a, b);
}
testing(100, 200, sum);
testing(1000, 2000, function (num1, num2) {
    console.log(num1, num2);
});


function test(cb) {
    cb();
}
test(hello);
function hello() {
    console.log("Hello");
}


function test(num1, cb) {
    cb(num1);
}
test(101, oddEven);
function oddEven(num1) {
    if (num1 % 2 === 0) {
        console.log("Even");
    } else {
        console.log("Odd");
    }
}

function foodMaker(foodType, cb, juiceType) {
    console.log(foodType);
    cb(juiceType);
}
function juiceMaker(juice) {
    console.log(`${juice} Juice`);
}
function lassiMaker() {
    console.log(`Lassi`);
}
function nimbuPaniMaker() {
    console.log(`Nimbu Pani`);
}
foodMaker("Egg Curry", lassiMaker);
foodMaker("Egg Curry", nimbuPaniMaker);
foodMaker("Egg Curry", juiceMaker, "Banana");
foodMaker("Egg Curry", () => {
    console.log(`Lassi`);
});


function calculate(num1, num2, cb1, cb2) {
    console.log(num1, num2);
    cb1(num1, num2);
    cb2(num1, num2);
}
calculate(1, 2, sum, mul);
function sum(a, b) {
    console.log(a + b);
}
function mul(x, y) {
    console.log(x * y);
}


//First Class Function

// // 1. Function ko variable me store krva skte hain
let x = 10;
let sum = (a, b) => a + b;
// // 2. Function ko as a argument pass kr skte hain
sum(10, 20);
test((a, b) => a + b);
// // 3. Function ko as a value kisi dusre function se return kr skte hain
return 200
return (a, b) => a + b;
// // Function ko variable ki trah treat kia jata hai


function test() {
    return "Hello World";
}
let ans1 = test();
console.log(ans1);

function test2() {
    return function sum(a, b) {
        console.log(a + b);
    };
}
let ans2 = test2();
console.log(ans2);
ans2(10, 20);




function test() {
    return "Hello World";
}
let ans3 = test();
console.log(ans3);

function test2() {
    return function (a, b) {
        console.log(a + b);
    };
}
let ans4 = test2();
console.log(ans4);
ans2(10, 20);


function test(operator) {
    if (operator === "+") {
        return function (a, b) {
            console.log(a + b);
        };
    } else if (operator === "-") {
        return function (a, b) {
            console.log(a - b);
        };
    } else if (operator === "*") {
        return function (a, b) {
            console.log(a * b);
        };
    } else if (operator === "/") {
        return function (a, b) {
            console.log(a / b);
        };
    }
}
let ans = test("+");
ans(2, 4);










function calculate(num1, num2, cb) {
    console.log(num1, num2);
    cb(10, 20);

} calculate(10, 20, sum)

function sum(num1, num2) {
    console.log(num1 + num2);
}
function mul(num1, num2) {
    console.log(num1 * num2);
}
function divide(num1, num2) {
    console.log(num1 / num2);
}
function max(num1, num2) {
    if (num1 > num2) {
        return num1;
    } else if (num2 > num1) {
        return num2;
    } else {
        return "both are equal"
    }
}
function sub(num1, num2) {
    console.log(num1 - num2);
}



function operators(operator) {
    if (operator === 'addition') {
        return function (a, b) {
            return a + b;
        };
    } else if (operator === 'mult') {
        return function (a, b) {
            return a * b;
        };
    } else if (operator === 'divide') {
        return function (a, b) {
            return a / b
        };
    } else if (operator === 'sub') {
        return function (a, b) {
            return a - b
        };

    } else {
        return "no operator"
    }
};
let addition = operators('addition');
console.log(addition(10, 3));

let mult = operators('mult');
console.log(mult(2, 3));





/* 1. Create a function and pass one number in arugment.Agar number odd hai 
 to ek function return kro jo Odd print krta ho.Agar number even ho to ek function
 return kro jo Even Print krta ho */

function testOddEven(num1) {
    if (num1 % 2 === 1) {
        return function () {
            console.log("Odd");
        };
    } else {
        return function () {
            console.log("Even");
        };
    }
}
console.log(testOddEven(10));

/* 2. Create a function and pass a string. Agar string hello hai to ek
 function return kro jo Hello print krta ho otherwise else me dusra function
  return kro jo Hello World print krta ho */

function printString(str) {
    if (str === "hello") {
        return function () {
            console.log("Hello");
        };
    } else {
        return function () {
            console.log("Hello World");
        };
    }
}

/* 3. Create a function and pass one number and one callback function.
  Callback function me 1st time ek function pass krna hai jo diye gye number ki
  table print krta hu ascending order me like 5 10 15 20 next time ek dusra
  function pass kro jo table print krta ho descending order me like 50 45 40
*/
function test(num, cb) {
    cb(num);
}
test(10, function (num) {
    for (let i = 1; i <= 10; i++) {
        console.log(i * num);
    }
});
test(10, function (num) {
    for (let i = 10; i >= 1; i--) {
        console.log(i * num);
    }
});

/* 4. Create a function and pass one string and one callback function.
 Callback function ko vo string pass krni hai and jo b string hai usme World + 
 krke print krvana hai */

function test2(str, cb) {
    cb(str);
}
test2("Hello", function (str) {
    console.log(str + " World");
});
test2("WeCode", function (str) {
    console.log(str + " World");
});



/* High Order Function - Vo function jo koi dusra function ya to argument
 me accept krta ho ya koi function return krta ho */



setTimeout(function () {
    let a = 10;
    let b = 20;
    console.log(a + b);
}, 2000);
function test() {
    console.log("hello from function declaration");
}
test();


setTimeout(function () {
    let a = 10;
    let b = 20;
    console.log(a + b);
}, 2000);

setInterval(function () {
    console.log("Hello");
}, 1000);


let i = 1;
setInterval(function () {
    console.log(i);
    ++i;
}, 1000);


let hour = 0;
let minute = 0;
let seconds = 0;
setInterval(function () {
    ++seconds;
    if (seconds === 60) {
        ++minute;
        seconds = 1
        if (minute === 60) {
            ++hour;
            minute = 1
        }
    }
    console.log(`${hour}:${minute}:${seconds}`);
}, 1000)



let id = setInterval(function () {
    console.log("Hello");
}, 1000);

let id2 = setInterval(function () {
    console.log("Hello World");
}, 1000);

setTimeout(function () {
    clearInterval(id);
}, 5000);

