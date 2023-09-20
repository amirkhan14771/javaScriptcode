// const arr = [1, 2, 3];
// Array.prototype.sajid = () => {
//   console.log("Hello Sajid");
// };
// console.log(arr);
// arr.sajid()

// ===============================================================================================================

// This is Constructor functhion Will be some work
// const Animal = function (name, color) {
//   this.animalName = name;
//   this.animalColor = color;
//   this.printDetail = function () {
//     console.log(this.name, this.color);
//   };
// };

// // This is Class Funtion Will be same work
// class person {
//   constructor(name, color) {
//     this.personName = name;
//     this.personColor = color;
//     this.printDetail = function () {
//       console.log(this.name, this.color);
//     };
//   }
// }

// const Cat = new Animal("Car", "Brown");
// const Amir = new person("Amir", "Brown");
// console.log(Cat, Amir);

// ==============================================================================================================

// class Person {
//   constructor(name, color) {
//     this.personName = name;
//     this.personColor = color;
//     this.printDetail = function () {
//       console.log(this.name, this.color);
//     };
//   };
//   test(){
//     console.log("Hello");
//   }
// };

// const Amir = new Person("Amir", "Brown");
// console.log(Amir);
// Amir.test()

// class Employe {
//   constructor(name, companay, address) {
//     this.employeName = name;
//     this.employeCompany = companay;
//     this.employeAddress = address;
//     this.test = () => {
//       console.log("Wecode Academy");
//     };
//   }
//   employeproject() {
//     console.log("project Prepare");
//   }
//   employechating() {
//     console.log("Chating Client");
//   }
// }
// const ashraf = new Employe("Ashraf", "Wecode IT-Company", "Joshimarg");
// console.log(ashraf);

// ashraf.test();
// ashraf.employeproject();
// ashraf.employechating();

// class Car {
//   #_name;
//   constructor(name, color) {
//     this.#_name = name + "Car";
//     this.color = color;
//   }
//   set name(carName) {
//     this.#_name = carName + "Car";
//   }
//   get name() {
//     return this.#_name + " petrol";
//   }
//   static test() {
//     console.log("Hello"); // static function class se belong krta h na ki object se
//   }
// }
// const ford = new Car("Ford", "White");
// console.log(ford);
// ford.name = "Toyoto";
// console.log(ford);
// console.log(ford.name);
// console.log(ford._name);//undefined
// console.log(ford.#name);// Error

// ford.test()// Error
// Car.test(); // static function class se belong krta h na ki object se


// class Company {
// #_name;
//   constructor(name, address) {
//     this.#_name = name + "Academy";
//     this.company = address;
//   }
//   set name(companayName) {
//     this.#_name = companayName + " Academy";
//   }
//   get name(){
//     return this.#_name + " Packeg"
//   }
//   static test(){
//     console.log("Hello");
//   }
// }

// const myCompany = new Company("Wecode", "JoshiMarg");
// console.log(myCompany);
// myCompany.name = "Pixel";
// console.log(myCompany);
// console.log(myCompany.name);

// console.log(myCompany._name);
// // myCompany.test() // Object se call nhi hoga
// Company.test()// Class se call hoga

