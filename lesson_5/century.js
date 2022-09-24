function century(year) {
  const num = Math.ceil(year / 100);

  let result = String(num);
  let last = num % 10;
  if (last === 1) {
    result += 'st';
  } else if (last === 2) {
    result += 'nd';
  } else if (last === 3) {
    result += 'rd';
  } else {
    result += 'th';
  }
   
  return result;
}