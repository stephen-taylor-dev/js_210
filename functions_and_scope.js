// function average(numbers) {
//   return sum(numbers) / numbers.length;
// }

// function sum(numbers) {
//   let total = 0;
//   for (let index = 0; index < numbers.length; index += 1) {
//     total += numbers[index];
//   }
//   return total;
// }

// console.log(average([1, 2, 3, 4, 5]));

// let temperatures = [22, 38, 55, 111, 76];
// console.log(average(temperatures));

// Global Scope
// let name = 'Julian';

// function greet(cow) {
//   // local scope or Function scope
//   let myName = name;
//   console.log(myName);
// }

// greet();   // => Julian

// let hello = function foo() {
//   foo();
//   console.log(typeof foo);   // function
// };

// hello();

// foo();                       // Uncaught ReferenceError: foo is not defined


function foo() {
  if (false) {
    let a = 1;
  }

  console.log(a); // undefined
}

foo();