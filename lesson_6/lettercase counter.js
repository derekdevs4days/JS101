/*
Input: string containing letters, numbers, symbols
Output: object with keys of lowercase, uppercase, neither and values of the number of time they occur

Rule:

Algorithm:
-declare a variable named counter and initialize it to an empty object.
-Split given string arguement into an array and do the forEach method.
 - forEach element
  - Check if element is lowercase
   - true? increment 1 for key lowercase in counter obj
  - Check  if element is uppercase
    - true? incremebt 1 for key uppercase in counter obj
  - else
   - increment neither by one

return counter obj

What does 
Write a function that takes a string and returns an object containing three properties: one representing the number of characters in the string that are lowercase letters, one representing the number of characters that are uppercase letters, and one representing the number of characters that are neither.

letterCaseCount('abCdef 123');  // { lowercase: 5, uppercase: 1, neither: 4 }
letterCaseCount('AbCd +Ef');    // { lowercase: 3, uppercase: 3, neither: 2 }
letterCaseCount('123');         // { lowercase: 0, uppercase: 0, neither: 3 }
letterCaseCount('');            // { lowercase: 0, uppercase: 0, neither: 0 }
*/
function letterCaseCount(string) {
  let counter = {lowercase: 0, uppercase: 0, neither: 0};

  string.split('').forEach(char => {
    if (isLetter(char) && char === char.toLowerCase()) {
      counter['lowercase']++;
    } else if (isLetter(char) && char === char.toUpperCase()) {
      counter['uppercase']++;
    } else {
      counter['neither']++;
    }
  });
  return counter;
}

function isLetter(str) {
  return (str >= 'a' && str <= 'z' ) || (str >= 'A' && str <= 'Z');
}

console.log(letterCaseCount('abCdef 123'));
console.log(letterCaseCount('AbCd +Ef'));
console.log(letterCaseCount('123'));
console.log(letterCaseCount(''));