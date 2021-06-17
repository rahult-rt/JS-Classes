// Items in my cart
// grocery = 5%
// electronics = 7%
// study = 6%

// function to put discount

// const addedItemsInCart = (grocery, electronics, study) => {
//   const itemTotal = grocery + electronics + study;
//   const finalPrice = discountCalc(itemTotal, 18);
//   //
//   return finalPrice;
// };

// const discountCalc = (price, discount) => {
//   return price * (1 - discount / 100) + 1;
// };

// const total = addedItemsInCart(100, 25, 50);
// console.log(total);

//Area of ractange, triangel, square

const areaOfTriangle = (height, base) => {
  return (height * base) / 2;
};

const areaOfSquare = (side) => {
  return Math.pow(side, 2);
};

const areaOfRectangle = (len, width) => {
  return len * width;
};

const totalArea = () => {
  const finalArea =
    areaOfRectangle(2, 500) + areaOfSquare(500) + areaOfTriangle(2, 7000);

  if (finalArea < 500) return "less than 500";

  return "more than 500";
};

console.log(totalArea());
