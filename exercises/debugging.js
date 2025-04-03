// function randomGreeting() {
//   const words = ['Hello', 'Howdy', 'Hi', 'Hey there', 'What\'s up',
//                'Greetings', 'Salutations', 'Good to see you'];

//   const idx = Math.floor(Math.random() * words.length);

//   return words[idx];
// }

// function greet(...args) {
//   const names = Array.prototype.slice.call(args);

//   for (let i = 0; i < names.length; i++) {
//     const name = names[i];
//     const greeting = randomGreeting();

//     console.log(`${greeting}, ${name}!`);
//   }
// }

// greet('Hannah', 'Jose', 'Beatrix', 'Julie', 'Ian');

// function includesFalse(list) {
//   for (let i = 0; i < list.length; i++) {
//     let element = list[i];

//     if (element === false) {
//       return true;
//     }
//   }

//   return false;
// }
//                                                                   // retuVns:
// console.log(includesFalse([8, null, 'abc', true, 'launch', 11, false]));       // true
// console.log(includesFalse(['programming', undefined, 37, 64, true, 'false'])); // false
// console.log(includesFalse([9422, 'lambda', true, 0, '54', null]));             // true
// 

// function placeABet(guess) {
//   let generateRandomInt = (function generateRandomInt() {
//     return Math.floor(Math.random() * 25) + 1;
//   });

//   const winningNumber = generateRandomInt();

//   console.log(winningNumber)
//   if (guess < 1 || guess > 25) {
//     return 'Invalid guess. Valid guesses are between 1 and 25.';
//   }

//   if (guess === winningNumber) {
//     return "Congratulations, you win!";
//   } else {
//     return "Wrong-o! You lose.";
//   }
// }

// // const userGuess = parseInt(prompt('Input a guess between 1-25'), 10);
// console.log(placeABet(10));


// function wantToVisit(museum, city) {
//   return (museum.includes('Computer') || museum.includes('Science')) 
//   || ((museum.includes('Modern') && museum.includes('Art')) 
//   && (city === 'Amsterdam' || museum.includes('Andy Warhol')));
// }
//   // if (museum.includes('Computer') || museum.includes('Science')) {
//   //   return true;
//   // } else if (museum.includes('Modern') && museum.includes('Art') && city === 'Amsterdam') {
//   //   return true;
//   // } else if (museum.includes('Modern') && museum.includes('Art') && museum.includes('Andy Warhol')) {
//   //   return true;
//   // } else {
//   //   return false;
//   // }
// // }



// // Tests (should all print 'true')

// console.log(1,wantToVisit('Computer Games Museum', 'Berlin') === true);
// console.log(2,wantToVisit('National Museum of Nature and Science', 'Tokyo') === true);
// console.log(3,wantToVisit('Museum of Modern Art', 'New York') === false);
// console.log(4,wantToVisit('El Paso Museum of Archaeology', 'El Paso') === false);
// console.log(5,wantToVisit('NEMO Science Museum', 'Amsterdam') === true);
// console.log(6,wantToVisit('National Museum of Modern Art', 'Paris') === false);
// console.log(7,wantToVisit('Andy Warhol Museum of Modern Art', 'Medzilaborce') === true);
// console.log(8,wantToVisit('Moco: Modern Contemporary Art', 'Amsterdam') === true);
// console.log(9,wantToVisit('Van Gogh Museum', 'Amsterdam') === false);
// console.log(10,wantToVisit('Andy Warhol Museum', 'Melbourne') === false);


// const species = ['wolf', 'human', 'wasp', 'squirrel', 'weasel', 'dinosaur'];
// const isMidnight = true;
// const isFullmoon = true;

// function isTransformable(species) {
//   return species[0] === 'w';
// }

// function transform(species) {
//   return `were${species}`;
// }

// for (let index = 0; index < species.length; index++) {
//   const thisSpecies = species[index];
//   let newSpecies;

//   if (isMidnight && isFullmoon && isTransformable(thisSpecies)) {
//     newSpecies = transform(thisSpecies);
//   }

//   if (newSpecies) {
//     console.log(`Beware of the ${newSpecies}!`);
//   }
// }

// Roles (salary still to be determined)

// const ceo = {
//   tasks: ['company strategy', 'resource allocation', 'performance monitoring'],
//   salary: 0,
// };

// const developer = {
//   tasks: ['turn product vision into code'],
//   salary: 0,
// };

// const scrumMaster = {
//   tasks: ['organize scrum process', 'manage scrum teams'],
//   salary: 0,
// };

// // Team -- we're hiring!

// const team = {};

// team.ceo = 'Kim';
// team.scrumMaster = 'Alice';
// team.developer = undefined;

// const company = {
//   name: 'Space Design',
//   team,
//   projectedRevenue: 500000,
// };
// console.log(team)

// console.log(`----{ ${company.name} }----`);
// console.log(`CEO: ${company.team.ceo}`);
// console.log(`Scrum master: ${company.team.scrumMaster}`);
// console.log(`Projected revenue: $${company.projectedRevenue}`);

// // ----{ Space Design }----
// // CEO: undefined
// // Scrum master: undefined
// // Projected revenue: $500000V
// 

// The shopping cart is a list of items, where each item
// is an object { name: <string>, amount: <number> }.
let shoppingCart = [];

// Currently available products with prices.
// const prices = {
//   'notebook': 9.99,
//   'pencil': 1.70,
//   'coffee': 3.00,
//   'smoothie': 2.10,
// };

// function price({name}) {
//   console.log({name})
//   return prices[name];
// }

// // Adding an item to the shopping cart.
// // The amount is optional and defaults to 1.
// // If the item is already in the cart, its amount is updated.
// function updateCart(name, amount = 1) {
//   let alreadyInCart = false;

//   for (let i = 0; i < shoppingCart.length; i += 1) {
//     let item = shoppingCart[i];

//     if (item.name === name) {
//       item.amount = amount;
//       alreadyInCart = true;
//       break;
//     }
//   }

//   if (!alreadyInCart) {
//     shoppingCart.push({ name, amount });
//   }
// }

// // Calculating the price for the whole shopping cart.
// function total() {
//   let total = 0;

//   for (let i = 0; i < shoppingCart.length; i += 1) {
//     let item = shoppingCart[i];
//     total += (item.amount * price(item));
//   }

//   return total.toFixed(2);
// }

// function pay() {
//   // omitted

//   console.log(`You have been charged $${total()}.`);
// }

// function checkout() {
//   pay();
//   shoppingCart = [];
// }

// // Example purchase.

// updateCart('notebook');
// updateCart('pencil', 2);
// updateCart('coffee', 1);

// // Oh wait, I don't need pencils
// updateCart('pencil', 0);

// checkout();
// // You have been charged $14.69.


const totalPages = 364;
let energy = 100;
let currentPage = 1;

function read() {

  while (energy > 0 && currentPage < totalPages) {
    currentPage += 1;
    energy -= (5 + currentPage * 0.1);
  }

  console.log(`Made it to page ${String(currentPage)}.`);

  // Drink a cup of coffee.
  energy = 100;

  // Continue reading.
  if (currentPage < totalPages) {
    read();
  } else {
    console.log('Done!');
  }
}

read();