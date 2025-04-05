// "use strict";
// How Old is Teddy
// const MAX = 200;
// const MIN = 20;

// let age = Math.floor(Math.random() * (MAX - MIN + 1) + MIN);

// console.log(`Teddy is now ${age} years old!`);

// let rlSync = require('readline-sync');
// let numbers = [];

// numbers.push(parseInt(rlSync.question("Enter the 1st number: "), 10));
// numbers.push(parseInt(rlSync.question("Enter the 2nd number: "), 10));
// numbers.push(parseInt(rlSync.question("Enter the 3rd number: "), 10));
// numbers.push(parseInt(rlSync.question("Enter the 4th number: "), 10));
// numbers.push(parseInt(rlSync.question("Enter the 5th number: "), 10));
// numbers.push(parseInt(rlSync.question("Enter the 6th number: "), 10));

// let lastNumber = numbers[numbers.length - 1];

// if (numbers.includes(lastNumber)) {
//   console.log(`The number ${lastNumber} appears in [${numbers.join(', ')}].`);
// } else {
//   console.log(`The number ${lastNumber} does not appear in [${numbers.join(', ')}].`);
// }


// let rlSync = require('readline-sync');

// const age = parseInt(rlSync.question("What is your age? "), 10);
// const retireAge = parseInt(rlSync.question("At what age would you like to retire? "), 10);

// let yearsOfWorkLeft = retireAge - age;
// let date = new Date();

// let currentYear = date.getFullYear();
// let retirementYear = currentYear + yearsOfWorkLeft;

// console.log(`It's ${currentYear}. You will retire in ${retirementYear}`);
// console.log(`You have only ${yearsOfWorkLeft} years of work to go!`);

// function isPalindrome(text) {
//   let reversed = '';

//   for (let index = text.length - 1; index >= 0; index -= 1) {
//     reversed += text[index];
//   }

//   return text === reversed;
// }


// function isRealPalindrome(text) {
//   let strippedText = text.toLowerCase().replace(/[^a-z\d]/gi, '');
//   return isPalindrome(strippedText);
// }

// // console.log(isPalindrome('madam') === true);   // true
// // console.log(isPalindrome('Madam') === false);   // false (case matters)
// // console.log(isPalindrome("madam i'm adam") === false);   // false (all characters matter)
// // console.log(isPalindrome('356653') === true);   // true

// console.log(isRealPalindrome('madam') === true);   // true
// console.log(isRealPalindrome('Madam') === true);   // true (case does not matter)
// console.log(isRealPalindrome("Madam, I'm Adam") === true);   // true (only alphanumerics matter)
// console.log(isRealPalindrome('356653') === true);   // true
// console.log(isRealPalindrome('356a653') === true);   // true
// console.log(isRealPalindrome('123ab321') === false);   // false

// function isPalindromicNumber(number) {
//   return isPalindrome(String(number));
// }

// console.log(isPalindromicNumber(0034543) === true);   // true
// console.log(isPalindromicNumber(123210) === false);   // false
// console.log(isPalindromicNumber(22) === true);   // true
// console.log(isPalindromicNumber(5) === true);   // true

// function runningTotal(numbers) {
//   return numbers.reduce((acc, num, index) => {
//     if (acc[index - 1]) {
//       acc.push(num + acc[index - 1]);
//     } else {
//       acc.push(num);
//     }

//     return acc;
//   }, []);
// }


// function runningHTotal(numbers) {
//   let total = 0;
//   return numbers.map(number => total += number);
// }

// console.log(runningTotal([2, 5, 13]));             // [2, 7, 20]
// console.log(runningTotal([14, 11, 7, 15, 20]));    // [14, 25, 32, 47, 67]
// console.log(runningTotal([3]));                    // [3]
// console.log(runningTotal([]));                     // []
/*
conver string to array of words
split on space
map the array of words
set first char to last and last to first for each word

return joined array to string with space separator

*/


// function swap(text) {
//   let words = text.split(' ');
//   let swapped = words.map((word) => {
//     if (word.length > 1) {
//       let first = word[0];
//       let last = word[word.length - 1];
//       let middle = word.slice(1, -1);
//       word =  last + middle + first;
//     }
//     return word;
//   });
//   return swapped.join(' ');
// }


// console.log(swap('Oh what a wonderful day it is') === "hO thaw a londerfuw yad ti si");   // "hO thaw a londerfuw yad ti si"
// console.log(swap('Abcde') === "ebcdA");   // "ebcdA"
// console.log(swap('a') === "a");   // "a"

function wordSizes(text) {
  if (text === '') return {};
  return text.split(' ').reduce((obj, word) => {
    let length = word.replace(/[^a-z]/gi, '').length;
    if (obj[length]) {
      obj[length] += 1;
    } else {
      obj[length] = 1;
    }

    return obj;
  }, {});
}


console.log(wordSizes('Four score and seven.'));                       // { "3": 1, "4": 1, "5": 1, "6": 1 }
console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));  // { "3": 5, "6": 1, "7": 2 }
console.log(wordSizes("What's up doc?"));                              // { "2": 1, "4": 1, "6": 1 }
console.log(wordSizes(''));                                            // {}
