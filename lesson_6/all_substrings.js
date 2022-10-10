function substrings(string) {
  let arr = [];
  string.split('').forEach(char => {
    arr.push(...leadingSubstrings(string));
    string = string.slice(1);
  })
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