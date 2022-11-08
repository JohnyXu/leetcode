/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function (accounts) {
  let max = 0;
  for (let index = 0; index < accounts.length; index++) {
    const listNums = accounts[index];
    const sum = listNums.reduce((sum, num) => {
      return sum + num;
    }, 0);
    if (sum > max) {
      max = sum;
    }
  }
  return max;
};
