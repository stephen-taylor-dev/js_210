/*
PEDAC

Problem:

  Input: Integer

  Output: Log odd values from 1 to input integer to console

  If passed in number it would need to log the next lowest odd number
  Each number should be logged on separate line

Examples
19 ->
1
3
5
7
9
11
13
15
17
19

Data Structure
Integer


Algorithm
Loop from 1 to input
increment 2 at a time to get odd numbers
break if counter is greater than input


*/

function logOddNumbers(num) {
  for (let i = 1; i <= num; i += 2) {
    console.log(i);
  }
}


// logOddNumbers(19);
logOddNumbers(20);

