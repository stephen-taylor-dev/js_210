/* 
P
non input
log numbers

1 to 100
Log if multiple of 3 or 5
if multiple of both append "!"

E
'3'
'5'
'6'
'9'
'10'
'12'
'15!'

D
numbers

A
use for loop increment from 1 to 100 
increment by 1
break if counter greater than 100

if multiple of both 3 and 5 
log counter with !

if multiple of 3 
log counter

if multiple of 5 
log counter

multiple of 3 or 5

*/


function multiplesOfThreeAndFive() {
  for (let num = 1; num <= 100; num += 1) {
    if ((num % 3 === 0) && (num % 5 === 0)) {
      console.log(num + '!');
    } else if (num % 3 === 0) {
      console.log(num);
    } else if (num % 5 === 0) {
      console.log(num);
    }
  }
}

multiplesOfThreeAndFive();