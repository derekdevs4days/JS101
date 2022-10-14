/*
Write a function that rotates the last count digits of a number. To perform the rotation, move the first of the digits that you want to rotate to the end and shift the remaining digits to the left.

Examples:
rotateRightmostDigits(735291, 1);      // 735291
rotateRightmostDigits(735291, 2);      // 735219
rotateRightmostDigits(735291, 3);      // 735912
rotateRightmostDigits(735291, 4);      // 732915
rotateRightmostDigits(735291, 5);      // 752913
rotateRightmostDigits(735291, 6);      // 352917

Input: 2 numbers
 - the original
 - last count digits to rotate
 Output: the roatated number

Algorith:
- Convert the first arguement into an array
- Use second arguement to find target index
- If second arugment is 1 return orginal number

- Append target index to end of array
- Slice the target index to remove
-Join and return array
 */

function rotateRightmostDigits(num, count) {
  if (count === 1) return num;

  let array = num.toString().split('');
  let target = array.length - count;
  array.push(array[target]);
  array.splice(target,1);
  return Number(array.join(''));
}
console.log(rotateRightmostDigits(735291, 1) === 735291);
console.log(rotateRightmostDigits(735291, 2) === 735219);
console.log(rotateRightmostDigits(735291, 3) === 735912);
console.log(rotateRightmostDigits(735291, 4) === 732915);
console.log(rotateRightmostDigits(735291, 5) === 752913);
console.log(rotateRightmostDigits(735291, 6) === 352917);
