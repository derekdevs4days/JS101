/*
A featured number (something unique to this exercise) is an odd number that is a multiple of 7, with all of its digits occurring exactly once each. For example, 49 is a featured number, but 98 is not (it is not odd), 97 is not (it is not a multiple of 7), and 133 is not (the digit 3 appears twice).

Write a function that takes an integer as an argument and returns the next featured number greater than the integer. Issue an error message if there is no next featured number.

NOTE: The largest possible featured number is 9876543201.

Examples:
featured(12);           // 21
featured(20);           // 21
featured(21);           // 35
featured(997);          // 1029
featured(1029);         // 1043
featured(999999);       // 1023547
featured(999999987);    // 1023456987
featured(9876543186);   // 9876543201
featured(9876543200);   // 9876543201
featured(9876543201);   // "There is no possible number that fulfills those requirements."

Input: number
Return: a feature number
  - odd number that is multiple of 7 with all of its digits occuring once

Algorithm:
function 1
- declare a variable 'multiply' and initialize it the arguement / 7 ceiling.
- declare a variable 'curr' and initialize it to 'multiply' * 7
- increment starting at our 'multiply' variable
  - CONDITIONALS

   - if 'curr' is odd
    - if odd numbers of 'curr' is unique break.

   - else multiply ++;
- return  curr
function 2
- accepts a number as arguement
- converts number in to string
- declare a const 'counter' and initialize it to {};
- iterate through arugement
 - if char exist in 'counter' return false
  - else counter[char] = 1
return true
 */
function featured(num) {
  let multiply = Math.floor(num / 7) + 1;
  let curr = multiply * 7;
  while (true) {
    if (curr % 2 !== 0) {
      if (unique(curr)) break;
    }
    multiply++;
    curr = multiply * 7;
  }

  if (curr > 9876543201) {
    return 'invalid';
    //throw new Error("There is no possible number that fulfills those requirements.");
  } else {
    return curr;
  }
}


function unique(num) {
  num = String(num);
  const counter = {};
  for (let char of num) {
    if (counter[char]) {
      return false;
    }
    counter[char] = 1;
  }
  return true;
}


console.log(featured(12) === 21);
console.log(featured(20) === 21);
console.log(featured(21) === 35);
console.log(featured(997) === 1029);
console.log(featured(1029) === 1043);
console.log(featured(999999) === 1023547);
console.log(featured(999999987) === 1023456987);
console.log(featured(9876543186) === 9876543201);
console.log(featured(9876543200) === 9876543201);
console.log(featured(9876543201) === 'invalid');