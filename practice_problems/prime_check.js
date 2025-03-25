/* 
p
input number
output boolean

e
isPrime(1);   // false
isPrime(2);   // true
isPrime(3);   // true
isPrime(43);  // true
isPrime(55);  // false
isPrime(0);   // false

d
number

a
return false if input 0 or 1
loop from 2 to the  square root of the input
check if input is divisible by counter
break if not return false

otherwise return true

*/

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

console.log(isPrime(1));   // false
console.log(isPrime(2));   // true
console.log(isPrime(3));   // true
console.log(isPrime(43));  // true
console.log(isPrime(55));  // false
console.log(isPrime(0));   // false