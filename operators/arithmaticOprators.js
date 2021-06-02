// BODMAS
//PEDMAS
// () ** / % * + -

// var num1 = 31;
// var num2 = 20;

// var result = 2 ** 3
// console.log('== RESULT === ${30*5}')

var listingPrice = 27.88;
var sellingPrice = 23.69;

var savings = listingPrice - sellingPrice;
console.log(Math.floor(savings));

// DISCOUNT = (L - S)/L * 100;
var discount = (savings / listingPrice) * 100;
console.log(`${Math.round(discount)}%`);

console.log(Math.pow(2, 3));
