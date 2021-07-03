arr = [1, 2, 3, 5, 8];
// result = 0;
// arr.forEach((ele) => {
//   result += ele;
// });

//string,number,array,object

// const check = arr.reduce((acc, currentValue) => {
//   console.log("== ACC ==", acc);
//   console.log("== CURRENT ==", currentValue);
//   acc += currentValue;
//   console.log("=== AFTERR ADD ==", acc);
//   return acc;
// }, 0);

// console.log(check);

const str = "hello"; //['h','e']

const newStr = str.split("");

//['h1','w1']
const result = newStr.reduce((acc, currentValue) => {
  console.log(acc);
  acc.push((currentValue += 1));
  return acc;
}, []);
console.log(result);

//findIndex()
const strArr = ["hi", "hello", "bye", "bravo", "riddle"];

const index = strArr.findIndex((currentValue) => currentValue === "Hi");
console.log(index);
