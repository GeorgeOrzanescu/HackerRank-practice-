/*
We define super digit of an integer x using the following rule:
    
    Given an integer, we need to find the super digit of the integer.
        - if x has only 1 digit , then its super digit is x;
        - otherwise the the super digit of x is equal to the super digit of the sum of the 
        digits of x


    Example:
    9875 
        super_digit(9875) --> 9+8+7+5 = 29
        super_digit(29)   --> 2 + 9   = 11
        super_digit(11)   --> 1+1 = 2
        super_digit(2)    --> 2

*/

function superDigit(n, k) {
  // Write your code here
  const initialP = n.split("").reduce((store, curr) => (store += +curr), 0) * k; // initial number as integer

  // check base case   --> return int   or recurse ( !! int to string, 1)
  return initialP <= 9 ? initialP : superDigit(initialP.toString(), 1);
}

console.log(superDigit("148", 3));
console.log(superDigit("9875", 4));
