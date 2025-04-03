// console.log((false && undefined) === false);
// console.log((false || undefined) === undefined);
// console.log(((false && undefined) || (false || undefined)) === undefined);
// console.log(((false || undefined) || (false && undefined)) === false);
// console.log(((false && undefined) && (false || undefined)) === false);
// console.log(((false || undefined) && (false && undefined)) === undefined);
// console.log(('a' || (false && undefined) || '') === 'a');
// console.log(((false && undefined) || 'a' || '') === 'a');
// console.log(('a' && (false || undefined) && '') === undefined);
// console.log(((false || undefined) && 'a' && '') === false);


// function getSelectedColumns(numbers, cols) {
//   var result = [];

//   for (var i = 0; i < numbers.length; i += 1) {
//     for (var j = 0; j < cols.length; j += 1) {
//       if (!result[j]) {
//         result[j] = [];
//       }

//       result[j][i] = numbers[i][cols[j]];
//     }
//   }

//   return result;
// }

// // given the following arrays of number arrays
// const array1 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
// const array2 = [[1, 2, 3], [1, 2, 3], [1, 2, 3]];

// // `array1` in row/column format
// // [[1, 2, 3],
// //  [4, 5, 6],
// //  [7, 8, 9]]

// console.log(getSelectedColumns(array1, [0]));     // [[1]]);            expected: [[1, 4, 7]]
// console.log(getSelectedColumns(array1, [0, 2]));  // [[1, 4], [3, 6]]); expected: [[1, 4, 7], [3, 6, 9]]
// console.log(getSelectedColumns(array2, [1, 2]));  // [[2, 2], [3, 3]]); expected: [[2, 2, 2], [3, 3, 3]]

/*
1: 
The total value is 15

2:
The total value is NaN

3:
The total value is 15

4:


5
*/

// function invoiceTotal(...args) {
//   let sum = 0;
//   args.forEach(number => sum += number);
//   return sum;
// }

// console.log(invoiceTotal(20, 30, 40, 50));          // works as expected
// console.log(invoiceTotal(20, 30, 40, 50, 40, 40));  // does not work
// ); how can you make it work?


