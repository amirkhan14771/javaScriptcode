// Q.1.Movies object array.moviename, actorname, releaseyear, watched, producer

// 1. Kaun kaun si movies watch krli hai unka nam btao
// 2. Tumara favourite actor kaun hai
// 3. kaun kaun si movies particular year me launch hui
// 4. Movies objects ko ascending order me sort krna hai based on year
// 5. total tumne kitni movies dekhi hai unka count btana hai

// let movies = [
//   {
//     movieName: "pushpa",
//     actorName: "alluArjun",
//     releaseYear: 2022,
//     watched: false,
//     producer: "rajamurli",
//   },

//   {
//     movieName: "gadar",
//     actorName: "sanydeol",
//     releaseYear: 2023,
//     watched: false,
//     producer: "pritkumar",
//   },

//   {
//     movieName: "p.k",
//     actorName: "amirkhan",
//     releaseYear: 2018,
//     watched: true,
//     producer: "shreekant",
//   },
// ];

// let watchedMovies = movies.filter((movie) => movie.watched);
// console.log(watchedMovies.map((movie) => movie.movieName));

// let favoriteActor = "amirkhan";
// console.log(favoriteActor);

// let targetmovie = 2022;
// let particularMovies = movies.filter(
//   (movie) => movie.releaseYear === targetmovie
// );
// console.log(
//   targetmovie,
//   particularMovies.map((movie) => movie.movieName)
// );

// let accending = movies.sort((a, b) => a.releaseYear - b.releaseYear);
// console.log(accending.map((movie) => movie.movieName));

// let totalseen = movies.filter((movie) => movie.watched);
// console.log(totalseen.map((movie) => movie.movieName));

// Q.2 DOM
//  inputbox  number enter
// Submit

// Number odd / Even  alert / html

// Q.3 DOM
// 5 Subjects ke number puchne hain
//  fir submit button pr click krna hai
//  click krne pr ye info print krvani hai
//  Total Marks 500
//  Obtained marks 400
//  Percentage 80 %
//     Grade: First Grade

// Q.4 Game DOM
//  Colorful watch
// [Date] / [Month] / [Year][HH]: [MM]: [S]: [MS]

// Q.5 Array numbers ka.Is Array me jitne numbers 100 se bde hain unhe filter krna hai
//  then unme se sbse max number and sbse min number nikalne hain
//  Dono min and max ko add krna hai and finally number ko print krva dena hai

// Q.6 Function bnana hai.Function ke parameter pass krna hai Symbol
//     Symbol +, -, *, /
//     Jo symbol hai uska function return krna hai return sum()
//     2 numbers ke lie
//     returned function ko call krna hai

// sum(10,20)

// Q.7. 100 se 200 ke bich me random number generate krna hai

// const min = 100;
// const max = 200;
// const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

// console.log(randomNumber);

// Q.8.Ek date ka object bnana hai.Us dat ke object ki date tumare birthday valid date kr deni hai
// 2001   1 July

// Q.9 Ek Map bnana hai key, value
//  Map se vo sare key - value filter krne hai jisme value 100 se bdi ho and key 50 se bdi ho

// const mymap = new Map();
// mymap.set(20, 10);
// mymap.set(34, 450);
// mymap.set(221, 340);
// mymap.set(56, 20);
// mymap.set(90, 300);
// mymap.set(90, 180);
// let ans = new Map();
// mymap.forEach((value, key) => {
//   if (value > 100 && key > 50) {
//     ans.set(key, value);
//   }
// });
// console.log(ans);
// Q.10.Ek Passport application form bnana hai using DOM
//  Error message HTML me hi dhikana hai

// Q.11 5 Sound ki audio download. 5 button bnane hai.Jis b button press kroge vhi song play hona chahiye

// Q.12 Switch.Country names.Continent India Asia, Pak Asia, China Asia, Africa.Not valid country

// const countryName = prompt("Enter your Country Name");
// switch (countryName) {
//   case "india":
//     console.log("india is Asian Contry");
//     break;
//   case "france":
//     console.log("France is Europian Country");
//     break;
//   case "pak":
//     console.log("Pak is Asian Country");
//     break;
//   default:
//     console.log("No Valid Country");
// }

// Q.13 Students object ka array bnana hai.
//  [
//     {
//         name: "Sajid"
//    mobile: "934543543545",
//         party: false
//     }
// ]
//  Total 15

//  Random generate  1 - 15 8
//  Index se student pick false -> true.Party Sajid dega
//  Index se student pick false -> already true.Sajid Party de chuka hai

//  Submit button in html.click pr function

//  Q.14 String-- - Helo my Name is Wecode Academy
//       Small -> Captial
//       Capital -> Small
//       Word ulta kr dena
//       ymedacA edoceW
//       YMEDACa EDOCEw

// let name = "Hello my Name is Wecode Academy";
// let capital = name.toUpperCase();
// console.log(capital);

// let small = capital.toLowerCase();
// console.log(small);

// let reverce = small.split("").reverse().join();
// console.log(reverce);

// Q.15 First Class function
//     High order function
//     callback function
//     ko theory me explain krna hai
