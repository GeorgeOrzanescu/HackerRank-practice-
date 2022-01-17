let stringTest = "mama";
let stringTest2 = "ana";
let stringTest3 = "anaman";
let stringTest4 = "bcbc";
let stringTest5 = "aaab";
let stringTest6 = "";
let stringTest7 = "bbbbbbbbbb";
let stringTest8 = "a";
// FIRST ATEMPT to slow
function palindromeIndex(s) {
  // Write your code here

  if (s === s.split("").reverse().join("")) {
    return -1;
  }

  let index = -1;
  for (let i = 0; i < s.length; i++) {
    let stringArray = s.split("");
    stringArray.splice(i, 1);

    if (stringArray[0] === stringArray.reverse()[0]) {
      if (stringArray.join() === stringArray.reverse().join()) {
        return i;
      }
    }
  }
  return index;
}

console.log(palindromeIndex(stringTest));
console.log(palindromeIndex(stringTest2));
console.log(palindromeIndex(stringTest3));
console.log(palindromeIndex(stringTest4));
console.log(palindromeIndex(stringTest5));
console.log(palindromeIndex(stringTest6));
console.log(palindromeIndex(stringTest7));

// SECOND ATEMPT got read of some unnecesary iterations
function palindromeIndex2(s) {
  // Write your code here

  let indexResult = -1;
  if (s === s.split("").reverse().join("") || s.length <= 1) {
    return -1;
  }

  for (let index = 0; index <= Math.round(s.length / 2); index++) {
    if (s[index] != s[s.length - 1 - index]) {
      let stringArray = s.split("");
      stringArray.splice(index, 1);
      if (stringArray.join() === stringArray.reverse().join()) {
        return index;
      } else {
        return s.length - index - 1;
      }
    }
  }
  return indexResult;
}

console.log(palindromeIndex2(stringTest));
console.log(palindromeIndex2(stringTest2));
console.log(palindromeIndex2(stringTest3));
console.log(palindromeIndex2(stringTest4));
console.log(palindromeIndex2(stringTest5));
console.log(palindromeIndex2(stringTest6));
console.log(palindromeIndex2(stringTest7));
console.log(palindromeIndex2(stringTest8));
