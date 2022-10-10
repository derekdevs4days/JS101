function multiplyAllPairs(arr1, arr2) {
  let final = [];

  for (let num of arr1) {
    for (let multi of arr2) {
      final.push(num * multi);
    }
  }
  return final.sort((a,b)=> a - b);
}