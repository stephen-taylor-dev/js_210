/* 

p
input: even integer
output: 2 numbers. prime numbers that sum to input
null if none do

e
3 -> null
4 -> 2, 2
12 -> 5, 7
100
// 3 97
// 11 89
// 17 83
// 29 71
// 41 59
// 47 53

d
numbers


a
loop from 1 to input
loop from input to 1

if both are prime output number


*/ 

function checkGoldbach(expectedSum) {
  let start = 2;
  let end = expectedSum - 2;
  let found = null;

  while (start <= expectedSum / 2 && end > 0) {
    if ((isPrime(start) && isPrime(end))) {
      found = true;
      console.log("output", start, end);
    }
    start += 1;
    end -= 1;
  }
  if (!found) {
    console.log(found);
  }
}



function isPrime(num) {
  if (num <= 1) {
    return false;
  }

  for (let divisor = 2; divisor <= Math.sqrt(num); divisor += 1) {
    if (num % divisor === 0) {
      return false
    } 
  }
  return true;
}

checkGoldbach(3);
// logs: null

// checkGoldbach(4);
// logs: 2 2

// checkGoldbach(12);
// logs: 5 7

checkGoldbach(100);
// logs:
// 3 97
// 11 89
// 17 83
// 29 71
// 41 59
// 47 53


// interesting solution
let isPrime = function(number) {
  if (number < 2) {
    return false;
  }

  for (let firstNumber = 2; firstNumber < number; firstNumber += 1) {
    if (number % firstNumber === 0) {
      return false;
    }
  }

  return true;
};

let checkGoldbach = function(expectedSum) {
  if (expectedSum < 4 || expectedSum % 2 === 1) {
    console.log(null);
    return;
  }

  let num1 = 1;
  let num2;

  do {
    num1 += 1;
    num2 = expectedSum - num1;
    if (isPrime(num1) && isPrime(num2)) {
      console.log(num1, num2);
    }

  } while (num1 !== num2);
};