/* 
p
input: string and number or nul or empty data
output string or undefined

expect number to be integer

e
repeat('abc', 1);       // "abc"
repeat('abc', 2);       // "abcabc"
repeat('abc', -1);      // undefined
repeat('abc', 0);       // ""
repeat('abc', 'a');     // undefined
repeat('abc', false);   // undefined
repeat('abc', null);    // undefined
repeat('abc', '  ');    // undefined


d
string
undefined


a
if times is null, false, < 0, not a number
return undefined

initialize output string ""

if times equals 0
  return ""

loop from 1 to n times 
  concatenate string with iteself

return output string


*/ 

function repeat(string, times) {
  if (Number.isInteger(times) && times >= 0) {
    let repeatedString = '';
    for (let index = 0; index < times; index += 1) {
      repeatedString += string;
    } 

    return repeatedString;
  } else {
    return undefined;
  }
}


console.log(repeat('abc', 1));       // "abc"
console.log(repeat('abc', 2));       // "abcabc"
console.log(repeat('abc', -1));      // undefined
console.log(repeat('abc', 0));       // ""
console.log(repeat('abc', 'a'));     // undefined
console.log(repeat('abc', false));   // undefined
console.log(repeat('abc', null));    // undefined
console.log(repeat('abc', '  '));    // undefined