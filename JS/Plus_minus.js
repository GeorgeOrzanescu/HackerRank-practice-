/*Given an array of integers, calculate the ratios of its elements that are
positive, negative, and zero.Print the decimal value of each fraction
on a new line with 6 places after the decimal.
*/

let arr = [1, 1, 0, -1, -1];

function plusMinus(arr) {
  let positive = 0;
  let negative = 0;
  let zero = 0;

  arr.forEach((element) => {
    if (element > 0) {
      positive++;
    } else if (element < 0) {
      negative++;
    } else {
      zero++;
    }
  });

  console.log((positive / arr.length).toFixed(6));
  console.log((negative / arr.length).toFixed(6));
  console.log((zero / arr.length).toFixed(6));
}
