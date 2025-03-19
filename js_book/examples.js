// function evenOrOdd(number) {
//     if (!Number.isInteger(number)) {
//         console.log("it's not a number");
//         return;
//     } else if (number % 2 === 0) {
//         console.log('even');
//     } else {
//         console.log('odd');
//     }
// }

// evenOrOdd(2);
// evenOrOdd(3);
// evenOrOdd(4);
// evenOrOdd(5);
// evenOrOdd(6);
// evenOrOdd(6.2);

// function foo() {
//     return true;
// }

// function blah() {
//     if (foo())
//         return "bar";   
//     else {
//         qux();
//     }
// }

// console.log(blah())

// function allCaps(string) {
//     return string.length > 10 ? string.toUpperCase() : string;
// }

// console.log(allCaps("hello world"));
// console.log(allCaps("goodbye"));


// function numberRange(num) {
//     if (num >= 0 && num <= 50) {
//         console.log(`${num} is between 0 and 50`)
//     } else if (num >= 51 && num <= 100) {
//         console.log(`${num} is between 51 and 100`)
//     } else if (num > 100) {
//         console.log(`${num} is greater than 100`)
//     }
//     else {
//         console.log(`${num} is less than 0`)
//     }
// }

// numberRange(25);
// numberRange(75);
// numberRange(125);
// numberRange(-25);

// function factorial(num) {
//     if (num === 1) return 1;
//     for (let factor = num; factor > 0; factor -= 1 ) {
//         num *= factor;
//     }
//     return num;
// }

// function factorial(number) {
//     let result = 1;
//     for (let counter = number; counter > 0; counter -= 1) {
//       result *= counter;
//     }
  
//     return result;
//   }

// recursive
// function factorial(number) {
//     if (number === 1) {
//         return number;
//     } 
//     return number * factorial(number - 1);
// }

// function factorial(counter, result = 1) {

//         if (counter == 1) {
//             return counter;
//         } 
//         result *= counter;
//         return factorial(counter - 1, result);
//     }



// console.log(factorial(1));     // => 1
// console.log(factorial(2));     // => 2
// console.log(factorial(3));     // => 6
// console.log(factorial(4));     // => 24
// console.log(factorial(5));     // => 120
// console.log(factorial(6));     // => 720
// console.log(factorial(7));     // => 5040
// console.log(factorial(8));     // => 40320

// for (let i = 0; i < 5;) {
//     console.log(i += 1);
//   }

// function randomNumberBetween(min, max) {
//     return Math.floor(Math.random() * (max - min + 1) + min);
//   }
  
//   let tries = 1;
//   let result;
  
//   while (result <= 2) {
//     result = randomNumberBetween(1, 6);
//     tries += 1;
//   }
  
//   console.log('It took ' + String(tries) + ' tries to get a number greater than 2');


// let myArray = [1, 3, 6, 11, 4, 2,
//     4, 9, 17, 16, 0];

// myArray.forEach(function(num) {
//     if (num % 2 === 0) {
//         console.log(num);
//     }
// });

// let myArray = [
//     [1, 3, 6, 11],
//     [4, 2, 4],
//     [9, 17, 16, 0],
//   ];

// myArray.forEach(function(arr) {
//     arr.forEach(function(num) {
//         if (num % 2 === 0) {
//             console.log(num);
//         }
//     });
// });

// let myArray = [
//     1, 3, 6, 11,
//     4, 2, 4, 9,
//     17, 16, 0,
//   ];

// let newArr = myArray.map(function(num) {
//     if (num % 2 === 0) {
//         return "even";
//     } else {
//         return "odd";
//     }
// });

// console.log(newArr);


// function findIntegers(arr) {
//     return arr.filter(function(item) {
//         return Number.isInteger(item);
//     });
// }


// let things = [1, 'a', '1', 3, NaN, 3.1415, -4, null, false];
// let integers = findIntegers(things);
// console.log(integers); // => [1, 3, -4]
 
// let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];


// function oddLengths(arr) {
//     return arr.map(function(element) {
//         return element.length;
//     }).filter(function(item) {
//         return item % 2 === 1;
//     });
// }

// console.log(oddLengths(arr)); // => [1, 5, 3]

// function sumOfSquares(arr) {
//     return arr.reduce((acc, element) => 
//         acc + (element ** 2), 0
//     );
// }

// let array = [3, 5, 7];
// console.log(sumOfSquares(array)); // => 83

// let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];


// function oddLengths(arr) {
//     return arr.map(function(element) {
//         return element.length;
//     }).filter(function(item) {
//         return item % 2 === 1;
//     });
// }

// console.log(oddLengths(arr)); // => [1, 5, 3]

// function oddLengths(arr) {
//     return arr.reduce(function (arr, item) {
//         if (item.length % 2 === 1) {
//              arr.push(item.length);
//         } 
//         return arr;
//     }, []);
// }

// let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];
// console.log(oddLengths(arr)); // => [1, 5, 3]

// let numbers1 = [1, 3, 5, 7, 9, 11];
// let numbers2 = [];
// let numbers3 = [2, 4, 6, 8];

// function foundThree(arr) {
//     found = false;
//     arr.forEach(item => {
//         if (item === 3) {
//             found = true;
//         }
//     });
//     return found;  
// }

// console.log(foundThree(numbers1));
// console.log(foundThree(numbers2));
// console.log(foundThree(numbers3));

// let arr = [
//     ["hello", "world"],
//     ["example", "mem", null, 6, 88],
//     [4, 8, 12]
//   ];

// console.log(arr[1][3]);

// arr[1][3] = 606;

// console.log(arr);

// let myArray = { 0: 'a', 1: 'b', 2: 'c', 3: 'e', length: 4
// };

// for (let i = 0; i < myArray.length; i += 1) {
//   console.log(myArray[i]);
// }

// let obj = {
//     b: 2,
//     a: 1,
//     c: 3,
//   };


// let keys = [];
// for (let key in obj) {
//     keys.push(key.toUpperCase());
// }

// console.log(keys);
// console.log(obj)


// let myProtoObj = {
//     foo: 1,
//     bar: 2,
//   };

// let myObj = Object.create(myProtoObj);
// myObj.qux = 3;

// let objKeys = Object.keys(myObj);
// objKeys.forEach(function(key) {
//   console.log(key);
// });

// console.log('next=========');

// for (let key in myObj) {
//     console.log(key);
//   }

// function copyObj(obj, keys = false) {
//     if (keys) {
//         let newObj = {};
//         keys.forEach(key => {
//             if (obj[key] !== 'undefined') {
//                 newObj[key] = obj[key];
//             }
//         });
//         return newObj;
//     } else {
//         return Object.assign({}, obj);
//     }
// }

// let objToCopy = {
//     foo: 1,
//     bar: 2,
//     qux: 3,
//   };
  
// let newObj = copyObj(objToCopy);
// console.log(newObj);        // => { foo: 1, bar: 2, qux: 3 }

// let newObj2 = copyObj(objToCopy, [ 'foo', 'qux' ]);
// console.log(newObj2);       // => { foo: 1, qux: 3 }

// let newObj3 = copyObj(objToCopy, [ 'bar' ]);
// console.log(newObj3);       // => { bar: 2 }

// let obj = {
//     foo: { a: "hello", b: "world" },
//     bar: ["example", "mem", null, { xyz: 6 }, 88],
//     qux: [4, 8, 12]
//   };

// console.log(obj.bar[3].xyz);
// obj.bar[3].xyz = 606
// console.log(obj.bar[3].xyz);


// function foo(bar) {
//     console.log(bar, bar, bar);
//   }
  
// let bar = foo;

// foo("hello"); // should print "hello hello hello"
// bar("hi");    // should print "hi hi hi"

// function foo(bar) {
//     console.log(bar());
//   }
// let bar = () => "Welcome";
// foo(bar);    // Should print 'Welcome'
// bar = () => "3.1415";
// foo(bar);    // Should print 3.1415
// bar = () => [1, 2, 3];
// foo(bar);    // Should print [1, 2, 3]


// console.log(Math.sqrt(37));

// function maxNum(arr) {
//     let max = arr[0]
//     arr.forEach(num => {
//         if (num > max) {
//             max = num;
//         }
//     });
//     return max;
// }

// console.log(maxNum([1, 6, 3, 2]));
// console.log(maxNum([-1, -6, -3, -2]));
// console.log(maxNum([2, 2]));

// let words = [
//     'laboratory',
//     'experiment',
//     'flab',
//     'Pans Labyrinth',
//     'elaborate',
//     'polar bear',
//   ];
  
// function allMatches(words, regex) {
//     return words.filter(word => {
//         return regex.test(word);
//     });
// }

// console.log(allMatches(words, /lab/)); // => ['laboratory', 'flab', 'elaborate']

// function isNotANumber(value) {
//     console.log(value);
//     return value !== NaN;
// }

// console.log(isNotANumber(5));
// console.log(isNotANumber(0/0));
// console.log(isNotANumber(10 + undefined));


function negativeZero(arg) {
    return 5 / arg === -Infinity;
}

console.log(negativeZero(-0));
console.log(negativeZero(0));
function negativeZero(arg) {
    return 5 / arg === -Infinity;
}