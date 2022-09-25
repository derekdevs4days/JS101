function wordSizes(str) {
  const arr = str.split(' ');
  const cache = {};

  for (let word of arr) {
    if (word.length === 0) continue;
    cache[word.length] ? cache[word.length]++ : cache[word.length] = 1;
  }
  return cache;
}