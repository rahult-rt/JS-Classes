// const car = {
//     model: "hundai",
//  make:2020,
//  num1: function (){
//      return 20
//  },

//  num2: function () {
//      return 21
//  },

//  result: function () {
// return this.num1() + this.num2()
//  }

// }

// console.log(car.result());



// Object.hasOwnProperty()

const car = {
    model: "Hundai",
    make:2020,
    colour: "red",
    tire:{
        wheel:4
    }
}

// console.log(car.hasOwnProperty("model")); 
// console.log(car.tire.hasOwnProperty("wheel"));

//Object.keys()

// console.log(Object.keys(car));

// {
//     0: "Hundai",
//     1:2020,
//     2: "red",
//     3:{
//         wheel:4
//     }
// }

// const objectKeys = Object.keys(car);
// let newObj = {}
// for (let i = 0;i<objectKeys.length;i++){
//     //newObj[0] = car["model"]
//     newObj[i]= car[objectKeys[i]] 
// }
// console.log(newObj);

// objectKeys.forEach((ele,i)=>{
// newObj[i] = car[ele]
// })

// console.log(newObj);

//Object.values()

// console.log(Object.values(car)); 

// //Object.entries()

// console.log(Object.entries(car)); 

// Object.seal() - this property won't allow to add new property, however it will allow to change the existing property.
// car["sold"] = "yes"
// Object.seal(car)

// car["price"] = 25000 //adding property
// car ["make"] = 2021// changing existing property

// console.log(car);

//Object.freeze()
//this property won't allow to change or add property.
Object.freeze(car)

car["price"] = 25000 //adding property
car ["make"] = 2021// changing existing property

console.log(car);