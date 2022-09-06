//Ask the user for the first number.
//Ask the user for the second number.
//Ask the user for an operation to perform
//Perform the operation on the two numbers.
//Print the result to the terminal.
const MESSAGES = require('./calculator_messages.json');


const rlSync = require('readline-sync');

function prompt(message) {
  console.log(`=> ${message}`);
}

function invalid(num) {
  return num.trimStart() === '' || Number.isNaN(Number(num));
}

prompt(MESSAGES['welcome']);

while (true) {
prompt(MESSAGES['firstNum']);
let firstNum = rlSync.question();

while (invalid(firstNum)) {
  prompt(MESSAGES['numNotValid']);
  firstNum = rlSync.question();
}

prompt(MESSAGES['secondNum']);
let secondNum = rlSync.question();
while (invalid(secondNum)) {
  prompt(MESSAGES['numNotValid']);
  secondNum = rlSync.question();
}


prompt('What operation do you want to perform?\n1) Add 2) Subtract 3) Multiply 4) Divide');
let operation = rlSync.question();
while (!['1', '2', '3', '4'].includes(operation)) {
  prompt('Enter a valid operation!');
  operation = rlSync.question();
}

function doMath(a, b, op) {

  switch (op) {
    case '1':
      console.log(`${a} plus ${b} equals ${Number(a) + Number(b)}`);
      break;
    case '2':
      console.log(`${a} minus ${b} equals ${Number(a) - Number(b)}`);
      break;
    case '3':
      console.log(`${a} times ${b} equals ${Number(a) * Number(b)}`);
      break;
    case '4':
      console.log(`${a} divided by ${b} equals ${Number(a) / Number(b)}`);
      break;
  }
}


doMath(firstNum, secondNum, operation);

prompt(MESSAGES['runAgain']);
let answer = rlSync.question();

if (answer.toLowerCase() !== 'y') {
  prompt(MESSAGES['bye'])
  break 
};
}


