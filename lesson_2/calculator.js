//Ask the user for the first number.
//Ask the user for the second number.
//Ask the user for an operation to perform
//Perform the operation on the two numbers.
//Print the result to the terminal.

console.log('Welcome to Calculator!')

const rlSync = require('readline-sync')

let firstNum = Number(rlSync.question('What is your first number?\n'));
let secondNum = Number(rlSync.question('What is your second number?\n'));

let operation = rlSync.question('What operation do you want to perform?\n1) Add 2) Subtract 3) Multiply 4) Divide\n');

function doMath(a, b, op) {
  let operation = op.toLowerCase();

  if(op === '1') {
    console.log(`${a} plus ${b} equals ${a + b}`)
  }
  if(op === '2') {
    console.log(`${a} minus ${b} equals ${a - b}`)
  }
  if(op === '3') {
    console.log(`${a} times ${b} equals ${a * b}`)
  }
  if(op === '4') {
    console.log(`${a} divided by ${b} equals ${a / b}`)
  }
}

doMath(firstNum, secondNum, operation)