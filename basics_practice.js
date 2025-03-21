// let x = '13';
// let y = 9;

// console.log(x + y);
// console.log(parseInt(x, 10) + y);

// let x = '13';
// let y = 9;

// console.log(x * y);

// let npa = 212;
// let nxx = 555;
// let num = 1212;

// console.log(String(npa) + String(nxx) + String(num));

// let bool = true;
// console.log(bool.toString());
// let arr = [1, 2, 3];
// console.log(arr.toString());

// let apples = 3;
// let bananas = '3';

// bananas = 3;
// let areEqual = apples === bananas;
// // console.log(areEqual);

// apples = 3;
// bananas = undefined;
// let eitherOr = apples || bananas;

// // console.log(eitherOr);

// bananas = 1;
// eitherOr = 1;
// console.log(eitherOr);
// eitherOr = bananas || apples;
// console.log(eitherOr);


// if (apples === bananas) {
//   console.log("eqaul strict type");
// } else {
//   if (apples == bananas) {
//     console.log("Same number but different types");
//   } else {
//     console.log("Not strictly equal");
//   }
// }

// let lastName = "Taylor";
// let familyMessage = lastName === "Taylor" ? "You're part of the famly!" : "You're not family."
// console.log(familyMessage);

// for (let index = 0; ; index += 1) {
//   console.log(index);
//   if (index <= 10) {
//     break;
//   }
// }
// for (let index = 0; index <= 10; index++) {
//   console.log(index);
// }

// Equivalent hoisted code
// bar is now above foo
// bar();              // logs undefined
// let foo = 'hello';

// function bar() {
//   console.log(foo);
// }

// let a = 'outer';

// function testScope() {
//   let a = 'inner';
//   console.log(a);
// }

// console.log(a); // outputs outer global variable
// testScope(); // outputs inner function invocation creates shadowed local variable a set to 'inner' outputs this 
// console.log(a); // inner inner global variable referenced was changed and outputs this chagnes value


// let a = 'outer';

// function testScope() {
//   a = 'inner';
//   console.log(a);
// }

// console.log(a); // outer global variable a is output
// testScope(); // global variable a is reasigned. new value output
// console.log(a); // global variable a is ouptu agina reflecgintnew value

// let basket = 'empty';

// function goShopping() {
//   function shop1() {
//     basket = 'tv';
//   }

//   console.log(basket);

//   let shop2 = function() {
//     basket = 'computer';
//   };

//   const shop3 = () => {
//     let basket = 'play station';
//     console.log(basket);
//   };

//   shop1();
//   shop2();
//   shop3();

//   console.log(basket);
// }

// goShopping();

// global variable basket set to empty string
// shop1 method reassing global variable basket to 'tv'
// shop2 is a variable for a function expression which reassings global variable baskt t ocomputer
// shop3 is a constant variable for a anonymous function expression creata local variable basket assigning 
      // it to play station. outputs this value playstation

// go shoppign invoked
// outputs empty
// outputs play station 
// outputs computer 

// function hello() {
//   a = 'hi';
// }

// hello();
// console.log(a);

// output hi


// function hello() {
//   let a = 'hello';
// }

// hello();
// console.log(a);

// Reference errro undefed

// logs hello
// log hello

// var a = 'hello';

// for (var index = 0; index < 5; index += 1) {
//   var a = index;
// }

// console.log(a);

// var a = 'global';

// function checkScope() {
//   var a = 'local';
//   const nested = function() {
//     var a = 'nested';
//     let superNested = () => {
//       a = 'superNested';
//       return a;
//     };

//     return superNested();
//   };

//   return nested();
// }

// console.log(checkScope());
// console.log(a);


