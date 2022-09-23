function getGrades() {
  
  let sum = 0;
  let len = 0;
  for (let value of arguments) {
    sum += value;
    len ++;
  }
  let avg = sum / len;
   
  if (avg >= 90) {
    return 'A';
  } else if (avg >= 80) {
    return 'B';
  } else if (avg >= 70) {
    return 'C';
  }else if (avg >= 60) {
    return 'D';
  } else {
    return 'F'
  }
}
