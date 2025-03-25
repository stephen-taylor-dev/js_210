/* 
p
index of
  input 2 strings
  output integer (index of substring location)
  - 1 if substring not located in



e



d
strings
numbers



a
index of
initialze potential match string 
loop over first string
  if letter matches
    append to match string
    loop to the next char in substring and main string
  else
    reset match string
    got to next iteration
  if new string == subring
  return index





return -1





*/

function indexOf(firstString, secondString) {
  let match = '';
  let matchIndex = -1;

  let subIndex = 0;
  for (let mainIndex = 0; mainIndex < firstString.length; mainIndex += 1) {
    if (firstString[mainIndex] === secondString[subIndex]) {
      if (subIndex === 0) {
        matchIndex = mainIndex;
      }
      match += secondString[subIndex];
      subIndex += 1;
    } else {
      matchIndex = -1;
      match = ''; 
      subIndex = 0;
    }

    if (match === secondString) {
      return matchIndex;
    }
  }

  if (match === secondString) {
    return matchIndex;
  } else {
    return -1;
  }
}


function lastIndexOf(firstString, secondString) {
  let match = '';
  let matchIndex = -1;

  let subIndex = secondString.length - 1;
  for (let mainIndex = firstString.length - 1; mainIndex >= 0; mainIndex -= 1) {
    if (firstString[mainIndex] === secondString[subIndex]) {
      matchIndex = mainIndex;
      // if (subIndex === secondString.length - 1) {
      // }
      match += secondString[subIndex];
      subIndex -= 1;
    } else {
      matchIndex = -1;
      match = ''; 
      subIndex = secondString.length - 1;
    }

    if (match.length === secondString.length) {
      return matchIndex;
    }
  }

  if (match.length === secondString.length) {
    return matchIndex;
  } else {
    return -1;
  }
}

console.log(indexOf('Some strings', 's'));                      // 5
console.log(indexOf('Blue Whale', 'Whale'));                    // 5
console.log(indexOf('Blue Whale', 'Blute'));                    // -1
console.log(indexOf('Blue Whale', 'leB')); 


console.log(lastIndexOf('Some strings', 's'));                  // 11
console.log(lastIndexOf('Blue Whale, Killer Whale', 'Whale'));  // 19
console.log(lastIndexOf('Blue Whale, Killer Whale', 'all'));    // -1