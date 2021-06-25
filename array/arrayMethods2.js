// forEach()

const arr = [23, 67, 89, 41, 58, 25];
// firstParameter - current element of the array
//secondParameter - Index of the current element
//thirdParameter - orignal array which is being iterated
// arr.forEach((value, index, arr) => {
//   console.log("=== FORWACH  ===", value, "=== INDEX ===", index);
//   console.log("=== ARR ===", arr);
// });
let result = 0;
arr.forEach((value, index) => {
  if (index === 3) return;

  console.log(value);
});
console.log(result);

//every()
