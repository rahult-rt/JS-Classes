const check = (a, b, callback) => {
  const sum = a + b;
  callback(sum);
};

// check(6,10, (a) => {
//   console.log("== Line 7 ===",a);
// });

// Callback Hell
check(6, 10, (result) => {
//   console.log("== Line 7 ===", result);

  check(result, 10, (data) => {
    // console.log("== Line 14 ===", data);

    check(result, data, (answer) => {
    //   console.log("===line#17===", answer);

    });

    console.log('==outside==',data);
  });
});
