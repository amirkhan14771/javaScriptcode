// // This Are All Constructor Function

// const Animal = function (name, legs, color) {
//   this.animalName = name;
//     this.animalLegs = legs;
//     this.animalColor = color;
// };

// const tiger = new Animal("tiger", 4, "yellow");
// console.log(tiger);

// const Bird = function (name, legs, color) {
//   this.birdName = name;
//    this.birdLegs = legs;
//    this.birdColor = color;
// };

// const parrot = new Bird("parrot", 2, "green");
// console.log(parrot);

// const Student = function (name, batch, academy) {
//   this.studentName = name;
//     this.studentBatch = batch;
//     this.studentacademy = academy;
// };
// const human = new Student("Amir", "javaScript", "Wecode");
// console.log(human);

// const Account = function (name, bankName, aadharNumber, address, dob,currntBalance) {
//   this.accountHolderName = name;
//     this.bankName = bankName;
//     this.aadarNumber = aadharNumber;
//     this.address = address;
//     this.dob = dob;
//     this.currntBalance = currntBalance || 1000;
// };

// const hdfc = new Account("Amir","Hdfc",795361621637,"jaipur","05/05/2005",0)
// console.log(hdfc);

// const Animal2 = function (name, legs, color) {
//   this.animalName = name;
//     this.animalLegs = legs;
//     this.animalColor = color;
//     this.eat = function eat(){
//         console.log(`${this.animalName} Eating`);
//     };
//     this.sleep = function sleep(){
//         console.log(`${this.animalName} Sleeping`);
//     };
// };

// const dog = new Animal2("tiger", 4, "yellow");
// console.log(dog);
// dog.eat();
// dog.sleep();

// const Employe = function(name,age,employeField,company){
// this.employeName = name;
// this.employeAge = agel;
// this.employeField = employeField;
// this.employeCompany = company;
// this.officeWork = function officeWork(){
//     console.log(`${this.employeName} Preapare Regnative Project`);
// },
// this.mitting = function mitting(){
//     console.log(`${this.employeName} can take the meeting`);
// }
// };
// const Amir = new Employe("Amir",18,"Regnative","Apex");
// console.log(Amir);

// Amir.officeWork()
// Amir.mitting()


1.
// const Car = function(name,model,color){
//    this.carName = name;
//    this.carModel = model;
//    this.carColor = color;
//   //  this.city = "Ahmdabad" // Yha se change krenge to dono me add hoga
// };

// Car.prototype.city = "India";
// const hondaCar = new Car('Honda',15,'Black');
// hondaCar.city = "jaipur";// Yha se change krenge to jisme add krenge only usme hoga
// const marutiCar = new Car('Maruti',20,'White')
// const fordCar = new Car('Ford',10,'Red')
// console.log(hondaCar.city,marutiCar.city,fordCar.city);



2.
const Car = function (name, model, color) {
  this.carName = name;
  this.carModel = model;
  this.carColor = color;
};

const hondaCar = new Car("Honda", 18, "Black");
console.log(hondaCar);
// console.log(hondaCar.hasOwnProperty('carColor')); // True
// console.log(hondaCar.hasOwnProperty("carColors")); // False

console.log(Car.prototype); // Same
console.log(hondaCar.__proto__); // Same
console.log(hondaCar.__proto__ === Car.prototype); // Equal
console.log(hondaCar.__proto__.__proto__);

console.log((hondaCar.__proto__.__proto__.pincode = 302012));
console.log(hondaCar.pincode);
console.log(hondaCar);

const fordCar = new Car("Ford", 39, "Black");
console.log(fordCar.pincode);
