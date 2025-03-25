/*
P
input: number
output: log number



E
17 // output (5x, 3x and 1x)
85
51
17

D
number

A
loop from 0 to 100 
calc multiple by multiplying input by loop iterator
log if its an odd number


*/


// function logMultiple(num) {
//   let highestMultiple = Math.floor(100 / num) * num 

//   for (let candidate = highestMultiple; candidate >= num; candidate -= 1) {
//     if (candidate % 2 === 1 && candidate % num === 0) {
//       console.log(candidate);
//     }
//   } 
// }

function logMultiple(num) {
  let highestMultiple = Math.floor(100 / num) * num 

  for (let candidate = highestMultiple; candidate >= num; candidate -= num) {
    if (candidate % 2 === 1) {
      console.log(candidate);
    }
  } 
}

logMultiple(17);