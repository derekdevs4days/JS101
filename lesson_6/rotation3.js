/*
Take the number 735291 and rotate it by one digit to the left, getting 352917. Next, keep the first digit fixed in place and rotate the remaining digits to get 329175. Keep the first two digits fixed in place and rotate again to get 321759. Keep the first three digits fixed in place and rotate again to get 321597. Finally, keep the first four digits fixed in place and rotate the final two digits to get 321579. The resulting number is called the maximum rotation of the original number.

Write a function that takes an integer as an argument and returns the maximum rotation of that integer. You can (and probably should) use the rotateRightmostDigits function from the previous exercise.

Examples:
maxRotation(735291);          // 321579
maxRotation(3);               // 3
maxRotation(35);              // 53
maxRotation(105);             // 15 -- the leading zero gets dropped
maxRotation(8703529146);      // 7321609845

Input: a number
Output: a number that has maximum rotation performed on it

Algorithm:
- Convert number arguement into a string and convert to an array.
- Declare a variable called numOfRotation.
- Delcare a variable called finalArr and initalize it to an empty array
- While numOfRotation !== 0
  - declare a variable named current and initialize it to the current working arr
  - push first element  to end of array
  - remove original first element from the beginning

  - push new first element to finalArr
  - remove first element
  - numOfRotation increment
return finalArr joined and conver to number


 */

function maxRotation(number) {
  let strArr = number.toString().split('');
  let numOfRotation = strArr.length;
  let finalArr = [];

  while (numOfRotation !== 0) {
    let current = strArr;
    current.push(current.shift(0));
    finalArr.push(current.shift(0));
    numOfRotation--;
  }
  return Number(finalArr.join(''));
}
console.log(maxRotation(735291) === 321579 );
console.log(maxRotation(3) === 3 );
console.log(maxRotation(35) === 53 );
console.log(maxRotation(105) === 15 );
console.log(maxRotation(8703529146) === 7321609845 );