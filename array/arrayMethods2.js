// forEach()

const arr = [23, 67, 89, 41, 58, 25];
// firstParameter - current element of the array
//secondParameter - Index of the current element
//thirdParameter - orignal array which is being iterated
// arr.forEach((value, index, arr) => {
//   console.log("=== FORWACH  ===", value, "=== INDEX ===", index);
//   console.log("=== ARR ===", arr);
// });

//forEach()
// let result = 0;
// arr.forEach((value, index) => {
//   if (index === 3) return;

//   console.log(value);
// });
// console.log(result);

//every()
// returns boolean and if each item in array passes the test case, then it returns true, else returns false
// const evenArr = [2, 4, 6, 8, 10, ""];
// const result = evenArr.every((num) => {
//   return num % 2 === 0;
// });
// console.log(result);

// map()

const evenArr = [2, 3, 4, 5, 6, "9", "20", 8]; //[27,60]

//[4,8,12,16,20]
// let newArr = [];
// evenArr.forEach((e) => newArr.push(e * 2));
// console.log(newArr);

// const result = evenArr.map((num) => num * 2);

// console.log(result);

// const result = evenArr.map((num) => {
//   // if (num % 2 === 0) return num * 2;

//   // return num;

//   return num % 2 === 0 ? num * 2 : num;
// });

// console.log(result);

//filter()
// const result = evenArr.filter((num) => {
//   return num % 2 === 0;
// });
// console.log(result);

// const result = evenArr.filter((num) => {
//   return typeof num === "string";
// });
// console.log(result);

const result = evenArr
  .filter((num) => {
    if (typeof num === "string") return num;
  })
  .map((val) => Number(val * 3));
console.log(result);
