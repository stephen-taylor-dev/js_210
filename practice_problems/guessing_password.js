/*
p 
inputs: user inputs
outputs: console messages

e
What is the password: 123
What is the password: opensesame
What is the password: letmein

You have been denied access.


What is the password: password
You have successfully logged in.

d
strings

a
loop 3 times or until user input matches password
if matched log success
after 3rd loop submit error message
terminate program


*/

const PASSWORD = 'password';
const input = require('readline-sync');

for (let attempt = 0; attempt < 3; attempt += 1) {
  let guess = input.question("What is the password: ");
  if (guess === PASSWORD) {
    console.log('You have successfully logged in.');
    break;
  }
}

console.log('You have been denied access.');