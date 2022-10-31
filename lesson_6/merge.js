function merge(a, b) {
  let result = [];
  while (a.length && b.length) {
    a[0] < b[0]? result.push(a.shift()) : result.push(b.shift());
  }
  return result.concat(a).concat(b);
}

console.log(merge([1, 5, 9], [2, 6, 8]));