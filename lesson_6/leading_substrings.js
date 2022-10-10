function leadingSubstrings(str) {
  let arr = [];
  let curr = "";
  for (let idx = 0; idx < str.length; idx++) {
    curr += str[idx];
    arr.push(curr);
  }
  return arr;
}