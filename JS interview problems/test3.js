// Write a function that checks if two strings are anagrams (same letters but in a different order).

let string1 = "AABBCC";
let string2 = "ABBACC";

let string3 = "AABBCC";
let string4 = "AABBCD";

let string5 = "AABBCC";
let string6 = "ABC";

function checkIfAnagrams(stringA, stringB) {
  let stringAChars = stringA.split("").sort();
  let stringBChars = stringB.split("").sort();

  let n =
    stringAChars.length > stringBChars.length
      ? stringAChars.length
      : stringBChars.length;

  for (let i = 0; i < n; i++) {
    if (stringAChars[i] !== stringBChars[i]) {
      return false;
    }
  }

  return true;
}

console.log(checkIfAnagrams(string1, string2));
console.log(checkIfAnagrams(string3, string4));
console.log(checkIfAnagrams(string5, string6));
