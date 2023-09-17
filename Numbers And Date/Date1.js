// // Date

// Creating Dates and different ways of creating Date object
// Understanding milliseconds and other units of time
// Operations with Dates
// Date setter methods
// Date getter methods
// Internationalization Dates
// Internationalization Numbers
// setTimeOut and setInterval



// Creating Dates and different ways of creating Date object

const date = new Date();
const date1 = new Date(2023);// Only year dene pr 1970 se suru hoga
const date2 = new Date(2023, 10);// Month - 1 Hoga
const date3 = new Date(2023, 10, 10);
const date4 = new Date(2023, 10, 10, 12);
const date5 = new Date(2023, 10, 10, 12, 10);
const date6 = new Date(2023, 10, 10, 12, 10, 5);
const date7 = new Date(2023, 10, 10, 12, 10, 5, 1000);
const date8 = new Date(5000);


console.log(date);
console.log(date1);
console.log(date2);
console.log(date3);
console.log(date4);
console.log(date5);
console.log(date6);
console.log(date7);
console.log(date8);


const date9 = new Date("2025-10-12");// ISO DATE
console.log(date9);

const date10 = new Date("10/12/2025");// SHORT DATE
console.log(date10);

const date11 = new Date("March 10 2025");// LONG DATE
console.log(date11);

const date12 = new Date("10 March 2025");// LONG DATE
console.log(date12);



// Date getter methods

const date13 = new Date();
console.log(date13.getFullYear());

const date14 = new Date();
console.log(date14.getMonth());// Month - 1

const date15 = new Date();
console.log(date15.getDate());

const date16 = new Date();
console.log(date16.getHours());

const date17 = new Date();
console.log(date17.getMinutes());

const date18 = new Date();
console.log(date18.getSeconds());

const date19 = new Date();
console.log(date19.getMilliseconds());// Total Time In MilliSeconds



// Date setter methods

const date21 = new Date();
date21.setFullYear(2023);
date21.setMonth(7);
date21.setDate(18)
date21.setHours(5);
date21.setMinutes(10);
date21.setSeconds(7);
date21.setMilliseconds(1000);
console.log(date21);


const date22 = new Date();
console.log(`${date22.getFullYear()}/${date22.getDate()}/${date22.getMonth()}`);


function getCurrentDate() {
    const date23 = new Date();
    return (`${date23.getFullYear()}-${date23.getMonth()}-${date23.getDate()}`)
}
console.log(getCurrentDate());




