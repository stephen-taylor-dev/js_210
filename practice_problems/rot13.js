/*
Problem:
Input: string
Output: output ciphered strnig
if it is a letter change it
loop over to start of alphabet if reached the end

preserve case
ignore non letters



Examples:
Teachers open the door, but you must enter by yourself.'
Grnpuref bcra gur qbbe, ohg lbh zhfg ragre ol lbhefrys.

Data Structures:



Algorithm:
initialize a new string
loop over string char by char
  if char is a uppercase or lowercase letter
    if char is uppercase range from 65-90 inclusive
    OR if char is lowercase range from 97 - 122 inclusive
      get the value 13 letters away
        if 13 + letter ascii value
          is greater than 97 or 122
            subtract 97 or 122 from 13
              get char for that

else
  append char to the new string

return the new string



*/

// Global Rotation amount and Number of letters in alphabet
const ROTATION = 13;
const NUM_LETTERS = 26;


// Check if char is an upper letter based off ascii value
function isUppercaseLetter(ascii) {
  return ascii >= 'A'.charCodeAt(0) && ascii <= 'Z'.charCodeAt(0);
}

// Check if char is a lowercase letter based off ascii value
function isLowercaseLetter(ascii) {
  return ascii >= 'a'.charCodeAt(0) && ascii <= 'z'.charCodeAt(0);
}

// Check if char is a letter based off ascii value
function isLetter(ascii) {
  return isUppercaseLetter(ascii) || isLowercaseLetter(ascii);
}

// Check if letter will loop beyond its required range
function isLoopingLetter(orgAscii, newAscii){
  return ((isUppercaseLetter(orgAscii) && newAscii > 'Z'.charCodeAt(0)) ||
         (isLowercaseLetter(orgAscii) && newAscii > 'z'.charCodeAt(0)))
}


function rot13(string) {
  let cipheredString = '';
  for (let index = 0; index < string.length; index += 1) {
    let ascii = string.charCodeAt(index);

    if (isLetter(ascii)) {
      let orgAscii = ascii;
      ascii += ROTATION;

      if (isLoopingLetter(orgAscii, ascii))  {
        ascii -= NUM_LETTERS;
      }
    }

    cipheredString += String.fromCharCode(ascii);
  }

  return cipheredString;
}


console.log(rot13('Teachers open the door, but you must enter by yourself.'));
console.log(rot13('Teachers open the door, but you must enter by yourself.') === 'Grnpuref bcra gur qbbe, ohg lbh zhfg ragre ol lbhefrys.');
console.log(rot13('I would 33 like, to request +!!@ a code --&*((*@review for my solution for the Rot13 Cipher problem.') === 'V jbhyq 33 yvxr, gb erdhrfg +!!@ n pbqr --&*((*@erivrj sbe zl fbyhgvba sbe gur Ebg13 Pvcure ceboyrz.');
console.log(rot13(rot13('Teachers open the door, but you must enter by yourself.')));

