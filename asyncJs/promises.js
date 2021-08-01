// Promises
// 1. A promise can wither be fullfilled or Rejected;
// 2. resolution and rejection of the promise cannot happen simultaneously
// 3. When a promise gets resolved/fulfilled you use the then() to get the resolved data.
// 4. When a promise gets rejected/not-fulfilled you use the catch() to get the rejected data.

// ======== PROMISE ============== //

// const verify = new Promise((resolve, reject) => {
//     reject("Error received");
//   resolve("Hello World");
// });

// verify
//   .then((data) => {
//     console.log("== Line 13 ==", data);
//   })
//   .catch((error) => {
//     console.log("== Line 15 ==", error);
//   });

// ============================== //

// ======== PROMISES USING FUNCTIONS ========== //

const newFunc = (num) => {
  const verify = new Promise((resolve, reject) => {
    if (num % 2 === 0) resolve(`${num} is even.`);
    else reject(`${num} is odd.`);
  });
  return verify;
};


setTimeout(() => {
    console.log("Testing 3");
  }, 0);

newFunc(10)
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });

  newFunc(15)
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });

  

console.log(" Testing 1");
console.log("Testing 2");


console.log("Testing 4");
