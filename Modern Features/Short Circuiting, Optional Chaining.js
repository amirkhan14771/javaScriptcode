// let a = 20 || 30 || 40 > 20 || 20 < 30;
// console.log(a);

// let b = 10 && 20 && 50 && 10 < 20 && 0;
// console.log(b);

// let c = 10(20 && 50)(10 < 20 && 0);
// console.log(c);

// let d = null(20 && 0)(10 < 20 && 0);
// console.log(d);

// let e = 10;
// if (!e) {
//   e = 100;
// }

// // Replace with ternary operator

// f = f ? f : 100;

// g = g || 100;

// console.log(null ?? 20);

// console.log((false || 0) ?? 50);

// let h = 0;
// h = h || 100;
// h ||= 100;
// console.log(h);

// i = i && 100;
// i &&= 100;

// l = j ?? 100;
// j ??= 100;

// j = j + 10;
// j += 10;

let obj = {
  address: {
    pincode: 302012,
  },
};
// console.log(obj.myAddress.city); //error



// The Nullish Coalescing Operator ??

let obj1 = {
  address: {
    pincode: 302012,
    subAddress: {
      city: "Jaipur",
    },
  },
};
// console.log(obj1?.address?.sub?.city?);