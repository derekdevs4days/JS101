function sum(num) {
  return String(num).split('').reduce((a,c) => a + Number(c), 0);
}