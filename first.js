// // print stuff inside
// console.log("hello world");

// // datatypes (primitive) string, number, bigint, boolean, undefined, symbol, null

// console.log(844616);
// console.log(typeof true);
// console.log(typeof "snekhal gay");

// // variables (storing values)

// // const cannot be changed (is a good practice)
// const name = "manoj";
// const another_name = "snekhal";

// // let can be changed
// let person;
// person = "snekhal";
// person = "rohan";

// conditions

// const a = 12
// const b = 10

// // non zero value is true
// // 0 is false
// // null/undefined is false

// if (22){
//     console.log("a is smaller")
// } else {
//     console.log("a is bigger")
// }

// loops (repetitive tasks => for loops)
// const n = 10

// for (let i = 0; i < n; i++) {
//     console.log(i)
// }

// Array
// JSON = objects

// const a = ["Rohan", "Snekhal", 69, 45, 46];

// for (let i = 0; i < 6; i++) {
//   console.log(a[i]);
// }

// const person_details = {
//     name: "Rutujeet",
//     age: 19,
//     cartoons_liked: ["Mr_bean", "P&F"],
// }

// console.log(person_details)

// error handling

// try {
//   const a = 10;
//   a = 11;

//   throw new Error("a is constant");
// } catch (err) {
//   console.log(err);
// }

// function ye(x) {
//   return x * x;
// }
// console.log(ye(2));

// // var vs let

// function cook_maggi(m) {
//   return m / 4;
// }

const cowsay = require("cowsay");

console.log(
  cowsay.say({
    text: "Rohan is gay",
    T: "U ",
    e: "-o",
  })
);

// or cowsay.think()
