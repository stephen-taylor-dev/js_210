/* 
P
iterate over numbers from 1 to 100


E

D


A
same as other 
except log all other numbers

*/



function fizzBuzz() {
  for (let num = 1; num <= 100; num += 1) {
    if ((num % 3 === 0) && (num % 5 === 0)) {
      console.log('FizzBuzz');
    } else if (num % 3 === 0) {
      console.log('Fizz');
    } else if (num % 5 === 0) {
      console.log('Buzz');
    }
    
    console.log(num);
  }
}


fizzBuzz();