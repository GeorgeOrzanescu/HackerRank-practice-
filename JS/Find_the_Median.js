// the median of a list of numbers is the middle number of the list if
//the list has an even number of elements, or the average of the two middle
//numbers if the list has an odd number of elements.

let arr = [5, 3, 1, 7, 2, 4];
function findMedian(arr) {
  arr.sort((a, b) => a - b);
  var median;
  var arrLength = arr.length;
  if (arrLength % 2 === 0) {
    median = (arr[arrLength / 2] + arr[arrLength / 2 - 1]) / 2;
  } else {
    median = arr[(arrLength - 1) / 2];
  }
  return median;
}
