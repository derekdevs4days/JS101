function multiplicativeAverage(arr) {
  return (arr.reduce((a,c) => a * c ,1) / arr.length).toFixed(3);
}