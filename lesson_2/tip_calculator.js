const readline = require('readline-sync');

function prompt(message) {
  console.log(`=> ${message}`);
}

function findTip(bill, tip) {
  let actualTip = Number(tip / 100);
  let total = Number((bill * actualTip)) + Number(bill);
  prompt(`The tip is $${(actualTip * bill).toFixed(2)}`);
  prompt(`The total is $${total.toFixed(2)}`);
}

while (true) {
  prompt('What is the bill?');
  let bill = readline.question();
  while (Number.isNaN(Number(bill))) {
    prompt('Enter a valid bill.');
    bill = readline.question();
  }

  prompt('What is the tip percentage?');
  let tip = readline.question();
  while (Number.isNaN(Number(tip))) {
    prompt('Enter a valid bill.');
    tip = readline.question();
  }
  findTip(bill, tip);

  prompt('Do you want to calculate another tip? (y/n)');
  let response = readline.question();
  while (response !== 'y' && response !== 'n') {
    prompt('Enter y or n');
    response = readline.question();
  }
  if (response === 'n') {
    prompt('Goodbye');
    break;
  }
}