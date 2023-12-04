// Multiple API ko call krne ke liye function ka use krte h and .then ke jagah await ka use krte he await lgane
//  se jb tk first api call nhi hogi second nhi call ho skti h


async function test() {
  const india = await fetch("https://restcountries.com/v3.1/name/india");
  const indiaData = await india.json();
  console.log(indiaData);

  const japan = await fetch("https://restcountries.com/v3.1/name/japan");
  const japanData = await japan.json();
  console.log(japanData);

  return [india, japan];
}

const reciept = test();
reciept.then(
  (value) => {
    console.log(value);
  },
  (error) => {
    console.log(error);
  }
);

let i = 10;
try {
  console.log(i.toLoweCase());
  throw new Error("Custom Error For Training");
} catch (error) {
  console.log(error);
} finally {
  console.log("Thank you for our application");
}
console.log("Amir");
