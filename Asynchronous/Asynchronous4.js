const promise = fetch("https://restcountries.com/v3.1/name/india");
promise.then((response) => {
  return response.json();
})
.then((data)=>{
    console.log(data);
    return new promise((resolve,reject)=>{
        resolve(10)
    })
})
.then((data)=>{
    console.log(data);
})

.catch((error)=>{
    console.log(error);
})

const promise = fetch("https://restcountries.com/v3.1/name/japan");
promise
  .then((response) => {
    throw new Error("a new error");
    console.log("Recieved Api Response");
    return response.json();
  })
  .then((data) => {
    console.log("Recieved Api Data");
    console.log(data);
    return new Promise((resolve) => {
      resolve(10);
    });
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log("My Error", error);
  });

promise.then(
    (value)=>{
        value.json().then((data)=>{
        console.log(data);

        })
    }
)

fetch("https://restcountries.com/v3.1/name/japan");
fetch("https://restcountries.com/v3.1/name/india");
fetch("https://restcountries.com/v3.1/name/china");

async function test(){
await fetch("https://restcountries.com/v3.1/name/japan");
await fetch("https://restcountries.com/v3.1/name/india");
await fetch("https://restcountries.com/v3.1/name/china");

}
test()