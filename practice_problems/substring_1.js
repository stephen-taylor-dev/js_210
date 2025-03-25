/* 

p 
input: string, integer start, integer length
output: substring

negative start index treat like length - the negative index
length less than or equal to 0 returns empty string

e
let string = 'hello world';
substr(string, 2, 4);      // "llo "
substr(string, -3, 2);     // "rl"
substr(string, 8, 20);     // "rld"
substr(string, 0, -20);    // ""
substr(string, 0, 0);      // ""


d
strings
numbers

a
initialize output string
get start index 

loop from start index until the supplied length
  append each char to outptu string

return output string



*/


function substr(string, start, length) {
  let output = '';
  let index = start >= 0 ? start : string.length + start

  let counter = 0;
  while (counter < length) {
    if (string[index] === undefined) {
      break;
    }

    output += string[index];
    index += 1;
    counter += 1;
  }
  
  return output;
}

let string = 'hello world';
console.log(substr(string, 2, 4));      // "llo "
console.log(substr(string, -3, 2));     // "rl"
console.log(substr(string, 8, 20));     // "rld"
console.log(substr(string, 0, -20));    // ""
console.log(substr(string, 0, 0));