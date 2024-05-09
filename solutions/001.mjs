import * as lib from '../lib.mjs';

export default class Solution001 {
  solve() {
    let result = new lib.Range(1000)
      .filter((x) => x % 3 == 0 || x % 5 === 0)
      .sum();
    return result;
  }
  solution() {
    return undefined;
  }
}
