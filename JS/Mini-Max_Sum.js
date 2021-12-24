/*Given five positive integers, find the minimum and maximum values 
that can be calculated by summing exactly four of the five integers.
Then print the respective minimum and maximum values 
as a single line of two space - separated long integers.
*/

let arr = [11, 3, 5, 7, 9];

function miniMaxSum(arr) {
  // Write your code here
  arr.sort((a, b) => b - a);
  let sumMax = 0;
  let sumMin = 0;

  for (let i = 0; i < arr.length - 1; i++) {
    sumMax += arr[i];
  }
  for (let i = 1; i < arr.length; i++) {
    sumMin += arr[i];
  }
  console.log(`${sumMin} ${sumMax}`);
}

miniMaxSum(arr);
