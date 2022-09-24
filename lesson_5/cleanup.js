function cleanUp(str) {
  let result = '';
  
  
  for (let idx = 0; idx < str.length; idx ++) {
    if ((str.charCodeAt(idx) >= 65 && str.charCodeAt(idx) <= 90 ) || ((str.charCodeAt(idx) >= 97) && str.charCodeAt(idx) <= 122)) {
      result += str[idx];
    } else {
      result += ' ';
    }
  }
  return str
}