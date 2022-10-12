/*
Input: string
Output: string

Rules:
  make character lowercase if it's uppercase
  make character uppercase if it's lowercase

Algorithm: 
Convert string arguement into arr
Iterate through arr using map and return the opposite case of each character
Return a joined array

Write a function that takes a string as an argument and returns that string with every lowercase letter changed to uppercase and every uppercase letter changed to lowercase. Leave all other characters unchanged.

Examples:
swapCase('CamelCase');              // "cAMELcASE"
swapCase('Tonight on XYZ-TV');      // "tONIGHT ON xyz-tv"
 */

function swapCase(string) {
  return Array.from(string).map(
    x => x === x.toUpperCase() ? x.toLowerCase() : x.toUpperCase())
    .join('');
}

console.log(swapCase('CamelCase'));
console.log(swapCase('Tonight on XYZ-TV'));