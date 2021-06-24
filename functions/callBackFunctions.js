// const userName = (name) => {
//   return `User name is ${name}`;
// };

// const displayProfile = (callback) => {
//   const name = "George";
//   console.log(callback(name));
// };

// displayProfile(userName);

const sumCallback = (sum) => {
  return `The sum of two num is ${sum}`;
};

const addNum = (num, num2, callback) => {
  console.log(callback(num + num2));
};

addNum(5, 10, sumCallback);
