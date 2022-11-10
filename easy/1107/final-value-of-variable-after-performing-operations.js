/**
 * @param {string[]} operations
 * @return {number}
 */
var finalValueAfterOperations = function (operations) {
  return operations.reduce((sum, oper) => {
    return oper.includes('++') ? sum + 1 : sum - 1;
  }, 0);
};
