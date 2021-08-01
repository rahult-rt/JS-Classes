// console.log(num);
// // console.log(test);

// var num = 10;
// const test = "helow"

// let right = true
// function check(n){
//     var m = n*2
//     const value = m
//     return value
// }

// var square1 = check(4);

// console.log(square1);

// var square2 = check(num);

// console.log(square2);


// setTimeout(() => {
//   console.log("Inside First Timeout");
//   setTimeout(() => {
//     console.log("Iside Second Timeout");
//     setTimeout(() => {
//       console.log("inside third timeout");
//     }, 2000);
//   }, 3000);
// }, 4000);
// console.log("Test 3");

const newFunc = (num) => {
  const verify = new Promise((resolve, reject) => {
    if (num % 2 === 0) resolve(`${num} is even.`);
    else reject(`${num} is odd.`);
  });
  return verify;
};



newFunc(10)
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });

  setTimeout(()=>{
    console.log("Testing 3");
  },3000)
  
console.log(" Testing 1");
console.log("Testing 2");

console.log("Testing 4");