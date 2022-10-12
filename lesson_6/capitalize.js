/*
Input: string
Ouput: string

Rules:
-capitalize the first letter of each word in the given string

Algorithm:
- Convert string arguement into arr.
- Map that arr and return each str in the arr with a the first index capitalize
- return mapped arr joined back into an array

Write a function that takes a string as an argument and returns that string with the first character of every word capitalized and all subsequent characters in lowercase.

You may assume that a word is any sequence of non-whitespace characters.

Examples:

wordCap('four score and seven');       // "Four Score And Seven"
wordCap('the javaScript language');    // "The Javascript Language"
wordCap('this is a "quoted" word');    // 'This Is A "quoted" Word'
*/

function wordCap(string) {
  return string.split(' ').map(word => word[0].toUpperCase() + word.slice(1)).join(' ');
}

console.log(wordCap('four score and seven'));
console.log(wordCap('the javaScript language'));
console.log(wordCap('this is a "quoted" word'));