console.log(this);

const car = {
    colour: "Red",
    make:2015,
    test:function(){
return this.change() % 2===0
    },
    change:function(){
        return 2
    }
}

console.log(car.test());