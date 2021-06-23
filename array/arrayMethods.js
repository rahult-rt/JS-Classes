// includes -> returns boolean value
const arr = [2, 4, 6, 6, 7, 90, 34];

//check if an variable holds an array or isArray or not, returns a boolean value
//console.log(Array.isArray(arr));

//console.log(arr.includes("34"));

//indexOf => search the array for an element, and it returs its index position, returns -1 if the element's index is not found
//console.log("=== INDEX OF ====", arr.indexOf(6));

//lastIndexOf => returns last position of the value.
//console.log("=== LAST INDEX OF ===", arr.lastIndexOf(6));

//Pop - removes the last element from an array
//const removedElement = arr.pop();
//console.log("== POP ===", removedElement);

// Unshift - Adds elements to the beginning of an array
// arr.unshift("Hi");
// let removeFromFront = arr.shift(); //remove item from begnning of array.

// ==== ***************************************************** === //
// slice(start_index,end_index) - slices an array from the start and ending index-1,return a new sliced array
//console.log(arr.slice(1, 5));

//slice(start_index) - slices an array from the given starting index, and returns all the remaining elements after that start_index
//console.log(arr.slice(3));

console.log(arr.slice(-2));

//Slice(-1) will return the last element of the array
//Slice(-2) will return last two element of the array
//slice(-3,-1) will return element from index -3 to -2
