/* 
Sean invented a game involving a 2n x 2n matrix where each cell of the matrix contains an integer. He can reverse any of its rows or columns any number of times.
The goal of the game is to maximize the sum of the elements in the n x n submatrix located in the upper-left quadrant of the matrix.

Given the initial configurations for  matrices, help Sean reverse the rows and columns 
of each matrix in the best possible way so that the sum of the elements in the matrix's upper-left quadrant is maximal.
*/
let matrix = [
  [112, 42, 83, 119],
  [56, 125, 56, 49],
  [15, 78, 101, 43],
  [62, 98, 114, 108],
];
let matrix2 = [
  [112, 42, 83, 119, 32, 239],
  [56, 125, 56, 49, 849, 239],
  [15, 78, 101, 43, 1, 239],
  [62, 98, 114, 108, 5, 239],
  [62, 98, 114, 108, 8, 239],
  [62, 98, 114, 108, 1000, 239],
];

function flippingMatrix(matrix) {
  let n = matrix.length / 2;
  // Write your code here

  let maxValue = 0;
  let total = 0;

  for (let row = 0; row < n; row++) {
    for (let col = 0; col < n; col++) {
      maxValue = 0;
      maxValue = Math.max(maxValue, matrix[row][col]);

      maxValue = Math.max(maxValue, matrix[row][2 * n - col - 1]);

      maxValue = Math.max(maxValue, matrix[2 * n - row - 1][col]);

      maxValue = Math.max(maxValue, matrix[2 * n - row - 1][2 * n - col - 1]);

      total += maxValue;
    }
  }

  return total;
}

console.log(flippingMatrix(matrix2));

// a good explanation of the above code

// https://medium.com/@mlgerardvla/hackerrank-flipping-the-matrix-javascript-7f945220ca1b
