/* eslint-disable max-len */
/*
Write a function that takes an array of arrays that represents a 3x3 matrix and returns the transpose of the matrix. You should implement the function on your own, without using any external libraries.

// eslint-disable-next-line max-len, max-len, max-len
Take care not to modify the original matrix — your function must produce a new matrix and leave the input matrix array unchanged.

Problem:
  input: 3x3 matrix
  output: tranposed 3x3 matrix
  Rules:
    Do not modify original matrix.

Example:
const matrix = [
  [1, 5, 8],
  [4, 7, 2],
  [3, 9, 6]
];

let newMatrix = transpose(matrix);

console.log(newMatrix);      // [[1, 4, 3], [5, 7, 9], [8, 2, 6]]
console.log(matrix);         // [[1, 5, 8], [4, 7, 2], [3, 9, 6]

Data Structure:
  nested arrays

Algorithm:
 - delcare a variable 'tranposed' and initalize it to an empty array
 - iterate through the arugment the number of times its length
  - declare a variable 'current' and initialize it to an empty array
  - append numbers at index i from each sub array
  - append current to transposed
 - return transposed
*/
const matrix = [
  [1, 5, 8],
  [4, 7, 2],
  [3, 9, 6]
];

function transposeMatrix(matrix) {
  let tranposed = [];
  for (let idx = 0; idx < matrix.length; idx++) {
    tranposed.push([matrix[0][idx], matrix[1][idx], matrix[2][idx]]);
  }
  return tranposed;
}

let newMatrix = transposeMatrix(matrix);

console.log(newMatrix);
console.log(matrix);
