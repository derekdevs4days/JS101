/**
 Input: string
 Output: string
 Rule:
 - Return string with sraggered capitization. (First character will be capitalize).
 - Non alphbetic charaters count.

 Algorithm: 
 - Make given arguement all lowercase.
 - Iterate through our arguement
  - If the index is even => convert character to capital
return string.

 Write a function that takes a string as an argument and returns that string with a staggered capitalization scheme. Every other character, starting from the first, should be capitalized and should be followed by a lowercase or non-alphabetic character. Non-alphabetic characters should not be changed, but should be counted as characters for determining when to switch between upper and lower case.

Examples:
staggeredCase('I Love Launch School!');        // "I LoVe lAuNcH ScHoOl!"
staggeredCase('ALL_CAPS');                     // "AlL_CaPs"
staggeredCase('ignore 77 the 4444 numbers');   // "IgNoRe 77 ThE 4444 nUmBeRs"
 */

function staggeredCase(string) {
  string = string.toLowerCase();
  let final = "";
  for (let i = 0; i < string.length; i++) {
    i % 2 === 0? final += string[i].toUpperCase() : final += string[i];
  }
  return final;
}

console.log(staggeredCase('I Love Launch School!'));
console.log(staggeredCase('ALL_CAPS'));
console.log(staggeredCase('ignore 77 the 4444 numbers'));

/*
Modify the function from the previous exercise so it ignores non-alphabetic characters when determining whether it should uppercase or lowercase each letter. The non-alphabetic characters should still be included in the return value; they just don't count when toggling the desired case.


console.log(staggeredCase("I Love Launch School!") === "I lOvE lAuNcH sChOoL!");
console.log(staggeredCase("ALL CAPS") === "AlL cApS");
console.log(staggeredCase("ignore 77 the 444 numbers") === "IgNoRe 77 ThE 444 nUmBeRs"
);
Example: */
function staggeredCase2(string) {
  string = string.toLowerCase();
  let final = "";
  let upper = true;
  for (let i = 0; i < string.length; i++) {
    if (string[i] >= 'a' && string[i] <= 'z') {
      if (upper) {
        upper = false;
        final += string[i].toUpperCase();
      } else {
        upper = true;
        final += string[i];
      }
    } else {
      final += string[i];
    }

  }
  return final;
}
console.log(staggeredCase2("I Love Launch School!") === "I lOvE lAuNcH sChOoL!");
console.log(staggeredCase2("ALL CAPS") === "AlL cApS");
console.log(
  staggeredCase2("ignore 77 the 444 numbers") === "IgNoRe 77 ThE 444 nUmBeRs"
);
