function push(arr, value) {
  arr[arr.length] = value;
  return arr.length;
}

// let count = [0, 1, 2];
// console.log(push(count, 3));         // 4
// console.log(count); 


function pop(arr) {
  if (arr.length === 0) {
    return undefined;
  }

  let last = arr[arr.length - 1 ]
  arr.length = arr.length - 1;
  return last;
}

// let count = [1, 2, 3]; 1,2,2,3
// console.log(pop(count));             // 3
// console.log(count);                  // [ 1, 2 ]

function unshift(arr, value) {
  for (let index = arr.length; index > 0; index -= 1) {
    arr[index] = arr[index - 1];
  }
  arr[0] = value;
  return arr.length;
}

// let count = [1, 2, 3];
// console.log(unshift(count, 0));      // 4
// console.log(count);                  // [ 0, 1, 2, 3 ]


function shift(arr) {
  if (arr.length === 0) {
    return undefined;
  }

  let element = arr[0];

  for (let index = 0; index < arr.length - 1; index += 1) {
    console.log(index);
    arr[index] = arr[index + 1];
  }
  arr.length = arr.length - 1;
  return element;
}

// let count = [1, 2, 3];
// console.log('shifted', shift(count));           // 1
// console.log(count);                  // [ 2, 3 ]


function indexOf(arr, value) {
  for (let index = 0; index < arr.length; index += 1) {
    if (arr[index] === value) {
      return index;
    }
  }

  return -1;
}

// console.log(indexOf([1, 2, 3, 3], 3));         // 2
// console.log(indexOf([1, 2, 3], 4));            // -1


function lastIndexOf(arr, value) {
  for (let index = arr.length - 1; index >= 0; index -= 1) {
    if (arr[index] === value) {
      return index;
    }
  }

  return -1;
}

// console.log(lastIndexOf([1, 2, 3, 3], 3));     // 3
// console.log(lastIndexOf([1, 2, 3], 4));      // -1



function slice(arr, start, stop) {
  let slicedArr = [];

  for (let index = start; index < stop; index += 1) {
    push(slicedArr, arr[index]);
  }

  return slicedArr
}

// console.log(slice([1, 2, 3, 4, 5], 0, 2));                      // [ 1, 2 ]
// console.log(slice(['a', 'b', 'c', 'd', 'e', 'f', 'g'], 1, 3));  // [ 'b', 'c' ]

function splice(arr, start, amount) {
  let newArr = [];

  for (let index = start; index < start + amount; index += 1 ) {
    push(newArr, arr[index]);
    arr[index] = arr[index + amount];
  }
  arr.length = arr.length - newArr.length;
  return newArr;
}

// let count = [1, 2, 3, 4, 5, 6, 7, 8];
// console.log(splice(count, 2, 5));                   // [ 3, 4, 5, 6, 7 ]
// console.log(count);                                 // [ 1, 2, 8 ]

function concat(arr1, arr2) {
  let newArr = [];

  for (let index = 0; index < arr1.length; index += 1) {
    push(newArr, arr1[index]);
  }

  for (let index = 0; index < arr1.length; index += 1) {
    push(newArr, arr2[index]);
  }

  return newArr;
}

// console.log(concat([1, 2, 3], [4, 5, 6]));       // [ 1, 2, 3, 4, 5, 6 ]


function join(arr, string) {
  let outputString = '';

  for (let index = 0; index < arr.length; index += 1) {
    outputString += String(arr[index]);
    
    if (index < arr.length - 1) {
      outputString += string
    }
  }

  return outputString;
}

// console.log(join(['bri', 'tru', 'wha'], 'ck '));       // 'brick truck wha'
// console.log(join([1, 2, 3], ' and '));                 // '1 and 2 and 3'


function arraysEqual(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  for(let index = 0; index < arr1.length; index += 1) {
    if (arr1[index] !== arr2[index]) {
      return false;
    }
  }

  return true;
}

// console.log(arraysEqual([1], [1]));                               // true
// console.log(arraysEqual([1], [2]));                               // false
// console.log(arraysEqual([1, 2], [1, 2, 3]));                      // false
// console.log(arraysEqual([1, 'hi', true], [1, 'hi', true]));       // true
// console.log(arraysEqual([1, 'hi', true], [1, 'hi', false]));      // false
// console.log(arraysEqual([1, 'hi', true], [1, 'hello', true]));    // false
// console.log(arraysEqual([1, 'hi', true], [2, 'hi', true]));       // false


function firstElementOf(arr) {
 return arr[0];
}

// console.log(firstElementOf(['U', 'S', 'A']));  // returns "U"

function lastElementOf(arr) {
  return arr[arr.length - 1];
 }
 
//  console.log(lastElementOf(['U', 'S', 'A']));

function nthElementOf(arr, index) {
  return arr[index];
}

// let digits = [4, 8, 15, 16, 23, 42];

// console.log(nthElementOf(digits, 3));   // returns 16
// console.log(nthElementOf(digits, 8));   // what does this return?
// console.log(nthElementOf(digits, -1));  // what does this return?

function firstNOf(arr, count) {
  return arr.slice(0, count);
}

// let digits = [4, 8, 15, 16, 23, 42];
// console.log(firstNOf(digits, 3));    // returns [4, 8, 15]


function lastNOf(arr, count) {
  return arr.slice(-count);
  // return arr.slice(arr.length - count);
}

function lastNOfRefactor(arr, length) {
  let index = arr.length - length;

  if (index < 0) {
    index = 0;
  }

  return arr.slice(index);
}

// let digits = [4, 8, 15, 16, 23, 42];
// console.log(lastNOfRefactor(digits, 8));    // returns [4, 8, 15, 16, 23, 42]


// console.log(lastNOf(digits, 9));    // returns [16, 23, 42]

function endsOf(beginningArr, endingArr) {
  return [beginningArr[0], endingArr[endingArr.length - 1]];
}

console.log(endsOf([4, 8, 15], [16, 23, 42]));  // returns [4, 42]

