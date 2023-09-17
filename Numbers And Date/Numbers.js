// console.log(Math.floor(10.79)); // Point wale numbers delete ho jaate h
// console.log(Math.ceil(10.29)); // Next number aa jata h
// console.log(Math.PI);// PI = 3.14
// console.log(Math.max(10, 40, 30, 50, 60, 1100));
// console.log(Math.min(29, 59, 38, 60, 38));
// console.log(Math.min(...[10, 39, 59, 67]));
// console.log(Math.max(...[40, 39, 69, 83]));
// console.log(Math.trunc(10.60)); // Point wale numbers delete ho jaate h
// console.log(Math.round(10.40));
// console.log(Math.round(10.80));  
// console.log(Math.random());
// console.log(Math.trunc(Math.random() * 10));

// Converting Numbers 
console.log(Number("12"));
console.log(+"12");

// Infinity
console.log(10 / 0);
console.log(10 / 0 === Infinity);

// Numbers
let a = 10;
console.log(typeof a);

let b = 10495464864993399999999993777777777;
console.log(b);
console.log(typeof b);

console.log(Number.MAX_SAFE_INTEGER);
if (b >= Number.MAX_SAFE_INTEGER) {
    console.log("Yes");
} else {
    console.log("No");
}

console.log(Number.MIN_SAFE_INTEGER);


// Bigint Number
let c = 10n;
console.log(c);
console.log(typeof c);// Bigint

let d = BigInt(10);
console.log(d);
console.log(typeof d);// Bigint


// Exceptions in BigInt
console.log(10 / 2);
// console.log(10n / 2);// Error
console.log(10n / 2n);// Allow




// // Number class functions
// toFixed
// toString
// valueOf
// Number()
// parseInt
// parseFloat
// isNaN

// toFixed
let F = 10.2345;
console.log(F.toFixed(2));
console.log(F.toFixed(3));
console.log(F.toFixed(29));// Maximum 20 Digit

// parseInt
let G = 10;
console.log(Number.parseInt(G));

let H = "100sajid10"
console.log(Number.parseInt(H));// Only Number hi Legga

// parseFloat
let I = '100.489hen';
console.log(Number.parseFloat(I));// ParseFloat me . ke baad ke Number lega

let J = "100.123sajid10"
console.log(Number.parseFloat(J));// ParseFloat me . ke baad ke Number lega

// isNaN
console.log(isNaN(10));// False
console.log(isNaN(Number('Sajid')));//True

// toString
let K = 10;
console.log(K.toString());
console.log(Number(10).toString());
console.log(10 + "");
console.log(String(10));

// Numbers
let L = "10";
console.log(Number(L));
console.log(+ "10");
console.log(Number('12'));


// // Number Properties
// MAX_VALUE
// MIN_VALUE
// POSITIVE_INFINITY
// NEGATIVE_INFINITY

console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);
console.log(Number.POSITIVE_INFINITY);
console.log(Number.NEGATIVE_INFINITY);

const date = new Date(Date.UTC(2023, 11, 10, 10, 10, 40, 5000));
console.log(new Intl.DateTimeFormat("en-in").format(date));// India
console.log(new Intl.DateTimeFormat("ce-RU").format(date));// US

console.log(
    new Intl.DateTimeFormat("en-in", {
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
        timeZone: "Australia/Sydney",
        timeZoneName: "short",
    }).format(date)
);


const number = 123456.789;
console.log(
    new Intl.NumberFormat("ar-EG", { style: "unit", unit: "liter" }).format(
        number
    )
);

console.log(
    new Intl.NumberFormat("ja-JP", { style: "currency", currency: "JPY" }).format(
        number
    )
);

console.log(
    new Intl.NumberFormat("en-IN", { maximumSignificantDigits: 3 }).format(number)
);
