function buyFruit(arr) {
  let groceries = [];

  for (let sub of arr) {
    groceries.push(`${sub[0]} `.repeat(sub[1]).trim().split(' '));
  }
  return groceries.flat(1);
}
console.log(buyFruit([['apple', 3], ['orange', 1], ['banana', 2]]));
