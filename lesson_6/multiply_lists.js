function multiplyList(arr1, arr2) {
  let final = [];
  for (let i = 0; i < arr1.lenght; i++) {
    final.push(arr1[i] * arr2[i]);
  }
  return final;
}