function runningTotal(arr) {
  const result = [];
  let sum = 0;
  arr.forEach(num => {
    result.push(sum += num);
  });

  return result;
}