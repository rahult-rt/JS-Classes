//fuinction expression as we will be assignin to variable.

// to handle undefined,null,empty

const sum = (num1, num2 = 2) => {
  //   if (!num1) {
  //     if (!num2) {
  //       num2 = 1;
  //     }
  //     num1 = 1;
  //   }
  console.log("num1", num1);
  console.log("num2", num2);
  return num1 + num2;
};

console.log(sum(1, undefined, 4));

//Create a function that finds the maximum range of a triangle's third edge,
//where the side lengths are all integers.

//(side1 + side2) - 1 = maximum range of third edge.
//Answer = 17
