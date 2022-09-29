function doubleConsonants(str) {
  const VOWELS = 'aeiou';

  let answer = "";

  for (let char of str) {
    if (VOWELS.includes(char) || !valid(char) ) {
      answer += char;
    } else {
      answer += char.repeat(2);
    }
  }
  return answer;
}
function valid(str) {
  str = str.toLowerCase();
  return str.charCodeAt(str) >= 97 && str.charCodeAt(str) <= 122;
}