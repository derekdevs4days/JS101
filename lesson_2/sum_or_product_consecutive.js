const readline = require('readline-sync');

function sum(num) {
  if (num === 0) return 0;
  return num + sum(num - 1);
}

function product(num) {
  if (num === 0) return 1;
  return num * product(num - 1);
}
let integer = readline.question('Please enter an integer greater than 0: ');
while (Number.isNaN(Number(integer)) || Number(integer) <= 0) {
  integer = readline.question('Please enter an integer greater than 0: ');
}

let sumProduct = readline.question('Enter "s" to compute the sum, or "p" to compute the product. ');
while (sumProduct !== 's' && sumProduct !== 'p') {
  sumProduct  = readline.question('Enter "s" to compute the sum, or "p" to compute the product. ');
}

sumProduct === 's' ? console.log(sum(Number(integer))) : console.log(product(Number(integer)));
