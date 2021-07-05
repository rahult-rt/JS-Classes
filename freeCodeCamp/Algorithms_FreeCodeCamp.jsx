// You are given two arrays and an index.

// Copy each element of the first array into the second array, in order.

// Begin inserting elements at index n of the second array.

// Return the resulting array. The input arrays should remain the same after the function runs.

function frankenSplice(arr1, arr2, n) {
  const removedEle = arr2.slice();
  removedEle.splice(n, 0, ...arr1);
  console.log(removedEle);
  return removedEle;
}

frankenSplice([1, 2, 3], [4, 5, 6], 1);

//Where do I BelongPassed
// Return the lowest index at which a value (second argument) should be inserted into an array (first argument) once it has been sorted. The returned value should be a number.

// For example, getIndexToIns([1,2,3,4], 1.5) should return 1 because it is greater than 1 (index 0), but less than 2 (index 1).

// Likewise, getIndexToIns([20,3,5], 19) should return 2 because once the array has been sorted it will look like [3,5,20] and 19 is less than 20 (index 2) and greater than 5 (index 1).

function getIndexToIns(arr, num) {
  const newArr = arr.filter((ele) => ele <= num).sort((a, b) => a - b);

  newArr.push(num);

  return newArr.indexOf(num);
}

getIndexToIns([40, 60], 50);

// Mutations
// Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.

// For example, ["hello", "Hello"], should return true because all of the letters in the second string are present in the first, ignoring case.

// The arguments ["hello", "hey"] should return false because the string hello does not contain a y.

// Lastly, ["Alien", "line"], should return true because all of the letters in line are present in Alien.

function mutation(arr) {
  return arr[1]
    .toLowerCase()
    .split("")
    .every((ele) => {
      return arr[0].toLowerCase().indexOf(ele) !== -1;
    });
}

mutation(["hello", "hey"]);

// Chunky Monkey
// Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.

function chunkArrayInGroups(arr, size) {
  let newArr = [];
  while (arr.length > 0) {
    newArr.push(arr.splice(0, size));
  }

  return newArr;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);
