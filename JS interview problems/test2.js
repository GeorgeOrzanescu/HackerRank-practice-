// write a function that reverses every word in a sentence (not the sentece itself),just the letters in the words.

let sentence = "One Two Three";

function reverseWordsInSentence(sentence) {
  let words = sentence.split(" ");
  let result = [];

  words.forEach((word) => {
    let reversedWord = word.split("").reverse().join("");
    result.push(reversedWord);
  });

  return result.join(" ");
}

console.log(reverseWordsInSentence(sentence));
