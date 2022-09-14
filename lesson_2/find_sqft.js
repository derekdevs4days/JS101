const readline = require('readline-sync');

function prompt(message) {
  console.log(`=> ${message}`);
}

function findSQFT (length, width) {
  let sqMeters = (Number(length) * Number(width));
  let sqft = sqMeters * 10.7639;
  prompt(`The area of the room is ${sqMeters.toFixed(2)} square meters (${sqft.toFixed(2)} square feet).`);
}

prompt('Welcome to the room size finder!');

while (true) {
  prompt('Enter the length of the room in meters:');
  let length = readline.question();
  while (Number.isNaN(Number(length))) {
    prompt('Enter a valid length.');
    length = readline.question();
  }
  prompt('Enter the width of the room in meters:');
  let width = readline.question();
  while (Number.isNaN(Number(width))) {
    prompt('Enter a valid width.');
    width = readline.question();
  }

  findSQFT(length, width);
  prompt('Do you want to do another calculation? (y/n)');
  let response = readline.question();
  while (response !== 'y' && response !== 'n') {
    prompt('Please enter y or n.');
    response = readline.question();
  }
  if (response !== 'y') {
    prompt('Goodbye');
    break;
  }
}


