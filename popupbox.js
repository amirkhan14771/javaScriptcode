let a = alert("Window")
console.log(a);

let b = prompt("What is your name")
console.log(b);



let marks = Number(prompt("What is your 12th marks"));

if(marks >= 80){
    console.log("Distinction");
}
else if(marks <= 80 && marks >= 60){
    console.log("First Division");
}
else if(marks <= 60 && marks >= 40){
    console.log("Second Division");
}
else if(marks <= 40 && marks >= 35){
    console.log("Third Divusion");
}
else{
    console.log("Fail");
}

let age = Number(prompt("What is your Age"));
if (age >= 60) {
  console.log("Old");
} else if (age < 60 && age >= 30) {
  console.log("Young");
} else if (age < 30 && age >= 18) {
  console.log("Very Young");
} else {
  console.log("Minor");
}


let c = confirm("Your name is Amir")
console.log(c);


let answer = confirm("Do you want to study Nodejs");
if (answer) {
  console.log("Yes");
} else {
  console.log("No");
}