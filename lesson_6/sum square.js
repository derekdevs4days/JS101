/*
Write a function that computes the difference between the square of the sum of the first count positive integers and the sum of the squares of the first count positive integers.

Examples:
sumSquareDifference(3);      // 22 --> (1 + 2 + 3)**2 - (1**2 + 2**2 + 3**2)
sumSquareDifference(10);     // 2640
sumSquareDifference(1);      // 0
sumSquareDifference(100);    // 25164150

input: int
output: int
Rules: 
  return the difference between
  all arguments will be positive

Examples:
sumSquareDifference(3);      // 22 --> (1 + 2 + 3)**2 - (1**2 + 2**2 + 3**2);

Data Structure:
- Arrays to hold nums

Algorithm:
- declare 2 arrs 'sumSquare' and 'squaredSum'
- increment input down to zero
 - add increment into sumSquare as an int 
 - add increment squared to suqaredSumm as int
reassign sumSquare to the sum of arr and to the power of 2
reassign squardSum to the sum of arr
return sumSquare - squaredSum
*/
function sumSquareDifference(num) {
  let sumSquare = 0;
  let squaredSum = 0;
  while (num > 0) {
    sumSquare += num;
    squaredSum += (num ** 2);
    num--;
  }

  return (sumSquare ** 2) - squaredSum;
}
console.log(sumSquareDifference(3) === 22);
console.log(sumSquareDifference(10) === 2640);
console.log(sumSquareDifference(1) === 0);
console.log(sumSquareDifference(100) === 25164150);