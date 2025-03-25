/* 
p
input : user input strings
output; consoel messages. average letter grade

assume valid inputs


e
90
50
78

returns B

d
strings
numbers

a
get 3 inputs from user
convert each inptu to number or integer
add each to an array

sum the array
find average of grades

conditoinal check to find grades

output string with letter grade


*/


let input = require('readline-sync');
let grades = [];
let totalGrades = Number(input.question(`Enter total number of grades: `))

while (grades.length < totalGrades) {
  let grade = Number(input.question(`Enter score ${grades.length + 1}: `));
  grades.push(grade);
}

let gradeAverage = average(grades);

let letterGrade = 'F';
if (gradeAverage >= 90) {
  letterGrade = 'A';
} else if (gradeAverage >= 70) {
  letterGrade = 'B';
} else if (gradeAverage >= 50) {
  letterGrade = 'C';
}

console.log(`Based on the average of your ${grades.length} scores your letter grade is ${letterGrade}.`)


function average(grades) {
  let sum = grades.reduce((acc, grade) => acc + grade, 0);
  return sum / grades.length;
}