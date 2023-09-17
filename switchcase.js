let  weekDay2 = 8;
switch (weekDay2) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tue");
    break;
  case 3:
    console.log("Wed");
    break;
  case 4:
    console.log("Thurs");
    break;
  case 5:
    console.log("Fri");
    break;
  case 6:
    console.log("Sat");
    break;
  case 7:
    console.log("Sun");
    break;
  default:
    console.log("Invalid value");
}

let num5 = 5;
switch (num5) {
  default:
    console.log("Other Number");
  case 1:
    console.log("One");
    break;
  case 2:
    console.log("Two");
    break;
  case 3:
    console.log("Three");
    break;
}

 let num6 = false;
switch (num6) {
  case 1 === 1:
    console.log("One");
    break;
  case 10 < 5:
    console.log("Two");
    break;
  default:
    console.log("Three");
    break;
}

let num7 = 1;
switch (num7) {
  case true:
    console.log("One");
    break;
  case 10 < 5:
    console.log("Two");
    break;
  default:
    console.log("Three");
    break;
}


let num8 = true;
switch (num8) {
  case true:
    console.log("One");
    break;
  case true:
    console.log("Two");
    break;
  default:
    console.log("Three");
    break;
}


