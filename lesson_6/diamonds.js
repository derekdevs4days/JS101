/*
Write a function that displays a four-pointed diamond in an nxn grid, where n is an odd integer supplied as an argument to the function. You may assume that the argument will always be an odd integer.

input: odd number
output: string art

algorithm:
  - declare variable 'finalDiamond' and initialize it to an empty string.
  - declare a variable 'diamondCount' and initialize it to 1
  - declare a variable 'spaces' and initialize it to midpoint
  - find midpoint 

  - from 1 to midpoint 
      - append '*' multiply by 'diamondCount'
      - append /n 
      - increment 'diamondCount' by 2

  - decrement 'diamondCount' by 2

  - from midpoint to count
     - append '*' multiply by 'diamondCount'
      - append /n 
      - decrement 'diamondCount' by 2
  
  - return 'finalDiamond'
*/

function diamond(num) {
  let finalDiamond = '';
  let midpoint = Math.floor(num / 2);
  let diamondCount = 1;
  let spaces = midpoint;

  for (let i = 0; i <= midpoint; i++) {
    finalDiamond += ' '.repeat(spaces);
    finalDiamond += '*'.repeat(diamondCount);
    finalDiamond += '\n';
    diamondCount += 2;
    spaces--;

  }
  diamondCount -= 2;
  spaces++;
  for (let i = midpoint; i < num; i++) {
    diamondCount -=2;
    spaces++;
    if (diamondCount < 0) break;
    finalDiamond += ' '.repeat(spaces);
    finalDiamond += '*'.repeat(diamondCount);
    finalDiamond += '\n';
  }
  return finalDiamond;
}
console.log(diamond(15));