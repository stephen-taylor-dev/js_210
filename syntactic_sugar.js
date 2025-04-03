// function foo(bar, qux, baz) {
//   return {
//     bar: bar,
//     qux: qux,
//     baz: baz,
//   };
// }

const { setDefaultOptions } = require("readline-sync");

// function foo() {
//   return {
//     bar: function() {
//       console.log("bar");
//     },
//     qux: function(arg1) {
//       console.log("qux");
//       console.log(arg1);
//     },
//     baz: function(arg1, arg2) {
//       console.log("baz");
//       console.log(arg1);
//       console.log(arg2);
//     },
//   };
// }

// let object = foo(1, 2, 3);

// let baz = object.baz;
// let qux = object.qux;
// let bar = object.bar;


// function foo(arr) {
//   return [
//     arr[2],
//     5,
//     arr[0],
//   ];
// }

// let array = [1, 2, 3];
// let result = foo(array);

// let bar = result[0];
// let qux = result[1];
// let baz = result[2];

// function product(num1, num2, num3) {
//   return num1 * num2 * num3;
// }

// let array = [2, 3, 5];
// let result = product(array[0], array[1], array[2]);


// function product() {
//   let numbers = Array.prototype.slice.call(arguments);
//   return numbers.reduce((total, number) => total * number);
// }

// let result = product(2, 3, 4, 5);
// console.log(result);

// const {foo, ...rest} = { foo: 42, bar: 3.1415, qux: "abc" };
// console.log(foo);         // 42
// console.log(rest);        // { bar: 3.1415, qux: 'abc' }

// const obj = {
//   first: "I am the first",
//   second: "I am the second",
//   third: [1, 2, 3],
//   rest: { a: 'a', b: 'b' },
// };

// const first = obj.first;
// const second = obj.second;
// const rest = {third: obj.third, rest: obj.rest};

// console.log(first);
// console.log(second);
// console.log(rest);
// const { first, second, ...rest } = obj;

// function qux() {
//   let animalType = "cat";
//   let age = 9;
//   let colors = ["black", "white"];
//   return {type: animalType,
//           age,
//           colors,
//   };
// }

// let { type, age, colors } = qux();
// console.log(type);    // cat
// console.log(age);     // 9
// console.log(colors);  // [ 'black', 'white' ]

function arrFun([ first, [...middle], last ]) {
  return {
    first,
    last,
    middle,
  };
}

let arr = [1,2,3,4,5];
console.log(arrFun(...arr));