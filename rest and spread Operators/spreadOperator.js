// Spread operator
// the variable should be present/defined

const check = [1,2,3,4,5];

const test = [...check]

const newArr =check.slice()

//newArr.push(...check)

// console.log(check.slice())
// console.log(test)

//************************************ */

const newObj = {
    login: "1",
    id: 1825798,
    node_id: "MDQ6VXNlcjE4MjU3OTg=",
    avatar_url: "https://avatars.githubusercontent.com/u/1825798?v=4",
    gravatar_id: "",
    url: "https://api.github.com/users/1"}

    const newObject = {...newObj}

    const newArray = [...newObj] // can't destructure the object inside an array.
    console.log(newArray);

    