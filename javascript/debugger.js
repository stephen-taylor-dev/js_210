// function hello(name) {
//   console.log('Hello, ' + name + '!');
// }

// function greetEveryone() {
//   var names = ['Darleen', 'Sam', 'Prasad', 'Ming'];

//   for (var i = 0; i < names.length; i++) {
//     var name = names[i];
//     hello(name);
//   }
// }

// greetEveryone();


const transactionLog = [];

function processInput(input) {
  const numericalData = parseFloat(input);

  if (Number.isNaN(numericalData)) {
    throw (new Error('Data could not be converted to numerical amount.'));
  }

  return numericalData;
}

function logTransaction() {
  let data = prompt('Please enter the transaction amount: ');

  try {
    data = processInput(data);
    transactionLog.push(data);

    alert('Thank you. Data accepted.');
  } catch (error) {
    alert(error.message);
  }
}

function transactionTotal() {
  let total = 0;

  for (let i = 0; i < transactionLog.length; i++) {
    total += transactionLog[i];
  }

  return total;
}

logTransaction();
logTransaction();
logTransaction();

console.log(transactionTotal());