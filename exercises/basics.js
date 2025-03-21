// //  Building Strings
// const paragraph = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sed \
//                 ligula at risus vulputate faucibus. Aliquam venenatis nibh ut justo dignissim \
//                 dignissim. Proin dictum purus mollis diam auctor sollicitudin. Ut in bibendum \
//                 ligula. Suspendisse quam ante, dictum aliquam tristique id, porttitor pulvinar \
//                 diam. Maecenas blandit aliquet ipsum. Integer vitae sapien sed nulla rutrum \
//                 hendrerit ac a urna. Interdum et malesuada fames ac ante ipsum primis in faucibus.';

// console.log(paragraph);


// // Conditionals Part 1

// const myBoolean = true;
// const myString = 'hello';
// const myArray = [];
// const myOtherString = '';

// if (myBoolean) {
//   console.log('Hello'); // Hello
// }

// if (!myString) {
//   console.log('World'); // nothing
// }

// if (!!myArray) {
//   console.log('World'); // World
// }

// if (myOtherString || myArray) {
//   console.log('!');  // !
// }

// // Conditionals part 2
// if (condition1) {

//   if (condition2) {
//     // 1
//   } else {
//     // 2
//   }
// } else {
//   // 3
//   if (condition4) {
//     // 4
//   if (condition5) {
//     // 5
//    } 
//     // 
//   }
//   //
// }

// String Assignment

// const myName = 'Bob';
// const saveName = myName;
// myName.toUpperCase();
// console.log(myName, saveName);

// // Arithmetic Integer
// let input = require('readline-sync');
// let num1 = Number(input.question("==> Enter the first number:\n"));
// let num2 = Number(input.question("==> Enter the second number:\n"));

// console.log(`==> ${num1} + ${num2} = ${num1 + num2}`);
// console.log(`==> ${num1} - ${num2} = ${num1 - num2}`);
// console.log(`==> ${num1} * ${num2} = ${num1 * num2}`);
// console.log(`==> ${num1} / ${num2} = ${Math.floor(num1 / num2)}`);
// console.log(`==> ${num1} % ${num2} = ${num1 % num2}`);
// console.log(`==> ${num1} ** ${num2} = ${num1 ** num2}`);

let input = require('readline-sync');
let phrase = input.question("Please enter a phrase: ");
let num = phrase.replace(/[^a-z]/gi, '');
console.log(num);
console.log(`There are ${phrase.length} characters in "${phrase}".`);


