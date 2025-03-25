/*

p
input: string, number, number
output: output new string



e
hello world

let string = 'hello world';

substring(string, 2, 4);    // "ll"
substring(string, 4, 2);    // "ll"
substring(string, 0, -1);   // ""
substring(string, 2);       // "llo world"
substring(string, 'a');     // "hello world"
substring(string, 8, 20);   // "rld"


d
strings
number

a
if both positive integers
  if start < end
    if start and end is within string boundries
      return substring up to but not indlucind start to end
  if start greater end
    swap start and end
    return substring up to but not indlucind start to end

  if start equal end
    return empty string

  if end is not given
    return start up end of string

if start or end less 0 or NaN treat as 0
if either start or end is greater than string length
  treat is as equl to string length


*/


function substring(string, start, end) {
  if (end === undefined) {
    end = string.length;
  }

  if (start > end) {
    let temp = start;
    start = end;
    end = temp;
  }

  if (start > string.length) {
    start = string.length;
  }

  if (end > string.length) {
    end = string.length;
  }

  if (start < 0 || isNan(start)) {
    start = 0;
  }

  if (end < 0 || end(start)) {
    end = 0;
  }
    
  let newString = '';
  for (let index = start; index < end; index += 1) {
    newString += string[index];
  }

  return newString;
}


let string = 'hello world';

console.log(substring(string, 2, 4));    // "ll"
console.log(substring(string, 4, 2));    // "ll"
console.log(substring(string, 0, -1));   // ""
console.log(substring(string, 2));       // "llo world"
console.log(substring(string, 'a'));     // "hello world"
console.log(substring(string, 8, 20));   // "rld"