const car = {
  colour: "red",
  make: 2021,
  milage: 20,
  345: true,
};

//JSON - Javascript Object Notation
// console.log(car.colour);
// console.log(car["colour"]);

// console.log(car["345"]);
// //a[0]
// //a[0] = 4

// car.colour = "White";

// car = "newCar";
// console.log(car);

const newCar = {};
const person = new Object();
console.log(person);
// newCar.model = 2015;
// newCar["model of"] = 2019;
// console.log(newCar);
const newArr = [];
newArr[0] = car;
console.log(newArr);

newArr.forEach((ele) => {
  console.log(ele.colour);
});
