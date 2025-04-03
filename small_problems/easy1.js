// odd
// for (let i = 1; i <= 99; i += 2) {
  // console.log(i);
// }

// let counter = 1;
// while (counter < 100) {
//   console.log(counter);
//   counter += 2;
// }

// even

// for (let i = 2; i <= 99; i += 2) {
//   console.log(i);
// }

// let counter = 1;
// while (counter < 100) {
//   console.log(counter);
//   counter += 2;
// }

// const SQR_METER_TO_FEET = 10.7639;
// let rlSync = require('readline-sync');
// let length = parseInt(rlSync.question("What's your
// room's length in meters?\n"), 10);
// let width = parseInt(rlSync.question("What's your 
// room's width in meters?\n"), 10);

// let sqrMeters = length * width;
// console.log(`The area of the room is ${sqrMeters} square meters 
// (${sqrMeters * SQR_METER_TO_FEET} square feet)`);


// console.log('What is the bill?');
// let rlSync = require('readline-sync');
// let bill = parseFloat(rlSync.prompt());
// console.log('What is the tip percentage?');
// let percentage = parseFloat(rlSync.prompt()) / 100;

// let tip = bill * percentage;
// let total = bill + tip;

// console.log(`The tip is $${tip.toFixed(2)}`);
// console.log(`The total is $${total.toFixed(2)}`);


// let rlSync = require('readline-sync');

// let number;
// do {
//   number = parseInt(rlSync.question('Please enter an integer greater than 0: '), 10);
// } while (number <= 0);

// let method;
// do {
//   method = String(rlSync.question('Enter "s" to compute the sum, or "p" to compute the product: ').trim().toLowerCase());
//   console.log(method);
// } while (method !== 'p' && method !== 's');

// let output;
// switch (method) {
//   case 's':
//     output = String(totalSum(number));
//     console.log(`The sum of the integers between 1 and ${String(number)} is ${output}`);
//     break;
//   case 'p':
//     output = String(totalProduct(number));
//     console.log(`The product of the integers between 1 and ${String(number)} is ${output}`);
//     break;
// }


// function totalSum(num) {
//   // let result = 0;
//   // for (let index = 1; index <= num; index += 1) {
//   //   result += index;
//   // }

//   // return result;

//   return num.reduce((acc, number) => {
//     return number + acc;
//   }, 0);
// }

// function totalProduct(num) {
//   // let result = 1;
//   // for (let index = 1; index <= num; index += 1) {
//   //   result *= index;
//   // }

//   // return result;
//   return num.reduce((acc, number) => {
//     return number * acc;
//   }, 1);
// }

// console.log(totalSum([1,2,3,4,5]));
// console.log(totalProduct([1,2,3,4,5, 6]));

// function shortLongShort(string1, string2) {
//   if (string1.length > string2.length) {
//     [string1, string2] = [string2, string1];
//   }

//   return string1 + string2 + string1
// }

// console.log(shortLongShort('abc', 'defgh'));    // "abcdefghabc"
// console.log(shortLongShort('abcde', 'fgh'));    // "fghabcdefgh"
// console.log(shortLongShort('', 'xyz'));         // "xyz"

// function isLeapYear(year) {
//  return year % 400 === 0 || year % 4 === 0 && year % 100 !== 0
// }


// console.log(isLeapYear(2016) === true);      // true
// console.log(isLeapYear(2015) === false);      // false
// console.log(isLeapYear(2100) === false);      // false
// console.log(isLeapYear(2400) === true);      // true
// console.log(isLeapYear(240000) === true);    // true
// console.log(isLeapYear(240001) === false);    // false
// console.log(isLeapYear(2000) === true);      // true
// console.log(isLeapYear(1900) === false);      // false
// console.log(isLeapYear(1752) ===  true);      // true
// console.log(isLeapYear(1700) === false);      // false
// console.log(isLeapYear(1) === false);         // false
// console.log(isLeapYear(100) === false);       // false
// console.log(isLeapYear(400) === true);       // true

// function isLeapYear(year) {
//   if (year < 1752) {
//     return year % 4 === 0;
//   }
//   return year % 400 === 0 || year % 4 === 0 && year % 100 !== 0
// }

// console.log(isLeapYear(2016) === true);      // true
// console.log(isLeapYear(2015) === false);      // false
// console.log(isLeapYear(2100) === false);      // false
// console.log(isLeapYear(2400) === true);      // true
// console.log(isLeapYear(240000) === true);    // true
// console.log(isLeapYear(240001) === false);    // false
// console.log(isLeapYear(2000) === true);      // true
// console.log(isLeapYear(1900) === false);      // false
// console.log(isLeapYear(1752) ===  true);      // true
// console.log(isLeapYear(1700) === true);      // false
// console.log(isLeapYear(1) === false);         // false
// console.log(isLeapYear(100) === true);       // false
// console.log(isLeapYear(400) === true);       // true

// function multisum(num) {
//   let result = 0;
//   for (let count = 3; count <= num; count += 1) {
//     if (count % 3 === 0 || count % 5 === 0) {
//       result += count;
//     }
//   }

//   return result;
// }


// console.log(multisum(3) === 3);       // 3
// console.log(multisum(5) === 8);       // 8
// console.log(multisum(10) === 33);      // 33
// console.log(multisum(1000) === 234168);    // 234168


function utf16Value(string) {

  return string.split('').reduce((acc, char) => {
    return acc += char.charCodeAt(0);
  }, 0);
}




console.log(utf16Value('Four score') === 984);         // 984
console.log(utf16Value('Launch School') === 1251);      // 1251
console.log(utf16Value('a') === 97);                  // 97
console.log(utf16Value('') === 0);                   // 0

// The next three lines demonstrate that the code
// works with non-ASCII characters from the UTF-16
// character set.
const OMEGA = "\u03A9";             // UTF-16 character 'Ω' (omega)
console.log(utf16Value(OMEGA) === 937);                  // 937
console.log(utf16Value(OMEGA + OMEGA + OMEGA) === 2811);  // 2811