// Given a square matrix,
// calculate the absolute difference between the sums of its diagonals.

let arr = [
  [11, 2, 4],
  [4, 5, 6],
  [10, 8, -12],
];

function diagonalDifference(arr) {
  // Write your code here
  let n = arr[0].length;
  let sumLeftRight = 0;
  let sumRightLeft = 0;

  for (let i = 0; i < n; i++) {
    sumLeftRight += arr[i][i];
    sumRightLeft += arr[i][n - 1 - i];
  }

  return Math.abs(sumLeftRight - sumRightLeft);
}

console.log(diagonalDifference(arr));
