const readline = require('readline-sync');

function prompt(message) {
  console.log(`=> ${message}`);
}

function match(n1, n2, n3, n4, n5, last) {
  let array = [n1, n2, n3, n4 ,n5];
  if (array.includes(last)) {
    prompt(`The number ${last} appears in ${array.join('')}`);
  } else {
    prompt(`The number ${last} does not appears in ${array.join('')}`);
  }
}

prompt('Enter the 1st number:');
let num1 = readline.question();
while (Number.isNaN(Number(num1))) {
  prompt('Enter a valid number:');
  num1 = readline.question();
}

prompt('Enter the 2nd number:');
let num2 = readline.question();
while (Number.isNaN(Number(num2))) {
  prompt('Enter a valid number:');
  num2 = readline.question();
}

prompt('Enter the 3rd number:');
let num3 = readline.question();
while (Number.isNaN(Number(num3))) {
  prompt('Enter a valid number:');
  num3 = readline.question();
}

prompt('Enter the 4th number:');
let num4 = readline.question();
while (Number.isNaN(Number(num4))) {
  prompt('Enter a valid number:');
  num4 = readline.question();
}

prompt('Enter the 5th number:');
let num5 = readline.question();
while (Number.isNaN(Number(num5))) {
  prompt('Enter a valid number:');
  num5 = readline.question();
}

prompt('Enter the last number:');
let last = readline.question();
while (Number.isNaN(Number(last))) {
  prompt('Enter a valid number:');
  last = readline.question();
}

match(num1, num2, num3, num4, num5, last);