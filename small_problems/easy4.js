// "use strict";

// const DEGREE = '\u00B0';
// const CONV_FACTOR = 60;
// const TOTAL_DEGREES = 360
// function dms(angle) {
//   angle %= TOTAL_DEGREES;

//   if (angle < 0) {
//     angle += TOTAL_DEGREES;
//   }


//   let degrees = Math.floor(angle);
//   let minAndSecs = (angle - degrees) * CONV_FACTOR;
//   let minutes = Math.floor(minAndSecs);
//   let seconds = Math.floor((minAndSecs - minutes) * CONV_FACTOR);

//   minutes = String(minutes);
//   seconds = String(seconds);
//   if (minutes.length === 1) {
//     minutes = '0' + minutes;
//   }
//   if (seconds.length === 1) {
//     seconds = '0' + seconds;
//   }

//   return `${degrees}${DEGREE}${minutes}'${seconds}"`;
// }


// // All test cases should return true
// // console.log(dms(30) === "30°00'00\"");
// // console.log(dms(76.73) === "76°43'48\"");
// // console.log(dms(254.6) === "254°35'59\"");
// // console.log(dms(93.034773) === "93°02'05\"");
// // console.log(dms(0) === "0°00'00\"");
// // console.log(dms(360) === "360°00'00\"" || dms(360) === "0°00'00\"");

// console.log(dms(-1));   // -1°00'00"
// console.log(dms(400));  // 400°00'00"
// console.log(dms(-40));  // -40°00'00"
// console.log(dms(-420)); // 420°00'00"


// console.log(dms(-1) === "359°00'00\"");
// console.log(dms(400) === "40°00'00\"");
// console.log(dms(-40) === "320°00'00\"");
// console.log(dms(-420) === "300°00'00\"");

// function union(array1, array2) {
//   let newArr = [];

//   array1.forEach((num) => {
//     if (!newArr.includes(num)) {
//       newArr.push(num);
//     }
//   });

//   array2.forEach((num) => {
//     if (!newArr.includes(num)) {
//       newArr.push(num);
//     }
//   });

//   return newArr;
// }


// console.log(union([1, 3, 5], [3, 6, 9]));    // [1, 3, 5, 6, 9]


// function halvsies(array) {
//   let outputArr = [];
//   let middleIndex =  Math.ceil(array.length / 2);
//   outputArr[0] = array.slice(0, middleIndex); // slice is not inclusive with endIndex
//   outputArr[1] = array.slice(middleIndex);

//   return outputArr;
// }

// console.log(halvsies([1, 2, 3, 4]));       // [[1, 2], [3, 4]]
// console.log(halvsies([1, 5, 2, 4, 3]));    // [[1, 5, 2], [4, 3]]
// console.log(halvsies([5]));                // [[5], []]
// console.log(halvsies([]));                 // [[], []]

// function findDup(array) {
//   array.sort();
//   for (let index = 0; index < array.length; index += 1) {
//     if (array[index] === array[index + 1]) {
//       return array[index];
//     }
//   }
// }

// // clever solution from Austin Miller
// // https://launchschool.com/exercises/ee0a5888
// function findDup(arr) {
//   return arr.find(el => arr.indexOf(el) !== arr.lastIndexOf(el));
// }

// console.log(findDup([1, 5, 3, 1]));                                // 1
// console.log(findDup([18,  9, 36, 96, 31, 19, 54, 75, 42, 15,
//          38, 25, 97, 92, 46, 69, 91, 59, 53, 27,
//          14, 61, 90, 81,  8, 63, 95, 99, 30, 65,
//          78, 76, 48, 16, 93, 77, 52, 49, 37, 29,
//          89, 10, 84,  1, 47, 68, 12, 33, 86, 60,
//          41, 44, 83, 35, 94, 73, 98,  3, 64, 82,
//          55, 79, 80, 21, 39, 72, 13, 50,  6, 70,
//          85, 87, 51, 17, 66, 20, 28, 26,  2, 22,
//          40, 23, 71, 62, 73, 32, 43, 24,  4, 56,
//           7, 34, 57, 74, 45, 11, 88, 67,  5, 58]));    // 73

// function interleave(first, second) {
//   let newArr = [];
//   for (let index = 0; index < first.length; index += 1) {
//     newArr.push(first[index], second[index]);
//   }

//   return newArr;
// }


// console.log(interleave([1, 2, 3], ['a', 'b', 'c']));    // [1, "a", 2, "b", 3, "c"]

// const DECIMALS = 3;

// function showMultiplicativeAverage(array) {
//   let product = array.reduce((acc, num) => acc * num, 1);
//   let output = product / array.length;

//   return output.toFixed(DECIMALS);
// }

// console.log(showMultiplicativeAverage([3, 5]) === "7.500");   // "7.500"
// console.log(showMultiplicativeAverage([2, 5, 7, 11, 13, 17]) === "28361.667");   // "28361.667"


// function multiplyList(first, second) {
//   let newArr = [];

//   for (let index = 0; index < first.length; index += 1) {
//     newArr.push(first[index] * second[index]);
//   }

//   return newArr;
// }

// console.log(multiplyList([3, 5, 7], [9, 10, 11]));    // [27, 50, 77]

// function digitList(number) {
//   return String(number).split('').map(num => parseInt(num, 10));
// }


// console.log(digitList(12345));       // [1, 2, 3, 4, 5]
// console.log(digitList(7));           // [7]
// console.log(digitList(375290));      // [3, 7, 5, 2, 9, 0]
// console.log(digitList(444));         // [4, 4, 4]

// const vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck',
//   'motorcycle', 'suv', 'motorcycle', 'car', 'truck'];


// function countOccurrences(items) {
//   const counts = {};

//   items.forEach(item => {
//     // This instead of if statement
//     counts[item] = counts[item] || 0;
//     counts[item] += 1;
//     // if (counts[item]) {
//     //   counts[item] += 1;
//     // } else {
//     //   counts[item] = 1;
//     // }
//   });

//   for (let item in counts) {
//     console.log(`${item} => ${counts[item]}`);
//   }
// }

// countOccurrences(vehicles);


// // console output
// // car => 4
// // truck => 3
// // SUV => 1
// // motorcycle => 2
// // suv => 1

// function average(array) {
//   let sum = array.reduce((acc, num) => acc + num, 0);
//   let average = sum / array.length;
//   return Math.floor(average);
// }

// console.log(average([1, 5, 87, 45, 8, 8]));       // 25
// console.log(average([9, 47, 23, 95, 16, 52]));    // 40


