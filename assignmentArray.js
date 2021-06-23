//Create a function that takes an array and returns the types of values (data types) in a new array.

// arrayValuesTypes([1, 2, "null", []])
// ➞ ["number", "number", "string", "object"]

// arrayValuesTypes(["214", true, false, 2, 2.15, [], null])
// ➞ ["string", "boolean", "boolean", "number", "number", "object", "object"]

// const arrayValuesTypes = (arr) => {
//   let result = [];

//   for (let i = 0; i < arr.length; i++) {
//     result.push(typeof arr[i]);
//   }
//   return result;
// };

// console.log(arrayValuesTypes([1, 2, "null", []]));

//Create a function that returns an array of all the integers between two given numbers start and end.

// if the start and end are equal return an empty array.
//Examples:-

//rangeOfNum(2, 4) ➞ [3]
//rangeOfNum(5, 9) ➞ [6, 7, 8]
//rangeOfNum(2, 11) ➞ [3, 4, 5, 6, 7, 8, 9, 10];

// const arrayOfIntegers = (start, stop) => {
//   let result = [];
//   let i = start + 1;

//   for (; i < stop; i++) {
//     result.push(i);
//   }
//   return result;
//   console.log(result);
// };
// arrayOfIntegers(2, 11);

// findDifference([ 1, 9, 25 ], [ 10, 7, 9 ]) ➞ 405

const findDifference = (arr1, arr2) => {
  let finalOutput = 0;
  let result = 0;
  let result2 = 0;
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      result2 = arr2[j] * arr2[j];
    }

    result = arr1[i] * arr1[i];

    return result2;
  }

  return result;
};

console.log(findDifference([1, 9, 25], [10, 7, 9]));

// findDifference([ 7, 6, 16 ], [ 26, 9, 26 ]) ➞ 5412
