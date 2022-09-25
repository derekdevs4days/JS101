function halvsies(arr) {
  const final = [[],[]];
  const mid = Math.floor(arr.length / 2);

  for (let idx = 0; idx < arr.length; idx++) {
    if (idx <= mid) {
      final[0].push(arr[idx]);
    } else {
      final[1].push(arr[idx]);
    }
  }
  return final;
}