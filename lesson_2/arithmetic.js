const rls = require('readline-sync');
function doMath(n1, n2) {
  console.log(`${n1} + ${n2} = ${n1 + n2}`);
  console.log(`${n1} - ${n2} = ${n1 - n2}`);
  console.log(`${n1} * ${n2} = ${n1 * n2}`);
  console.log(`${n1} / ${n2} = ${n1 / n2}`);
  console.log(`${n1} % ${n2} = ${n1 % n2}`);
  console.log(`${n1} ** ${n2} = ${n1 ** n2}`);
}
let firstNum = Number(rls.question('Enter the first number:'));
let secondNum = Number(rls.question('Enter the second number:'));
doMath(firstNum, secondNum);