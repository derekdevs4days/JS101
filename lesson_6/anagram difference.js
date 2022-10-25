
// Given two words, how many letters do you have to remove from them to make them anagrams?
// Example
// First word: codewars (4 letters removed)
// Second word: hackerrank (6 letters removed)
// Result: 10

// A word is an anagram of another word if they have the same letters.
// Do not worry about case. All inputs will be lowercase.


/*
Problem:
input: 2 strings
output: number
rules:
  all inputs are lowercase
  find the sum of letters being removed from string1 and string2

Data Structure:
 use object as frequency counter

Algorithm:
declare a variable 'cache' and set it to an empty object
declare a variable 'notInCache' and set it to 0;

- iterate through first argument
 - check if char exist in 'cache'
  - yes => increment it by 1
  - no => set it = 1

- iterate through second arguement
 - check to see if it exist in 'cache'
  - yes => decrement by 1 or (-1) from the value of the key
  - no => increment 'notInCache' by 1

return 'notInCache' +  (the sum of values in 'cache')
*/

function anagramDifference(str1, str2) {
  if (str1 === str2) return 0;
  let cache = {};
  let cacheSum = 0;
  let notInCache = 0;
  
  for(let char of str1) {
    cache[char]? cache[char]++ : cache[char] = 1;
  }
  
  for (let letter of str2) {
    cache[letter]? cache[letter]-- : notInCache++;
  }
  for (let key in cache) {
    cacheSum += cache[key];
  }
  return cacheSum + notInCache;
}

console.log(anagramDifference("",""));      // 0
console.log(anagramDifference("a",""));     // 1
console.log(anagramDifference("", "a"));    // 1
console.log(anagramDifference("ab","a"));   // 1
console.log(anagramDifference("ab","cd"));  // 4
console.log(anagramDifference("aab","a"));  // 2
console.log(anagramDifference("a","aab"));  // 2
console.log(anagramDifference("codewars","hackerrank")); // 10