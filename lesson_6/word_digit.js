/*

Write a function that takes a sentence string as an argument and returns that string with every occurrence of a "number word" — 'zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine' — converted to its corresponding digit character.

Example:
wordToDigit('Please call me at five five five one two three four. Thanks.');
// "Please call me at 5 5 5 1 2 3 4. Thanks."

Given a string that may contain number written out
Return a string with written numbers converted to int

Algorithm:
- Convert string argument into array
- Declare a const array containing one - nine
- Iterate through argument (MAP)
 - if el exist 
  - return index of el
-RETURN mapped arr joined.
 */

function wordToDigit(sentence) {
  sentence = sentence.split(' ');
  const numberKey = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];

  return sentence.map(el => {
    let index = numberKey.indexOf(el.endsWith('.') ? el.slice(0, el.length - 1) : el);
   
    return index > -1 ? index : el;
  }).join(' ');
}

console.log(wordToDigit(('Please call me at five five five one two three four. Thanks.')));
console.log(wordToDigit(('Please call me at five five five one two three four. Thanks.')));