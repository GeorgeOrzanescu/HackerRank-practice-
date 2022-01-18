// given a square grid of chars in the range ascii[a-z] , rearrange elements of each row alphabetically , ascending.
// Determine if the columns are also in ascending alphabetical order,top to bottom. Return YES if so, NO if not.

let grid = ["ebacd", "fghij", "olmkn", "trpqs", "xywuv"];
let grid2 = ["mpxz", "abcd", "wlmf"];
let grid3 = ["mpxz"];

// BAD IMPLEMETATION -->main issue is basically u have to transpose the array
function gridChallenge(grid) {
  // Write your code here
  let arrayGrid = grid.map((elem) => elem.split("").sort());
  let checkCol = [];

  for (let index = 0; index < arrayGrid[0].length; index++) {
    checkCol.push([]);
  }

  for (let index = 0; index < arrayGrid[0].length; index++) {
    for (let index2 = 0; index2 < arrayGrid.length; index2++) {
      checkCol[index].push(arrayGrid[index2][index]);
    }
  }

  let result = true;
  for (let index = 0; index < checkCol.length; index++) {
    for (let index2 = 0; index2 < checkCol[0].length; index2++) {
      if (checkCol[index][index2] > checkCol[index][index2 + 1]) {
        result = false;
      }
    }
  }

  return result ? "YES" : "NO";
}

// console.log("arbd".split("").sort());

// console.log(gridChallenge(grid));
console.log(gridChallenge(grid2));
// console.log(gridChallenge(grid3));
