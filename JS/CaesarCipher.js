/*
Julius Caesar protected his confidential information by encrypting it using a cipher. 
Caesar's cipher shifts each letter by a number of letters. If the shift takes you past the end of the alphabet, 
just rotate back to the front of the alphabet. 
In the case of a rotation by 3, w, x, y and z would map to z, a, b and c.

*/

let s = "middle-Outz";
let s2 = "Testthisstring";
let k = 2;

function caesarCipher(s, k) {
  // Write your code here

  let alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
  let result = [];

  k = k % 26; // if k is greater than 26, it will be modded by 26

  s.split("").forEach((letter) => {
    let index = alphabet.indexOf(letter.toLowerCase());
    let isUpperCase = alphabet.indexOf(letter); // check uppercase or lowercase
    if (index !== -1 && isUpperCase !== -1) {
      let newIndex = index + k;
      if (newIndex > 25) {
        newIndex = newIndex - 26;
      }
      result.push(alphabet[newIndex]);
    } else if (index !== -1 && isUpperCase === -1) {
      let newIndex = index + k;
      if (newIndex > 25) {
        newIndex = newIndex - 26;
      }
      result.push(alphabet[newIndex].toUpperCase());
    } else {
      result.push(letter);
    }
  });

  return result.join("");
}

console.log(caesarCipher(s, k));
console.log(caesarCipher(s2, 100));
