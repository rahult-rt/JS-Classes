const car = {
  colour: "red",
  make: 2021,
  milage: 20,
  345: true,
  functinality() {
    return 1 + 2;
  },
};

const controller = {
  request: function (req, res) {},
};

console.log(controller.request(req, res));
