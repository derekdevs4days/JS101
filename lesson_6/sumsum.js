function sumOfSums(arr) {
  let sum = 0;
  let curr = 0;
  for (let idx = 0; idx < arr.length; idx++) {
    curr += Number(arr[idx]);
    sum += curr;
  }
  return sum;
}

console.log(sumOfSums([1,2,3,4,5])); // 35