/* 
p 
input: 2 boolean value args
output: boolean value

e
isXor(false, true);     // true
isXor(true, false);     // true
isXor(false, false);    // false
isXor(true, true);      // false


isXor(false, 3);        // true
isXor('a', undefined);  // true
isXor(null, '');        // false
isXor('2', 23);         // false

d
strings
numbers
booleans


a
return true if only 1 arg is true
false otherwise



*/

function isXor(arg1, arg2) {
  return !!(!(arg1 && arg2) && (arg1 || arg2))
}

// function isXor(value1, value2) {
//   return !!((value1 && !value2) || (value2 && !value1));
// }


// console.log(isXor(false, true));     // true
// console.log(isXor(true, false));     // true
// console.log(isXor(false, false));    // false
// console.log(isXor(true, true));      // false


// console.log(isXor(false, 3));        // true
// console.log(isXor('a', undefined));  // true
console.log(isXor(null, ''));        // false
// console.log(isXor('2', 23));         // false