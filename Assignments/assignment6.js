// Your task is to arrange all the even elements at the start followed by the odd numbers

const arr1 = [1, 6, 9, 3, 10, 5, 12, 2];

let result =[]

for (let i=0;i<arr1.length;i++){
    
    if(arr1[i]%2!==0) result.push(arr1[i])
    if(arr1[i]%2===0) result.unshift(arr1[i])

}

console.log(result);


// Move All the zeros in the given array at the end of the array;

const moveZeros = [false, 1, 0, 1, 2, 0, 1, 3, "a"];

let result =[]

for (let i=0;i<moveZeros.length;i++){
    if(moveZeros[i]===0) result.push(moveZeros[i])
    if(moveZeros[i]!==0) result.unshift(moveZeros[i])
}

console.log(result);
