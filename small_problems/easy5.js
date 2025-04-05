// function repeater(string) {
//   let outputString = '';

//   for (let index = 0; index < string.length; index += 1) {
//     outputString = outputString.concat(string[index], string[index]);
//   }

//   return outputString;
// }


// console.log(repeater('Hello') === "HHeelllloo");   // "HHeelllloo"
// console.log(repeater('Good job!') === "GGoooodd  jjoobb!!");   // "GGoooodd  jjoobb!!"
// console.log(repeater('') === "");   // ""

// const VOWELS = 'aeiou';

// function doubleConsonants(string) {
//   let outputString = '';

//   for (let index = 0; index < string.length; index += 1) {
//     outputString += string[index];
//     // if not vowel and only letters
//     if (!VOWELS.includes(string[index]) && string[index].match(/[a-z]/gi)) {
//       outputString = outputString.concat(string[index], string[index]);
//     }
//   }
//   console.log(outputString)
//   return outputString;
// }


// console.log(doubleConsonants('String') === "SSttrrinngg");   // "SSttrrinngg"
// console.log(doubleConsonants('Hello-World!') === "HHellllo-WWorrlldd!");   // "HHellllo-WWorrlldd!"
// console.log(doubleConsonants('July 4th') === "JJullyy 4tthh");   // "JJullyy 4tthh"
// console.log(doubleConsonants('') === "");   // ""

// function reverseNumber(number) {
//   let numStr = String(number).replace(/^0+/gi, '');
//   let reversed = '';

//   for (let index = numStr.length - 1; index >= 0; index -= 1) {
//     reversed += numStr[index];
//   }

//   return parseInt(reversed, 10);
// }

// // alt solution 
// // relies on built in parseInt functinality to remove leading zeros
// function reverseNumber(number) {
//   const numberStringArray = String(number).split('');
//   return parseInt(numberStringArray.reverse().join(''), 10);
// }

// console.log(reverseNumber(12345) === 54321);   // 54321
// console.log(reverseNumber(12213) === 31221);   // 31221
// console.log(reverseNumber(456) === 654);   // 654
// console.log(reverseNumber(12000) === 21);   // 21 -- Note that zeros get dropped!
// console.log(reverseNumber(1) === 1);   // 1

// function centerOf(text) {
//   let middle = Math.floor(text.length / 2);
//   if (text.length % 2 === 0) {
//     return text.substring(middle - 1, middle + 1);
//   } else {
//     return text[middle];
//   }
// }
// console.log(centerOf('I Love JavaScript')); // "a"
// console.log(centerOf('Launch School'));     // " "
// console.log(centerOf('Launch'));            // "un"
// console.log(centerOf('Launchschool'));      // "hs"
// console.log(centerOf('x'));                 // "x"


// console.log(centerOf('I Love JavaScript') === "a");   // "a"
// console.log(centerOf('Launch School') === " ");   // " "
// console.log(centerOf('Launch') === "un");   // "un"
// console.log(centerOf('Launchschool') === "hs");   // "hs"
// console.log(centerOf('x') === "x");   // "x"

// function negative(num) {
//   return num < 0 ? num : -num;
// }


// console.log(negative(5) === -5);   // -5
// console.log(negative(-3) === -3);   // -3
// console.log(negative(0) === -0);   // -

// function sequence(number) {
//   let outputArr = [];
//   for (let index = 1; index <= number; index += 1) {
//     outputArr.push(index);
//   }

//   return outputArr;
// }


// console.log(sequence(5));    // [1, 2, 3, 4, 5]
// console.log(sequence(3));    // [1, 2, 3]
// console.log(sequence(1));    // [1]

// function swapName(fullName) {
//   let [first, last] = fullName.split(' ');

//   return `${last}, ${first}`;
// }

// console.log(swapName('Joe Roberts') === "Roberts, Joe");   // "Roberts, Joe"

// function sequence(count, start) {
//   let outputArr = [];

//   for (let index = start; outputArr.length < count; index += start) {
//     outputArr.push(index);
//   }

//   return outputArr;
// }

// console.log(sequence(5, 1));          // [1, 2, 3, 4, 5]
// console.log(sequence(4, -7));         // [-7, -14, -21, -28]
// console.log(sequence(3, 0));          // [0, 0, 0]
// console.log(sequence(0, 1000000));    // []

// function reverseSentence(sentence) {
//   return sentence.split(' ').reverse().join(' ');
// }


// console.log(reverseSentence('') === "");   // ""
// console.log(reverseSentence('Hello World') === "World Hello");   // "World Hello"
// console.log(reverseSentence('Reverse these words') === "words these Reverse");   // "words these Reverse"

// function reverseWords(wordsString) {
//   let words = wordsString.split(' ');

//   let wordsReversed = words.map(word => {
//     if (word.length >= 5) {
//       word = word.split('').reverse().join('');
//     }
//     return word;
//   });

//   return wordsReversed.join(' ');
// }


// console.log(reverseWords('Professional') === "lanoisseforP");   // "lanoisseforP"
// console.log(reverseWords('Walk around the block') === "Walk dnuora the kcolb");   // "Walk dnuora the kcolb"
// console.log(reverseWords('Launch School') === "hcnuaL loohcS");   // "hcnuaL loohcS"