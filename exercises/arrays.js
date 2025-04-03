// Array Copy Part 2
// let myArray = [1, 2, 3, 4];
// const myOtherArray = myArray.slice();
// const myOtherArray = [...myArray];
// const myOtherArray = Array.from(myArray);

// myArray.pop();
// console.log(myOtherArray);

// myArray = [1, 2];
// console.log(myOtherArray);


/*
input: array, object (array, object, primitive)
output: array

elements in new array should be in same order
object references should be copied over
copy values of primitives

data struc
array
objects
primitiv string number


Algo
check if second arg is array
  if so loop over array
    push each element onto the array
if not
  push element on the the array

*/

// function concat(array1, secondArgument) {
//   let newArray = [];

//   array1.forEach(item => {
//     newArray.push(item);
//   });

//   if (Array.isArray(secondArgument)) {
//     secondArgument.forEach(item => {
//       newArray.push(item);
//     });
//   } else {
//     newArray.push(secondArgument);
//   }

//   return newArray;
// }

// console.log(concat([1, 2, 3], [4, 5, 6]));          // [1, 2, 3, 4, 5, 6]
// console.log(concat([1, 2], 3));                     // [1, 2, 3]
// console.log(concat([2, 3], ['two', 'three']));      // [2, 3, "two", "three"]
// console.log(concat([2, 3], 'four'));                // [2, 3, "four"]


// const obj = { a: 2, b: 3 };
// const newArray = concat([2, 3], obj);
// console.log(newArray);                              // [2, 3, { a: 2, b: 3 }]
// obj.a = 'two';
// console.log(newArray);                              // [2, 3, { a: "two", b: 3 }]

// const arr1 = [1, 2, 3];
// const arr2 = [4, 5, obj];
// const arr3 = concat(arr1, arr2);
// console.log(arr3);                                  // [1, 2, 3, 4, 5, { a: "two", b: 3 }]
// obj.b = 'three';
// console.log(arr3);                                  // [1, 2, 3, 4, 5, { a: "two", b: "three" }]

// arr3[5].b = 3;                         // or, `arr3[5]['b'] = 3;`
// console.log(obj);                                   // { a: "two", b: 3 }


  // function concat(array1, ...secondArgument) {
  //   let newArray = [];
  //   array1.forEach(item => {
  //     newArray.push(item);
  //   });

  //   for (let index = 0; index < secondArgument.length; index += 1) {
  //     let currentArrArg = secondArgument[index];
  //     if (Array.isArray(currentArrArg)) {
  //       currentArrArg.forEach(item => {
  //         newArray.push(item);
  //       });
  //     } else {
  //       newArray.push(currentArrArg);
  //     }
  //   }

  //   return newArray;
  // }

  
// console.log(concat([1, [2, 3]], [4, 5, 6], [7, 8, 9]));    // [1, 2, 3, 4, 5, 6, 7, 8, 9]
// console.log(concat([1, 2], 'a', ['one', 'two']));        // [1, 2, "a", "one", "two"]
// console.log(concat([1, 2], ['three'], 4));               // [1, 2, "three", 4]

// function pop(arr) {
//   let last = undefined;
//   if (arr.length > 0) {
//     last = arr[arr.length - 1];
//     arr.length -= 1;
//   }

//   return last;
// }

// function push(arr, ...items) {
//   items.forEach(item => {
//     arr[arr.length] = item;
//   });

//   return arr.length;
// }

// function pop(array) {
//   const poppedElement = array[array.length];
//   array.splice[array.length];

//   return poppedElement;
// }

// function push(array, ...args) {
//   const length = args.length;

//   for (let i = 1; i < length; i += 1) {
//     array[i] = args[i];
//   }

//   return array.length;
// }

// // pop
// const array1 = [1, 2, 3];
// console.log(pop(array1));                        // 3
// console.log(array1);                // [1, 2]
// console.log(pop([]));                           // undefined
// console.log(pop([1, 2, ['a', 'b', 'c']]));      // ["a", "b", "c"]

// // push
// const array2 = [1, 2, 3];
// console.log(push(array2, 4, 5, 6));              // 6
// console.log(array2);                // [1, 2, 3, 4, 5, 6]
// console.log(push([1, 2], ['a', 'b']));          // 3
// console.log(push([], 1));                       // 1
// console.log(push([]));                          // 0

// function reverse(inputForReversal) {
//   let output;
//   let length = inputForReversal.length;
//   if (Array.isArray(inputForReversal)) {
//     output = [];
//     for (let index = length - 1; index >= 0; index -= 1) {
//       output.push(inputForReversal[index]);
//     }
//   } else {
//     output = '';
//     for (let index = length - 1; index >= 0; index -= 1) {
//       output += inputForReversal[index];
//     }
//   }

//   return output;
// }

// function reverse(inputForReversal) {
//   if (Array.isArray(inputForReversal)) {
//     return reverseArray(inputForReversal);
//   } else {
//     return reverseString(inputForReversal);
//   }
// }

// function reverseArray(inputForReversal) {
//   const reversed = [];
//   const length = inputForReversal.length;

//   for (let i = 0; i < length; i += 1) {
//     reversed[length - 1 - i] = inputForReversal[i];
//     // reversed[i] = inputForReversal[length - 1 - i];
//   }

//   return reversed;
// }

// function reverseString(inputForReversal) {
//   const stringArray = inputForReversal.split('');
//   return reverseArray(stringArray).join('');
// }

// console.log(reverse('Hello'));           // "olleH"
// console.log(reverse('a'));               // "a"
// console.log(reverse([1, 2, 3, 4]));      // [4, 3, 2, 1]
// console.log(reverse([]));                // []

// const array = [1, 2, 3];
// console.log(reverse(array));             // [3, 2, 1]
// console.log(array);                      // [1, 2, 3]

// function shift(arr) {
//   if (arr.length === 0) return undefined;
//   let first = arr[0];
//   for (let index = 0; index < arr.length; index += 1) {
//     arr[index] = arr[index + 1];
//   }
//   arr.length -= 1;
//   return first;
// }

// function unshift(arr, ...items) {
//   let shiftAmount = items.length;
//   for (let index = arr.length - 1; index >= 0; index -= 1) {
//     arr[index + shiftAmount] = arr[index];
//   }

//   for (let index = 0; index < shiftAmount; index += 1) {
//     arr[index] = items[index];
//   }

//   return arr.length;
// }


// console.log(shift([1, 2, 3]));                // 1
// console.log(shift([]));                       // undefined
// console.log(shift([[1, 2, 3], 4, 5]));        // [1, 2, 3]

// console.log(unshift([1, 2, 3], 5, 6));        // 5
// console.log(unshift([1, 2, 3]));              // 3
// console.log(unshift([4, 5], [1, 2, 3]));      // 3

// const testArray = [1, 2, 3];
// console.log(shift(testArray));                // 1
// console.log(testArray);                       // [2, 3]
// console.log(unshift(testArray, 5));           // 3
// console.log(testArray);                       // [5, 2, 3]


// function slice(array, begin, end) {
//   let length = array.length;
//   if (begin > length) {
//     begin = length;
//   } else if (end > length) {
//     end = length;
//   }

//   let newArr = [];

//   for (let index = begin; index < end; index += 1) {
//     newArr.push(array[index]);
//   }

//   return newArr;
// }

// // console.log(slice([1, 2, 3], 1, 2));               // [2]
// // console.log(slice([1, 2, 3], 2, 0));               // []
// // console.log(slice([1, 2, 3], 5, 1));               // []
// // console.log(slice([1, 2, 3], 0, 5));               // [1, 2, 3]

// // const arr1 = [1, 2, 3];
// // console.log(slice(arr1, 1, 3));                     // [2, 3]
// // console.log(arr1);                                  // [1, 2, 3]

// function splice(array, start, deleteCount, ...args) {
//   let length = array.length;
//   if (start > length) {
//     start = length;
//   }
//   if (deleteCount > length - start) {
//     deleteCount = length - start;
//   }
//   let deleted = [];
//   if (args.length === 0) {
//     let counter = deleteCount;

//     // delete or replace
//     for (let index = start; counter > 0; index += 1) {
//       deleted.push(array[index]);
//       counter -= 1;
//     }
//     for (let index = start + deleteCount; index < array.length; index += 1) {
//       array[index - deleteCount] = array[index];
//     }

//     array.length = length - deleteCount;

//   } else {
//     args.forEach(item => {
//       if (deleteCount > 0) {
//         if (start < array.length) {
//           deleted.push(array[start]);
//         }
//         array[start] = item;
//         start += 1;
//       } else {
//         // const arr5 = [1, 2, 3];
//         // console.log(splice(arr5, 0, 0, 'a'));
//         let counter = start;
//         for (let index = args.length + length - 1; index > start; index -= 1 ){
//           console.log(index);
//           array[index] = array[counter + args.length + 1];
//           counter -= 1;
//         }
//         array[start] = item;
//         start += 1;
//       }
//     })
    
//   }
  
//   return deleted;
// }

// function replace(array, start, deleteCount, ...args) {
  
// }
// // 0 1 2 3 4
// // 1 2 3 4 5
// // splice(arr, 2, 2)
// // splice(arr, 1, 0, 6)
// // [3,4]

// // console.log(splice([1, 2, 3, 4, 5], 2, 2));              // [3, 4]
// // console.log(splice([1, 2, 3], 1, 2));              // [2, 3]
// // console.log(splice([1, 2, 3], 1, 3));              // [2, 3]
// // console.log(splice([1, 2, 3], 1, 0));              // []
// // console.log(splice([1, 2, 3], 0, 1));              // [1]
// // console.log(splice([1, 2, 3], 1, 0, 'a'));         // []

// // const arr2 = [1, 2, 3];
// // console.log(splice(arr2, 1, 1, 'two'));             // [2]
// // console.log(arr2);                                  // [1, "two", 3]

// // const arr3 = [1, 2, 3];
// // console.log(splice(arr3, 1, 2, 'two', 'three'));    // [2, 3]
// // console.log(arr3);                                  // [1, "two", "three"]

// const arr4 = [1, 2, 3];
// console.log(splice(arr4, 1, 0));                    // []
// console.log(splice(arr4, 1, 0, 'a'));               // []
// console.log(arr4);                                  // [1, "a", 2, 3]

// const arr5 = [1, 2, 3];
// console.log(splice(arr5, 0, 0, 'a'));               // []
// console.log(arr5);                                  // ["a", 1, 2, 3]


function oddities(array) {
  const oddElements = [];

  for (let i = 0; i < array.length; i += 2) {
    oddElements.push(array[i]);
  }
  console.log('hello');
  return oddElements;
}
  
// oddities([2, 3, 4, 5, 6]) === [2, 4, 6];      // false
// oddities(['abc', 'def']) === ['abc'];         // false


function areArraysEqual(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }

  const elementCounts = {};
  const elementCounts2 = {};
  for (let index = 0; index < array1.length; index += 1) {
    if (array1.includes(array2[index])) {
      if (elementCounts[array1[index]]) {
        elementCounts[array1[index]] += 1;
      } else {
        elementCounts[array1[index]] = 1;
      }
    } else {
      return false
    }
    
    if (array2.includes(array1[index])) {
      if (elementCounts2[array2[index]]) {
        elementCounts2[array2[index]] += 1;
      } else {
        elementCounts2[array2[index]] = 1;
      }
    } else {
      return false;
    }
  }
  for (let key in elementCounts) {
    if (elementCounts[key] !== elementCounts2[key]) {
      return false;
    }
  }
   
 return true;
}

console.log(areArraysEqual([1, 2, 3], [1, 2, 3]) === true);                  // true
console.log(areArraysEqual([1, 2, 3], [3, 2, 1]) === true);                  // true
console.log(areArraysEqual(['a', 'b', 'c'], ['b', 'c', 'a']) === true);      // true
console.log(areArraysEqual(['1', 2, 3], [1, 2, 3]) === false);                // false
console.log(areArraysEqual([1, 1, 2, 3], [3, 1, 2, 1]) === true);            // true
console.log(areArraysEqual([1, 2, 3, 4], [1, 1, 2, 3]) === false);            // false
console.log(areArraysEqual([1, 1, 2, 2], [4, 2, 3, 1]) === false);       // false
console.log(areArraysEqual([1, 1, 2], [1, 2, 2]) === false);                  // false
console.log(areArraysEqual([1, 1, 1], [1, 1]) === false);                     // false
console.log(areArraysEqual([1, 1], [1, 1]) === true);                        // true
console.log(areArraysEqual([1, '1'], ['1', 1]) === true);                    // true

