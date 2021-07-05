// How Much is True?
// Create a function which returns the number of true values there are in an array.

// Examples
// countTrue([true, false, false, true, false]) ➞ 2

// countTrue([false, false, false, false]) ➞ 0

// countTrue([]) ➞ 0
// Notes
// Return 0 if given an empty array.
// All array items are of the type bool (true or false).

// function countTrue(arr) {
//   const result = arr.filter((ele) => {
//     return ele === true;
//   });

//   return result.length;
// }
// countTrue([true, false, false, true, false], 2);

// ************************************
// Factorial of Factorials
// Create a function that takes an integer n and returns the factorial of factorials. See below examples for a better understanding:

// Examples
// factFact(4) ➞ 288
// // 4! * 3! * 2! * 1! = 288

// factFact(5) ➞ 34560

// factFact(6) ➞ 24883200

function factFact(n) {
  let result = 1;
  let count = 1;

  for (let i = 1; i <= n; i++) {
    result = result * i;
    //console.log(i);
    count *= result;
  }
  return count;
}

factFact(4);
