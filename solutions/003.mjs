import * as lib from '../lib.mjs';

// The prime factors of 13195 are 5, 7, 13 and 29.
// *** What is the largest prime factor of the number 600851475143 ***

function isPrime(p) {
  if (p <= 1) {
    return false;
  }
  for (let i = 2; i < p; i++) {
    if (p % i === 0) {
      return false;
    }
  }
  return true;
}

export default class Solution003 {
  solve() {
    let n = 600851475143;
    let max = 0;
    for (let i = 0; i < Math.sqrt(n); i++) {
      if (n % i === 0 && isPrime(i)) {
        max = i;
        console.log(i);
      }
    }
    return max;
  }
  solution() {
    return 6857;
  }
}
