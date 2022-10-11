
/*
Input: array 
Output: array

Rules:
- all array element will be str containing uppercase / lowercase
- return array containing elements will no vowels.

Algorithm:
-Declare a variable named noVowels and initialize it to Mapping of the string argument and look at each element
 - Filter each element and return a string containing letters that are non vowels
return noVowels

Write a function that takes an array of strings and returns an array of the same string values, but with all vowels (a, e, i, o, u) removed.

removeVowels(['abcdefghijklmnopqrstuvwxyz']);         // ["bcdfghjklmnpqrstvwxyz"]
removeVowels(['green', 'YELLOW', 'black', 'white']);  // ["grn", "YLLW", "blck", "wht"]
removeVowels(['ABC', 'AEIOU', 'XYZ']);                // ["BC", "", "XYZ"]
*/

function removeVowels(arr) {
  let noVowels = arr.map(string => {
    return string.split('').filter(char => !'aeiou'.includes(char.toLowerCase())).join('');
  });
  return noVowels;
}
console.log(removeVowels(['abcdefghijklmnopqrstuvwxyz']));
console.log(removeVowels(['green', 'YELLOW', 'black', 'white']));
console.log(removeVowels(['ABC', 'AEIOU', 'XYZ']));