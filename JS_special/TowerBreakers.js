/*
Two players are playing a game of Tower Breakers! 
Player  always moves first, and both players always play optimally.The rules of the game are as follows:

Initially there are  n  towers.
Each tower is of height  m .
The players move in alternating turns.
In each turn, a player can choose a tower of height  x and reduce its height to y , where 1 <=  y < x   and   y evenly divides  x.
If the current player is unable to make a move, they lose the game.
Given the values of n and  m, determine which player will win. If the first player wins, return 1 . Otherwise, return 2.


*/

function towerBreakers(n, m) {
  // Write your code here
  // if n is even, player 2 will always win because it has the last move
  if (n % 2 === 0 || m === 1) {
    // test the base case if tower height is 1 clearly the second player will win
    return 2;
  }
  return 1;
}

console.log(towerBreakers(2, 2));
console.log(towerBreakers(1, 4));
console.log(towerBreakers(1, 7));
console.log(towerBreakers(3, 7));
