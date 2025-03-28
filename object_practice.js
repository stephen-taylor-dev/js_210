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

console.log(wordCount('box car cat bag box'));  // { box: 2, car: 1, cat: 1, bag: 1 }