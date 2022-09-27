function interleave(arr1, arr2) {
  let finalArr = [];
  
  for (let i = 0; i < arr1.length; i++) {
    finalArr.push(arr1[i], arr2[i]);
  }
  return finalArr;
}