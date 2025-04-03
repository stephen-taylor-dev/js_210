let pets = {
  cat: 'Simon',
  dog: 'Dwarf',
  mice: null,
};

// function objectHasProperty(object, string) {
//   for (let prop in object) {
//     if (string === prop) {
//       return true;
//     }
//   }

//   return false;
// }

function objectHasProperty(object, propertyName) {
  let keys = Object.keys(object);
  return keys.includes(propertyName);
}

// console.log(objectHasProperty(pets, 'dog'));       // true
// console.log(objectHasProperty(pets, 'lizard'));    // false
// console.log(objectHasProperty(pets, 'mice'));      // true

let wins = {
  steve: 3,
  susie: 4,
};


function incrementProperty(object, propertyName) {
  if (object[propertyName]) {
    object[propertyName] += 1;
  } else {
    object[propertyName] = 1;
  }

  return object[propertyName];
}
// console.log(incrementProperty(wins, 'susie'));   // 5
// wins;                               // { steve: 3, susie: 5 }
// console.log(incrementProperty(wins, 'lucy'));    // 1
// wins;                               // { steve: 3, susie: 5, lucy: 1 }


let hal = {
  model: 9000,
  enabled: true,
};

function copyProperties(object1, object2) {
  let count = 0;
  for (let prop in object1) {
    object2[prop] = object1[prop];
    count += 1;
  }
  
  return count;
}

// let sal = {};
// console.log(copyProperties(hal, sal));  // 2
// console.log(sal);                       // { model: 9000, enabled: true }

function wordCount(words) {
  words = words.split(" ");
  const object = {};
  for (let index = 0; index < words.length; index += 1) {
    incrementProperty(object, words[index]);
  }

  return object;
}

// console.log(wordCount('box car cat bag box'));  // { box: 2, car: 1, cat: 1, bag: 1 }


function greetings(...args) {
  let name = args[0].join(" ");
  let jobTitle = Object.values(args[1]).join(" ");
  console.log(`Hello, ${name}! Nice to have a ${jobTitle} around.`)
}

greetings(['John', 'Q', 'Doe'], { title: 'Master', occupation: 'Plumber' });

// console output
//Hello, John Q Doe! Nice to have a Master Plumber around.


/*

input string
output object with counts of each repeated character

ignores case
only returns characters that have 2 or more chars

string
object

loop over each character in the string
convert to lowercase
use current letter to add to object as key
increment the key by 1 

intialize output hash
loop over hash afer getting counts
add the key value pair to the new hash if the value is greater than 2
return output

*/

function repeatedCharacters(string) {
  string = string.toLowerCase();
  let chars = {};

  for (let index = 0; index < string.length; index += 1) {
    let char = string[index];
    
    if (chars[char]) {
      chars[char] += 1;
    } else {
      chars[char] = 1;
    }
  }

  for (let char in chars) {
    if (chars[char] < 2) {
      delete chars[char];
    }
  }

  return chars;
}

console.log(repeatedCharacters('Programming'));    // { r: 2, g: 2, m: 2 }
console.log(repeatedCharacters('Combination'));    // { o: 2, i: 2, n: 2 }
console.log(repeatedCharacters('Pet'));            // {}
console.log(repeatedCharacters('Paper'));          // { p: 2 }
console.log(repeatedCharacters('Baseless'));       // { s: 3, e: 2 }

function read(pages) {
  console.log('You started reading.');
  for (let page = 0; page < pages; page++) {
    let message = 'You read page ' + page;
    console.log(message);
  }
}

read(400);