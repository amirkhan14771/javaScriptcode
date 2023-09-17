// let str = "WECODE"
// console.log(str);
// console.log(str.toLowerCase());

// let str1 = "weocde";
// console.log(str1);
// console.log(str.toUpperCase());

// let str3 = "    Wecode     ";
// console.log(str3);
// console.log(str3.trim());

// let str4 = "    Wecode"
// console.log(str4);
// console.log(str4.trimStart());

// let str5 = "Wecode   ";
// console.log(str5);
// console.log(str5.trimEnd());

// let str6 = "Wecode";
// console.log(str6);
// console.log(str6.startsWith("W"));// // true
// console.log(str6.startsWith("Wecode")); // // true
// console.log(str6.startsWith("Wa"));// // false
// console.log(str6.startsWith("de"));// // false

// let str7 = "Wecode";
// console.log(str7);
// console.log(str7.endsWith("de"));// // true
// console.log(str7.endsWith("code")); // // true
// console.log(str7.endsWith("We"));// // false
// console.log(str7.endsWith("weco"));// // false

// let str8 = "Wecode ";
// console.log(str8);
// console.log(str8.repeat(5));

// let str9 = "123 ";
// console.log(str9);
// console.log(str9.repeat(5)); // // Built In Function

// let str10 = "Wecode Academy";
// console.log(str10);
// console.log(str10.replace("Academy","Amir"));

// let str11 = "Wecode Academy Academy";
// console.log(str11.replace("Academy","Amir"));// // Only 1 First replace

// let str12 = "Wec ode";
// console.log(str12);
// console.log(str12.charAt(0));// // started 0
// console.log(str12.charAt(6));

// let str13 = "Wecode ";
// console.log(str13);
// console.log(str13.concat("Academy"));

// let str14 = "Wecode";
// console.log(str14);
// console.log(str14.concat(" My Name Is"));
// console.log(str14.concat(" My ","","Name ","","Is "))

// let str15 = "123"
// console.log(str15.toLowerCase());

// let str16 = "Hello World";
// console.log(str16.indexOf("World"));
// console.log(str16.indexOf("Hello"));

// let str17 = "Hello World";
// console.log(str17);
// console.log(str17.indexOf("Work"));// // -1

// if ("Hello World".indexOf("Hello") >= 0) {
//     console.log("Yes");
//   } else {
//     console.log("No");
//   }

//   let str18 = "Hello World World";
//   console.log(str18.includes("World"));
//   console.log(str18.includes("o"));
//   console.log(str18.includes("ll"));
//   console.log(str18.includes("Work"));

//   if ("Hello World".includes("Hello")) {
//     console.log("Yes");
//   } else {
//     console.log("No");
//   }

//   console.log("Hello World".split(""));
//   console.log("Hello World".split(" "));
//   console.log("Wecode academy".split("ac"));
//   console.log("Wecode academy".split("code"));
//   console.log("abababa".split("b"));
//   console.log("abbaxbaab".split("b"));
//   console.log("bbaxbaab".split("b"));

//   console.log("awecode".split("wecode"));
//   console.log("wecodeb".split("wecode"));
//   console.log("wecode".split("wecode"));
//   console.log("My,Name,Is,Wecode,Academy".split(","));
//   console.log("My$Name$Is$Wecode$Academy".split("$"));
//   console.log("bb".split("b"));
//   console.log("aaa".split("a"));
//   console.log("Wecode".split());
//   console.log("Wecode".split(""));

// let sum = "Wecode";// String Literal
// let sum1 = new String("Wecode"); // String Object
// console.log(typeof sum, typeof sum1);
// console.log(typeof sum, typeof sum1.valueOf());


// let obj = {
//   name: "Amir khan",
//   mobile: 7357101348,
//   address: {
//     pincode: 341515,
//     village: "Harsore",
//   },
// };
// const ans = obj.valueOf();
// console.log(ans);


// let a = true;
// let b = new Boolean(true);
// console.log(typeof a, typeof b);
// console.log(typeof a, typeof b.valueOf());

// console.log("Wecode Academy".indexOf("Academy"));
// console.log("Wecode Academy Academy".indexOf("Academy"));
// console.log("Wecode Academy Academy Academy".indexOf("Academy"));

// console.log("Wecode Academy Academy".lastIndexOf("Academy"));
// console.log("Wecode Academy".lastIndexOf("Academy"));
// console.log("Wecode Academy Academy World Academy".lastIndexOf("Academy"));

// console.log("95818".padStart(10, "*"));
// console.log("95818".padStart(8, "*"));
// console.log("95818".padStart(6, "*"));
// console.log("95818".padStart(5, "*"));// Not Allow
// console.log("95818".padStart(3, "*"));// Not Allow

// console.log("73571".padEnd(10,"*"));
// console.log("73571".padEnd(8,"*"));
// console.log("73571".padEnd(6,"*"));
// console.log("73571".padEnd(5,"*"));// Not Allow
// console.log("73571".padEnd(3,"*"));// Not Allow

// console.log("Wecode Academy Jaipur 302012".substr(2));
// console.log("Wecode Academy".substr(2, 4));
// console.log("Wecode Academy".substr(2, 6));
// console.log("Wecode Academy".substr(2));
// console.log("Wecode Academy".substr(7));
// console.log("Wecode Academy".substr(7, 3));
// console.log("Wecode Academy Jaipur 302012".substr(15, 6));
// console.log("Wecode Academy".substr(0, 2));

// console.log("Wecode Academy Jaipur 302012".substring(2));
// console.log("Wecode Academy".substring(2, 4));
// console.log("Wecode Academy".substring(2, 6));
// console.log("Amir khan".substring(0,4));
// console.log("Amir khan".substring(0,5));
// console.log("Amir khan".substring(0,9));

// console.log("7357101348".slice(0));// Substr ki trh hi Slice kamm krta h same
// console.log("7357101348".slice(5));

// let mat = 'let my number';
// let matc = mat.match('my')
// console.log(matc);

// const text = 'my name is amir khan,and i leave in jaipur';
// const pattern = "amir khan";
// const match = text.match(pattern)
// console.log(match);





// // its length

// let amir = "Amir khan Ashrafi"
// console.log(amir.length);

// let demo = "7357101348";
// let start = demo.substring(5);
// console.log(start.padStart("10","*"));

// let end = demo.substring(0,5);
// console.log(end.padEnd("10","*"));

// let demo = "7357101348";
// let demo2 = demo.substring(0,3)
// let demo3 = demo.substring(7,10);
// console.log(demo2,demo3);

// console.log(demo2.padEnd("7","*") + demo3);

// let string = prompt("What is your institute name")
//   console.log(string.repeat(5));

// let demo = "hello";
// let str2 = "";
// for(let i = 0;i < 5;i++){
//   str2 = str2 + demo;

// }console.log(str2);

// let pixel = prompt("What is your institute name");
// console.log(pixel);
// if(pixel.includes("Academy")){
//   console.log("yes");
// console.log(pixel.indexOf("Academy"));
// }else{
//   console.log("no");
//   console.log(pixel.concat("Academy"));
// }

// // 1.
// let demo = 1;
// for (let i = 1; i <= 5; i++) {
//   let str = "";
//   for (let j = 1; j <= i; j++) {
//     str = str + demo;
//    demo++;
//   }
//   console.log(str);
// }

// // 2.
// let number1 = Number(prompt("Enter the first number:"))
// let number2 = Number(prompt("Enter the second number:"))
// let number3 = Number(prompt("Enter the third number:"))

// let avrage = (number1 + number2 + number3) / 3

// alert(avrage);

// // 3.
// console.log(5 + 2 * 3 - 4 / 2); // 9
// console.log(10 % 3 + 4 * 2 / 5); // ????????????????????
// console.log(15 % (7 + 3) - 4 * 2);// ?????????????????
// console.log((2 + 3) * (4 - 1) + 6 / 2);// 18
// console.log(12 / 3 + 4 - 2 * 5);// -2

// //4.
/* Explain the difference between the == and === operators in JavaScript,
 and provide an example where their behavior differs.

 == and se do varibles ki value dekhte h ke same h ya nhi.
 === operator se do varible ki value aur data type check krte h

 let a1 = 10;
 let a2 = "20";
 console.log(a == b);

let a3 = 10;
 let a4 = "20";
 console.log(a === b);*/

// // 5.
// let pixel = "Wecode Academy";
// console.log("Wecode Academy".slice(2,6)); // code
// console.log("Wecode Academy".substring(2,6));// code

// console.log("Wecode Academy".slice(6,2));// not allow
// console.log("Wecode Academy".substring(6,2));// code

// console.log("Wecode Academy".slice(-7,-1));
// console.log("Wecode Academy".substring(-7,-2));// not allow

// // 6.
// let age = Number(prompt("What is your age"))
// let country = prompt("Whats country you gone")
// if(age <= 18){
//   console.log("Sorry, you must be at least 18 years old.");
// }else if(age >= 18 && country === "USA"){
//   alert("Welcome! Enjoy your stay in the USA.");
// }else if(age >= 18 && country ===" UK"){
//   console.log("Welcome! Enjoy your stay in the UK.");
// }else{
//   console.log("Welcome! Enjoy your stay.");
// }

// // 7.
// let sentence = prompt("Write a sentence")
// console.log(sentence.toUpperCase());
// console.log(sentence.replaceAll(" ","-"));
// console.log(sentence.slice(2,6));
// console.log(sentence.startsWith("a"));
// alert(sentence);

// // 8.
// function teem(length,width){
//   console.log(length * width);
// }teem(10,20)

// // 9.
// function calculateSumandReturn(){
//   let sum = 1 + 200 + 20 + 35;
//   if(sum > 100){
//     return 1;
//      } else{
//     return 2 ;
//      }
// }
// console.log(calculateSumandReturn());

// // 10.
// let age = +prompt("Enter your age")
// if(age < 18){
//   alert("Sorry, you must be at least 18 years old to access this website.")
// }else if(age >= 18 && age <= 30){
//   let ans = confirm("Are you sure you want to proceed?")
//   console.log(ans);
//   if(ans){
//     let name = prompt("What is your name")
//       alert("Welcome, [Name]!")

//   }else{
//     console.log("Action canceled.");
//   }
// }

