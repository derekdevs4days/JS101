/*
Input: string that may contain char that are non alphbetic.
Output: boolean

Rules:
If all alphabetic chars are uppercase return true;
else return false

Algorithm:
- declare a varible called cleanStr and initialize it to our string parameter filtered for alphabetic chars.
- iterate through the cleanStr arr and look at each chars
  - if char is lowercase return false;
return true

Write a function that takes a string argument and returns true if all of the alphabetic characters inside the string are uppercase; false otherwise. Ignore characters that are not alphabetic.

isUppercase('t');               // false
isUppercase('T');               // true
isUppercase('Four Score');      // false
isUppercase('FOUR SCORE');      // true
isUppercase('4SCORE!');         // true
isUppercase('');                // true
*/
function isUppercase(string) {
  let cleanStr = string.split('').filter(char => {
    return (char >= 'A' && char <= 'Z') || (char >= 'a' && char <= 'z');
  });

  return cleanStr.every(char => char === char.toUpperCase());
}

console.log(isUppercase('t'));
console.log(isUppercase('T'));
console.log(isUppercase('Four Score'));
console.log(isUppercase('FOUR SCORE'));
console.log(isUppercase('4SCORE!'));
console.log(isUppercase(''));