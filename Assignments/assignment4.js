// In this challenge, a farmer is asking you to tell him how many legs can be counted among all his animals.
//The farmer breeds three species:

// chickens = 2 legs
// cows = 4 legs
// pigs = 4 legs

// The farmer has counted his animals and he gives you a
//subtotal for each species.
//You have to implement a function that returns the total number of legs of all the animals.

//The order of animals passed is animals(chickens, cows, pigs).

//Examples

//animals(2, 3, 5) ➞ 36

// animals(1, 2, 3) ➞ 22

// animals(5, 2, 8) ➞ 50

//Important** Below is function definition as we are not using the variable (const)**

// totalLegs = (chickens, cows, pigs) => {
//   if (chickens < 0 || cows < 0 || pigs < 0) {
//     return "input can't be -ve number";
//   }

//   return chickens * 2 + cows * 4 + pigs * 4;
// };

// console.log(totalLegs(5, 2, 8));

//Create a function that finds the maximum range of a triangle's third edge,
//where the side lengths are all integers.

//(side1 + side2) - 1 = maximum range of third edge.
//Answer = 17

//Functions expression as we are defining the variable
const maxRange = (side1 = 1, side2 = 1) => {
  // using "!"(not) to check if the user input is falsy value .i.e null. For undefined and empty value we have already assigned the default value
  if (!side1 || !side2) {
    return "null value";
  }
  return side1 + side2 - 1;
};

console.log(maxRange(2));
