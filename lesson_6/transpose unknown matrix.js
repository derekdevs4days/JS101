/*
In the previous exercise, you wrote a function that transposed a 3x3 matrix represented by an array of arrays.

Matrix transposes are not limited to 3x3 matrices, or even square matrices. Any matrix can be transposed simply by switching columns with rows.

Modify your transpose function from the previous exercise so that it works with any MxN matrix with at least one row and one column.


 */
function transpose(matrix) {
  let transposed = [];
  for (let i = 0; i < matrix[0].length; i++) {
    let current = [];
    for (let j = 0; j < matrix.length; j++) {
      current.push(matrix[j][i]);
    }
    transposed.push(current);
  }
  return transposed;
}
console.log(transpose([[1, 2, 3, 4]]), '   ',[[1], [2], [3], [4]]);
console.log(transpose([[1], [2], [3], [4]]), '   ',[[1, 2, 3, 4]]);
console.log(transpose([[1]]), '   ', [[1]]);
console.log(transpose([[1, 2, 3, 4, 5], [4, 3, 2, 1, 0], [3, 7, 8, 6, 2]]), '   ',[[1, 4, 3], [2, 3, 7], [3, 2, 8], [4, 1, 6], [5, 0, 2]]);