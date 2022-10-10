function palindromes(string) {
  let holding = substrings(string);
  return holding.filter(word => {
    return word.length > 1 && word === word.split('').reverse().join('');
  });
}

function substrings(string) {
  let arr = [];
  string.split('').forEach(char => {
    arr.push(...leadingSubstrings(string));
    string = string.slice(1);
  });
  return arr;
}

function leadingSubstrings(str) {
  let arr = [];
  let curr = "";
  for (let idx = 0; idx < str.length; idx++) {
    curr += str[idx];
    arr.push(curr);
  }
  return arr;
}

console.log(palindromes('madam'));