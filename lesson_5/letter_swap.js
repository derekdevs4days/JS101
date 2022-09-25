function swap(str) {
  let final = '';
  const arr = str.split(' ');
  
  for (let word of arr) {
    if (word.length === 1) {
      final += word;
      final += ' ';
    } else if (word.length === 2) {
      final += word[1] + word[0];
      final += ' ';
    } else {
      final += word[word.length - 1] + word.slice(1, word.length - 1) + word[0];
      final += ' ';
    }
  }
  return final.trim();
}