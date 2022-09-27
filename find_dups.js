function findDup(arr) {
  let obj = {};
  for (let num of arr) {
    if (obj[num]) {
      return num;
    } else {
      obj[num] = 1;
    }
  }
  return undefined;
}
