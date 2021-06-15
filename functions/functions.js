// const result = 0;
// finalPrice = () => {
//   for (let i = 0; i <= itemPrices.length; i++) {
//     return (result += i);
//   }
//   console.log(result);
// };

const cart = (items) => {
  let cartValue = 0;
  console.log(items);
  for (let i = 0; i < items.length; i++) cartValue += items[i];

  return cartValue;
};

const itemPrices = [500, 300, 45, 57, 10];
//cart(itemPrices);

console.log(cart(itemPrices));
