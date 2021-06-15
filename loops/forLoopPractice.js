//https://avantutor.com/blog/10-simple-javascript-for-loop-exercises/

// Exercise 1)
// Get the sum of two arrays…actually the sum of all their elements.
// P.S. Each array includes only integer numbers. Output is a number too.

// let arr_1 = [3, 5, 22, 5, 7, 2, 45, 75, 89, 21, 2]; // --> 276
// let arr_2 = [9, 2, 42, 55, 71, 22, 4, 5, 90, 25, 26]; // --> 351
// // Example output:
// // 276 + 351 = 627

// Solution

// let result_1 = 0;
// for (let i = 0; i < arr_1.length; i++) {
//   result_1 += arr_1[i];
// }

// let result_2 = 0;
// for (let i = 0; i < arr_1.length; i++) {
//   result_2 += arr_2[i];
// }
// console.log(`${result_1} + ${result_2} = ${result_1 + result_2}`);

//Exercise2: Using a for loop print all even numbers up to and including n. Don’t include 0.

// let n1 = 22;
// // Example output:
// // 2 4 6 8 10 12 14 16 18 20 22 OR each item on a new line

// Exercise2: Solution

// let n1 = 22;

// for (let i = 1; i <= n1; i++) {
//   if (i % 2 === 0) {
//     console.log(i);
//   }
// }

// Exercise 3)
// Using a for loop output the elements in reverse order

// let arr = [43, "what", 9, true, "cannot", false, "be", 3, true];
// // Example output:
// // true 3.5  be  false cannot  true 9 what 43 OR each item on a new line

// Exercise 3) - Solution

// let arr = [43, "what", 9, true, "cannot", false, "be", 3, true];

// console.log(arr.reverse().join(" "));

// for (let i = arr.length - 1; i >= 0; --i) {
//   console.log(`${arr[i]}`);
// }

// Exercise 4)
// Given two arrays of integers. Add up each element in the same position and
// create a new array containing the sum of each pair. Assume both arrays are of the same length.

// let arr_3   = [4, 6, 7];
// let arr_4    = [8, 1, 9];
// // Example output:
// // [12, 7, 16]

// Exercise 4): solution --- to be asked*********

// let arr_3 = [4, 6, 7];
// let arr_4 = [8, 1, 9];

// let newArr = [];

// for (let i = 0; i < arr_3.length; i++) {
//   const sum = arr_3[i] + arr_4[i];
//   newArr.push(sum);
// }
// console.log(newArr);

// Exercise 5)
// Given a string change the every second letter to an uppercase ‘Z’. Assume
// there are no space.

// let str1 = "javascript";
// Example output:
// jZvZsZrZpZ OR each letter on a new line
// HINT: You can use  if((i+1) % 2 == 0) to check for even indexes
let str1 = "javascript";
let result = 0;
for (let i = 0; i <= str1.length - 1; i++) {
  if (i % 2 === 0) {
    result = str1.replace(str1[i], "Z");
  }
  console.log(result[i]);
}
