function union(arr1, arr2) {
  const mainArr = arr1.concat(arr2);
  const result = [];
  mainArr.forEach(num => {
    if (!result.includes(num)) {
      result.push(num)
    }
  })
  return result;
}