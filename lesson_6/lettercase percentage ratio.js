/*
Write a function that takes a string and returns an object containing the following three properties:

the percentage of characters in the string that are lowercase letters
the percentage of characters that are uppercase letters
the percentage of characters that are neither
You may assume that the string will always contain at least one character.

Examples:
letterPercentages('abCdef 123');
// { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }

letterPercentages('AbCd +Ef');
// { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }

letterPercentages('123');
// { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }

input: a string
output: an object containing
- keys lowercase, uppercase, neither.
- values are the percentage that they appear in the given string.

algorithm:
- declare a variable 'total' and initialize it to 0
- declare a variable 'lowercase' and initialize it to 0
- declare a variable 'uppercase' and initialize it to 0
- declare a variable 'neither' and initialize it to 0
- declare a const percentage and initialize it to an empty object

- iterate through the string
 - conditionals
  - lowercase
   - increment lowercase & increment total
  - uppercase
   - increment uppercase & increment total
  - else
   -increment neither & increment total

- new function
  - calculate
    - lowercase %
    - uppercase %
    - neither %
- append values to correct keys in obj

- return const

 */
function letterPercentages(string) {
  const percentage = {};
  let total = 0;
  let lowercase = 0;
  let uppercase = 0;
  let neither = 0;

  for (let char of string) {
    if (char >= 'a' && char <= 'z') {
      lowercase++;
    } else if (char >= 'A' && char <= 'Z') {
      uppercase++;
    } else {
      neither++;
    }
    total++;
  }
  percentage['lowercase'] = findPercentage(lowercase, total);
  percentage['uppercase'] = findPercentage(uppercase, total);
  percentage['neither'] = findPercentage(neither, total);

  return percentage;
}

function findPercentage(number, total) {
  return String(((number / total) * 100).toFixed(2));
}

console.log(letterPercentages('abCdef 123'),`// { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }`);

console.log(letterPercentages('AbCd +Ef'),`// { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }`);

console.log(letterPercentages('123'), `// { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }`);