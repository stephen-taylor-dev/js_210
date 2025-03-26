function lastInArray(arr) {
  return arr[arr.length - 1];
}

let a = [1,2,3,4,5];
console.log(lastInArray(a));

function rollCall(arr) {
  for (let index = 0; index < arr.length; index += 1) {
    console.log(arr[index]);
  }
}

let names = ['bob', 'john', 'james'];
rollCall(names);


function reverseArr(arr) {
  let newArr = [];
  for (let index = arr.length - 1; index >= 0; index -= 1) {
    newArr.push(arr[index]);
  }

  return newArr;
}


console.log(reverseArr(a));

function arrContents(arr) {
  let content = '';
  for (let index = 0; index < arr.length; index += 1) {
    content += arr[index];
  }

  return content;
}

console.log(arrContents(a));
console.log(arrContents(names));