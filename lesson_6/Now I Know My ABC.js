/*
A collection of spelling blocks has two letters per block, as shown in this list:

B:O   X:K   D:Q   C:P   N:A
G:T   R:E   F:S   J:W   H:U
V:I   L:Y   Z:M
This limits the words you can spell with the blocks to only those words that do not use both letters from any given block. You can also only use each block once.

Write a function that takes a word string as an argument and returns true if the word can be spelled using the set of blocks, false otherwise. You can consider the letters to be case-insensitive when you apply the rules.

Examples:

Copy Code
isBlockWord('BATCH');      // true
isBlockWord('BUTCH');      // false
isBlockWord('jest');       // true

input: string
output: boolean

Data Structure:
  - add pairs to array
*/

function isBlockWord(string) {
  let answer = true;
  string = string.toUpperCase();
  let dataSet = ['BO', 'XK', 'DQ', 'CP', 'NA', 'GT', 'RE', 'FS', 'JW', 'HU', 'VI', 'LY', 'ZM'];
  dataSet.forEach(pair => {
    let first = pair[0];
    let second = pair[1];
    if (string.includes(first) && string.includes(second)) answer = false;
  });
  for (let i = 0; i < string.length - 1; i++) {
    if (string[i] === string[i + 1]) answer = false;
  }
  return answer;
}

 console.log(isBlockWord('BATCH'));      // true
 console.log(isBlockWord('BUTCH'));      // false
 console.log(isBlockWord('jest'));       // true
 console.log(isBlockWord('floW'));       // true
console.log(isBlockWord('APPLE'));      // false
console.log(isBlockWord('apple'));      // false
console.log(isBlockWord('apPLE'));      // false
console.log(isBlockWord('Box'));        // false