/*
p 

input:
string

output:trimed string

e
trim('  abc  ');  // "abc"
trim('abc   ');   // "abc"
trim(' ab c');    // "ab c"
trim(' a b  c');  // "a b  c"
trim('      ');   // ""
trim('');         // ""



d
data structurs



a
initialize output string
initialize ending spaces
loop over string char by character
skip if char is space
if we found char add to new string
if space add to end space array
if found another charcter 
  append spaces and current char
  delete end spaces array


*/

function trim(string) {
  let trimmedString = '';
  let spaces = '';

  for (let index = 0; index < string.length; index += 1) {
    if (string[index] === ' ') {
      if (trimmedString.length > 0) {
        spaces += string[index];
      }
    } else {
      trimmedString += spaces;
      spaces = '';
      trimmedString += string[index];
    }
  }
  return trimmedString;
}

// console.log(trim('ab'));  // "abc"
console.log(trim('  abc  ') === "abc");  // "abc"
console.log(trim('abc   ') === "abc");   // "abc"
console.log(trim(' ab c') === "ab c");    // "ab c"
console.log(trim(' a b  c') === "a b  c");  // "a b  c"
console.log(trim('      ') === "");   // ""
console.log(trim('') === "");         // ""