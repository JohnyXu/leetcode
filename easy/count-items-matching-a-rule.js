/**
 * @param {string[][]} items
 * @param {string} ruleKey
 * @param {string} ruleValue
 * @return {number}
 */
var countMatches = function (items, ruleKey, ruleValue) {
  let count = 0;
  items.forEach((item, index) => {
    const [type, color, name] = item;
    if (ruleKey == 'type' && ruleValue == type) {
      count += 1;
    } else if (ruleKey == 'color' && ruleValue == color) {
      count += 1;
    }
    if (ruleKey == 'name' && ruleValue == name) {
      count += 1;
    }
  });
  return count;
};
