/*
p
input: string
output: lowercase string

e
toLowerCase('ALPHABET');    // "alphabet"
toLowerCase('123');         // "123"
toLowerCase('abcDEF');      // "abcdef"


d
string
numbers

a
initialze new output string
loop over input string
if char is from 65 to 90
  convert to lowercase
else
  simply add it

return string
*/


function toLowerCase(string) {
  let lowerString = '';

  for (let index = 0; index < string.length; index += 1) {
    // let char = string[index];
    // let asciiNumeric = char.charCodeAt(0);
    let asciiNumeric = string.charCodeAt(index);
    
    if (asciiNumeric >= 65 && asciiNumeric <= 90) {
      asciiNumeric += 32;
    }

    lowerString += String.fromCharCode(asciiNumeric);
  }

  return lowerString;
}

console.log(toLowerCase('ALPHABET'));    // "alphabet"
console.log(toLowerCase('123'));         // "123"
console.log(toLowerCase('abcDEF'));  