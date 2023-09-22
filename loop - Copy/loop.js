 for (let i = 1; i <= 1; ++i) {
  console.log("Hello");
}
for (let i = 11; i <= 20; i++) {
  console.log(123);
}
for (let i = 2; i <= 10; i++) {
  console.log(1);
}
for (let i = 2; i <= 10; i++) {
  console.log(1);
  i++;
}
for (let i = 2; i <= 10; i++) {
  console.log(1);
  i++;
  i++;
}
for (let i = 2; i <= 20; i++) {
  console.log(1);
  i++;
  i++;
  i++;
}
for (let i = 2; i <= 20; i++) {
  console.log(1);
  i = i + 5;
}
 for (let i = 1; i <= 10; i++) {
  console.log(i);
}
for (let i = 10; i >= 1; i--) {
  console.log(i);
}
for (let i = 30; i >= 3; i = i - 3) {
  console.log(i);
}

for (let i = 1; i <= 10; i++) {
  console.log(i);
}

for (let i = 1; i <= 10; i++) {
  console.log(i);
}


for (let i = 2; i <= 100; i = i + 2) {
  console.log(i);
}

for (let i = 1; i <= 10; i++) {
  console.log(i * 5);
}

for (let i = 5; i <= 50; i = i + 5) {
  console.log(i);
}

for (let i = 50; i >= 5; i = i - 5) {
  console.log(i);
}

for (let i = 1; i <= 100; i++) {
  if (i % 2 === 1) {
    console.log(i);
  }
}

for (let i = 1; i <= 100; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

for (let i = 1; i <= 100; i++) {
  if (i % 7 === 0) {
    console.log(i);
  }
}


for (let i = 1; i <= 100; i++) {
  if (i % 5 === 0 || i % 8 === 0) {
    console.log(i);
  }
}



// // While Loop

let p = 1; //Step 1
while (p <= 10) {
  //Step 2 condition
  console.log(p); //Step 3
  p++; //Step 4
  //Step 5 - repeat from step 2 to step 4
}

let q = 10;
while (q >= 1) {
  console.log(q);
  q--;
}


let k = 1;
while (k <= 10) {
  console.log(k);
  k++;
}

// // Do While loop

let l = 1;
do {
  console.log(l);
  l++;
} while (l <= 0);


let m = 10;
do {
  console.log(m);
  m--;
} while (m >= 1);



//Nested Loop - Loop inside Loop

for (let i = 1; i <= 2; i++) {
  for (let q = 1; j <= 2; j++) {
      console.log(7);
  }
}


for (let i = 1; i <= 2; i++) {
  for (let j = 1; j <= 2; j++) {
    for (let k = 1; k <= 2; k++) {
      console.log(7);
    }
  }
}



let percentage = 60;

if(percentage >= 80){
    console.log("Distinction");
}else if(percentage >= 60 && percentage <= 80){
    console.log("First Division");
}else if(percentage <= 60 && percentage >= 50){
    console.log("Second Division");
}else if(percentage <= 50 && percentage >= 33){
    console.log("Third Division");
}else{
    console.log("Fail");
}


let age2 = 50;
if(age2 > 60){
    console.log("Old");
}else if(age2 > 30 && age2 <= 60){
    console.log("Young");
}else if(age2 <= 30 && age2 >= 18){
    console.log("Very Young");
}else{
    console.log("Minor");
}

// // print odd and even using if else statement

let num = 20;
if(num % 2 === 0){
    console.log("even");
}else{
    console.log("odd");
}



for (let i = 1; i <= 5; i++) {
  let val = "";
  for (let j = 1; j <= i; j++) {
    val = val + "*";
  }
  console.log(val);
}
//  *
//  **
//  ***
//  ****
//  *****

for (let i = 1; i <= 5; i++) {
  let val = "";
  for (let j = i; j <= 5; j++) {
    val = val + "*";
  }
  console.log(val);
};

//   *****
//   ****
//   ***
//   **
//   *


for (let i = 1; i <= 5; i++) {
  let val = "";
  for (let j = 1; j <= 5; j++) {
    val = val + "*";
  }
  console.log(val);
}


for (let i = 1; i <= 5; i++) {
  let val = "";
  for (let j = 1; j <= i; j++) {
    val = val + j;
  }
  console.log(val);
}
//  1
//  12
//  123
//  1234
//  12345

for (let i = 5; i >= 1; i--) {
  let val = "";
  for (let j = 1; j <= i; j++) {
    val = val + j;
  }
  console.log(val);
}
// 12345
// 1234
// 123
// 12
// 1

for (let i = 10; i >= 1; i--) {
  let val = "";
  if (i % 2 === 0) {
    for (let j = 1; j <= i; j++) {
      val = val + "$";
    }
    console.log(val);
  }
}
//  $$$$$$$$$$
//  $$$$$$$$
//  $$$$$$
//  $$$$
//  $$


// Break Condition
for (let i = 1; i <= 10; i++) {
  if (i === 6) {
    break;
  }
  console.log(i);
}

for (let i = 1; i <= 10; i++) {
  if (i === 8) {
    break;
  }
  console.log(i);
}



// Continue Condition

for (let i = 1; i <= 10; i++) {
  if (i <= 6) {
    continue;
  }
  console.log(i);
}

for (let i = 1; i <= 10; i++) {
  if (i >= 5 && i <= 8) {
    continue;
  }
  console.log(i);
}

