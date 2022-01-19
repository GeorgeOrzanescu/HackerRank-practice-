/*
It is New Year's Day and people are in line for the Wonderland rollercoaster ride.
Each person wears a sticker indicating their initial position in the queue from 1  to n .
Any person can bribe the person directly in front of them to swap positions, but they still wear their original sticker.
One person can bribe at most two others.

Determine the minimum number of bribes that took place to get to a given queue order.
Print the number of bribes, or, if anyone has bribed more than two people, print Too chaotic.
*/


let queue1 = [2, 1, 5, 3, 4];
let queue2 = [2, 5, 1, 3, 4];

let queue3 = [1, 2, 5, 3, 7, 8, 6, 4];
let queueTest = [1, 3, 2];


// FIRST ATEMPT
function minimumBribes(q) {
  // Write your code here
  const sameValueIndex = q.map((elem) => elem - 1);
  let result = 0;


  for (let [index, elem] of sameValueIndex.reverse().entries()) {
    let currentBribe = Math.abs(index - elem);
    console.log(index, elem, "-->Current Bribe:", currentBribe);
    if (Math.abs(index - elem) > 2) {
      result = "Too chaotic";
      break;
    } else if (currentBribe !== 0) {
      for (let i = 0; i < currentBribe; i++) {
        if (elem > sameValueIndex[index + i + 1]) {
          sameValueIndex[index + i + 1] = index + i + 1;
        }
      }
      result += Math.abs(index - elem);
    }
  }
  return result;
}

// the trick is to start backwords but the problem statement is not clear about the order in which they can bribe

// console.log(minimumBribes(queue1));
// console.log(minimumBribes(queue2));
// console.log(minimumBribes(queueTest));
console.log(minimumBribes(queue3));

//
function minimumBribesMessy(q) {
  let num = 0
  let chaotic = false
  for (let i = q.length - 1; i >= 0; i--) {
    if (q[i] - i > 3) chaotic = true
    for (let j = q[i] - 2; j < i; j++) {
      if (q[j] > q[i]) num++
    }
  }
  if (chaotic) console.log("Too chaotic")
  else console.log(num)
}


// minimumBribesMessy(queue1);
// minimumBribesMessy(queue2);
// minimumBribesMessy(queueTest);
// minimumBribesMessy(queue3);
