// const person = { name: 'Victor' };
// const otherPerson = { name: 'Victor' };

// console.log(person.name === otherPerson.name);    // false -- expected: true
// 

// let startingBalance = 1;
// const chicken = 5;
// const chickenQuantity = 7;

// function totalPayable(item, quantity) {
//   return startingBalance + (item * quantity);
// }

// startingBalance = 5;
// console.log(totalPayable(chicken, chickenQuantity)); // 40

// startingBalance = 10;
// console.log(totalPayable(chicken, chickenQuantity)); // 45

// function makeDoubler(caller) {
//   return function doubler(number) {
//     console.log(`This function was called by ${caller}.`);
//     return number + number;
//   };
// }

// const doubler = makeDoubler('Victor');
// doubler(5);                             // returns 10
// logs:
// This function was called by Victor.
// 

// const languages = ['JavaScript', 'Ruby', 'Python'];
// console.log(languages); // ['JavaScript', 'Ruby', 'Python']
// console.log(languages.length); // 3

// languages.length = 4;
// console.log(languages); // ['JavaScript', 'Ruby', 'Python', <1 empty]
// console.log(languages.length); // 4

// languages.length = 1;
// console.log(languages); // ["Javascript"]
// console.log(languages.length); // 1

// languages.length = 3;
// console.log(languages); // ["javascript", <2 empty slots>]
// console.log(languages.length); // 3

// languages.length = 1;
// languages[2] = 'Python';
// console.log(languages); // ['Javascript', <1 empty slot>, 'Python',]
// console.log(languages[1]); // undefined
// console.log(languages.length); // 3V
// 

function one() {
  function log(result) {
    console.log(result);
  }

  function anotherOne(...args) {
    let result = '';
    for (let i = 0; i < args.length; i += 1) {
      result += String.fromCharCode(args[i]);
    }

    log(result);
  }

  function anotherAnotherOne() {
    console.log(String.fromCharCode(87, 101, 108, 99, 111, 109, 101));
    anotherOne(116, 111);
  }

  anotherAnotherOne();
  anotherOne(116, 104, 101);
  return anotherOne;
}

one()(77, 97, 116, 114, 105, 120, 33);


// Welcome
// to
// the
// Matrix!