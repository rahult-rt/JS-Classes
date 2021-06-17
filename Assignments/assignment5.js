//Function practice

//Create a function that takes the age and return the age in days.
// Create a function that takes length and width and finds the perimeter of a rectangle.

const ageInDays = (age) => {
  return age * 365;
};

console.log(ageInDays(35));

const perimeterOfRectangle = (len, width) => {
  return 2 * (len + width);
};

console.log(perimeterOfRectangle(5, 6));
