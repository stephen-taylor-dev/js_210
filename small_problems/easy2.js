// function crunch(string) {
//   let outputString = '';

//   let consDup;
//   for (let index = 0; index < string.length; index += 1) {
//     if (string[index] === consDup) {
//       continue;
//     }
//     consDup = string[index];
//     outputString += string[index];
//   }

//   return outputString;
// }

// function crunch(string) {
  
//   let outputString = '';

//   let consDup;
//   for (let index = 0; index < string.length; index += 1) {
//     if (string[index] === consDup) {
//       continue;
//     }
//     consDup = string[index];
//     outputString += string[index];
//   }

//   return outputString;
// }


// // console.log(crunch('ddaaiillyy ddoouubbllee'));    // "daily double"
// // console.log(crunch('4444abcabccba'));              // "4abcabcba"
// // console.log(crunch('ggggggggggggggg'));            // "g"
// console.log(crunch('aa'));                          // "a"
// // console.log(crunch(''));                           // ""

// Banner Problem with line wrapping

// function findClosestWhiteSpace(subText) {
//   // for (let index = subText.length - 1; index >= 0; index -= 1) {
//   //   if (subText[index] === ' ') {
//   //     return index + 1;
//   //   }
//   // }

//   //return subText.length - 1;

//   return subText.lastIndexOf(' ') + 1;
// }

// function splitText(text) {
//   let width = text.length;

//   let numLines = Math.ceil(width / BOX_WIDTH);

//   let lines = [];
//   let startIndex = 0;
//   let endIndex = BOX_WIDTH;
//   for (let index = 0; index < numLines; index += 1) {
//     let splitIndex = findClosestWhiteSpace(text.slice(startIndex, endIndex));
//     lines.push(text.slice(startIndex, splitIndex + startIndex));
//     startIndex = splitIndex + startIndex;
//     endIndex = startIndex + BOX_WIDTH;
//   }

//   return lines;
// }

// const BOX_WIDTH = 50;

// function logInBox(text) {
//   let width = BOX_WIDTH;

//   const horizontalBoundary = `+-${'-'.repeat(width)}-+`;
//   const emptyLine = `| ${' '.repeat(width)} |`;

//   let wrappedText = splitText(text);

//   console.log(horizontalBoundary);
//   console.log(emptyLine);
//   wrappedText.forEach(line => {
//     let spaces = line.length < BOX_WIDTH ? BOX_WIDTH - line.length : 0;
//     console.log(`| ${line}${' '.repeat(spaces)} |`);
//   });
//   console.log(emptyLine);
//   console.log(horizontalBoundary);
// }

// logInBox('To boldly go where no one has gone before. To boldly go where no one has gone before. To boldly go where no one has gone before. To boldly go where no one has gone before. To boldly go where no one has gone before. To boldly go where no one has gone before. To boldly go where no one has gone before. To boldly go where no one has gone before. To boldly go where no one has gone before.');
// logInBox('');


// // Stringy Strings
// function stringy(number) {
//   let outputString = '';
//   for (let index = 1; index <= number; index += 1) {
//     let char = index % 2 === 0 ? '0' : '1';
//     outputString += char;
//   }

//   return outputString;
// } 

// console.log(stringy(6));    // "101010"
// console.log(stringy(9));    // "101010101"
// console.log(stringy(4));    // "1010"
// console.log(stringy(7));    // "1010101"

// Right Triangle

// function triangle(sideSize) {
//   let numOfSpaces = sideSize - 1;
//   for (let numOfStars = 1; numOfStars <= sideSize; numOfStars += 1) {
//     console.log(`${' '.repeat(numOfSpaces)}${'*'.repeat(numOfStars)}`);
//     numOfSpaces -= 1;
//   }
// }

// triangle(5);
// triangle(9);


// Madlibs

// let rlSync = require('readline-sync');
// let noun = rlSync.question("Enter a noun: ");
// let verb = rlSync.question("Enter a verb: ");
// let adj = rlSync.question("Enter a adjective: ");
// let adv = rlSync.question("Enter a adverb: ");

// console.log(`Do you ${verb} your ${adj} ${noun} ${adv}? That's hilarious!`);


// // Double Double
// function twice(number) {
//   if (isDoubleNumber(number)) {
//     return number;
//   } else {
//     return number * 2;
//   }
// }

// function isDoubleNumber(number) {
//   let strNum = String(number);
//   let halfPoint = strNum.length / 2;
//   let first = strNum.slice(0, halfPoint);
//   let last = strNum.slice(halfPoint);

//   return first === last;
// }


// console.log(twice(37) === 74);   // 74
// console.log(twice(44) === 44);   // 44
// console.log(twice(334433) === 668866);   // 668866
// console.log(twice(444) === 888);   // 888
// console.log(twice(107) === 214);   // 214
// console.log(twice(103103) === 103103);   // 103103
// console.log(twice(3333) === 3333);   // 3333
// console.log(twice(7676) === 7676);   // 7676

// function getGrade(...grades) {
//   let sum = grades.reduce((sum, grade) => {
//     return sum + grade;
//   }, 0);
//   let avgGrade = sum / grades.length;

//   if (avgGrade >= 90) {
//     return 'A';
//   } else if (avgGrade >= 80) {
//     return 'B';
//   } else if (avgGrade >= 70) {
//     return 'C';
//   } else if (avgGrade >= 60) {
//     return 'D';
//   } else {
//     return 'F';
//   }
// }

// console.log(getGrade(95, 90, 93) === "A");   // "A"
// console.log(getGrade(50, 50, 95) === "D");   // "D"

// function cleanUp(text) {
//   return text.replace(/[^a-z]+/gi, ' ');
// }
// console.log(cleanUp("---what's my +*& line?") === ' what s my line ');    // " what s my line "Vo


// function century(year) {
//   const century = Math.ceil(year / 100);
//   let stringCentury = String(century);
//   if (stringCentury[1] && stringCentury.slice(-2)[0] === '1' && parseInt(stringCentury.slice(-1), 10) > 0 ) {
//     return stringCentury + 'th';
//   } else if (stringCentury.slice(-1) === '1') {
//     return stringCentury + 'st';
//   } else if (stringCentury.slice(-1) === '2') {
//     return stringCentury + 'nd';
//   } else if (stringCentury.slice(-1) === '3') {
//     return stringCentury + 'rd';
//   } else {
//     return stringCentury + 'th';
//   }
// }


// function century(year) {
//   let centuryNumber = Math.floor(year / 100) + 1;

//   if (year % 100 === 0) {
//     centuryNumber -= 1;
//   }

//   return String(centuryNumber) + centurySuffix(centuryNumber);
// }

// function centurySuffix(centuryNumber) {
//   if (catchWithTh(centuryNumber % 100)) {
//     return 'th';
//   }

//   let lastDigit = centuryNumber % 10;
//   switch (lastDigit) {
//     case 1: return 'st';
//     case 2: return 'nd';
//     case 3: return 'rd';
//     default: return 'th';
//   }
// }

// function catchWithTh(lastTwo) {
//   return lastTwo === 11 || lastTwo === 12 || lastTwo === 13;
// }

// console.log(century(1000));        // "1st"
// console.log(century(2000));        // "20th"
// console.log(century(2001));        // "21st"
// console.log(century(1965));        // "20th"
// console.log(century(256));         // "3rd"
// console.log(century(5));           // "1st"
// console.log(century(10103));       // "102nd"
// console.log(century(1052));        // "11th"
// console.log(century(1127));        // "12th
// console.log(century(11201));       // "113th"

// console.log(century(2000) === "20th");   // "20th"
// console.log(century(2001) === "21st");   // "21st"
// console.log(century(1965) === "20th");   // "20th"
// console.log(century(256) === "3rd");   // "3rd"
// console.log(century(5) === "1st");   // "1st"
// console.log(century(10103) === "102nd");   // "102nd"
// console.log(century(1052) === "11th");   // "11th"
// console.log(century(1127) === "12th");   // "12th"
// console.log(century(11201) === "113th");   // "113th"