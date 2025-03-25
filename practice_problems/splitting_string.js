/* 
p
input: string, delimter (string)
output: logs split strings onto console

if no delimiter output error and terminate program

e
splitString('abc,123,hello world', ',');
// logs:
// abc
// 123
// hello world

splitString('hello');
// logs:
// ERROR: No delimiter

splitString('hello', '');
// logs:
// h
// e
// l
// l
// o

splitString('hello', ';');
// logs:
// hello

splitString(';hello;', ';');
// logs:
//  (this is a blank line)
// hello

d
strings
possibly array


a 
if no delimeter arg provided log error mesage

initialize empty string for output
loop over string character by character
  if character equals delimeter log output string
  reset output string to empty





*/



function splitString(string, delimiter) {
  if (delimiter === undefined) {
    console.log('Error: No delimeter');
    return;
  }

  let phrase = '';
  for (let index = 0; index < string.length; index += 1) {
    if (delimiter === '') {
      console.log(string[index]);
    } if (string[index] === delimiter) {
      console.log(phrase);
      phrase = '';
    } else {
      phrase += string[index];
    }
  }
  if (phrase) {
    console.log(phrase);
  }
}

splitString('abc,123,hello world', ',');
// logs:
// abc
// 123
// hello world

splitString('hello');
// // logs:
// // ERROR: No delimiter

splitString('hello', '');
// // logs:
// // h
// // e
// // l
// // l
// // o

splitString('hello', ';');
// // logs:
// // hello

splitString(';hello;', ';');
// logs:
//  (this is a blank line)
// hello