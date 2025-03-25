/* 

p
input integer
output square n by n size

can assume input is greater than 1
e
generatePattern(7);

// console output
1******
12*****
123****
1234***
12345**
123456*
1234567

d
numbers
strings


c
initialize counter at 1
do while lopo input arg times

output a string
loop over current iteration starting at 1
  string should start with 1 up to current ieration number chars
  followed by input - current iteration asterisks


*/

function generatePattern(nStars) {
  let counter = 1;
  let extraStars = nStars - 9;
  do {
    let line = '';
    for (let nums = 1; nums <= counter; nums += 1) {
      line += String(nums);
    }
  
    if (counter < 10) {
      line += '*'.repeat(nStars - counter + extraStars);
    } else {
      extraStars -= 1;
      line += '*'.repeat(nStars - counter + extraStars);
    }

    console.log(line);
    counter += 1;
  
  } while (counter <= nStars );
}

generatePattern(15);