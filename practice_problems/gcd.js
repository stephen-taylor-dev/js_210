/* 
p
input: two numbers
output number

find gcd of number
excpet positive integers

e
gcd(12, 4);   // 4
gcd(15, 10);  // 5
gcd(9, 2);    // 1

d
numbers

a
find smaller arg 

intialized max divisor to 0

loop from 1 to value of smaller number
if both values are divisible by counter
and divisor greater current max 
ressaign max diviso

otherwise go to next loop

return max divisor



*/


// function gcd(num1, num2) {
//   let smallerNum = num1 > num2 ? num2 : num1;
//   let maxDivisor = 0;
  
//   for (let divisor = 1; divisor < smallerNum; divisor += 1) {
//     if (num1 % divisor === 0 && num2 % divisor === 0) {
//       if (divisor > maxDivisor) {
//         maxDivisor = divisor;
//       }
//     }
//   }

//   return maxDivisor;
// }


function gcd(arg1, arg2) {
  if (arg1 < arg2) {
    arg1, arg2 = arg2, arg1;
  }
  
  // let prevArg1 = arg1;
  let prevArg2;
  while (arg2 > 0) {
    prevArg2 = arg2;
    arg2 = arg1 % arg2;
    arg1 = prevArg2;
  }
  return arg1;

}

// arg2, arg1 mod arg2 until arg 1 = 0
// on each iteration arg 2 is assign modulos of arg1 with arg2
// arg1 is assigned the arg2 value

// (12,4) -> (4, 12 % 4) = (4, 0)

// (15, 10) -> (10, 15 % 10) = (10, 5)
//           -> (5, 10 % 5) = (5,0)

console.log(gcd(12, 4));   // 4
console.log(gcd(15, 10));  // 5
console.log(gcd(9, 2));    // 1