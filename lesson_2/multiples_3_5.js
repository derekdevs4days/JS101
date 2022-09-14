function multisum(num) {
  let total = 0;;
  while (num > 0) {
    if (num % 5 === 0 || num % 3 === 0) {
      total += num;
    }
    num --;
  }
  return total;
}