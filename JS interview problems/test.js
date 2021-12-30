// Write a function that removes dupliucated elements from an array.

let duplicatedList = [1, 2, 3, 4, 5, 5, 4, 2, 1];

function removeDuplicates(duplicatedList) {
  let result = [];

  duplicatedList.forEach((element) => {
    if (result.indexOf(element) === -1) {
      result.push(element);
    }
  });

  return result;
}

console.log(removeDuplicates(duplicatedList));
