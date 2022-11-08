/**
 * @param {number} n
 * @return {number[]}
 */
var sumZero = function (n) {
  const res = [];
  let even = 0;
  if (n % 2 == 1) {
    res.push(0);
    even = n - 1;
  } else {
    even = n;
  }

  for (let i = 0; i < even / 2; i++) {
    const num = Math.floor(Math.random() * 1000000);
    if (res.includes(num) || res.includes(-num)) {
      i--;
    } else {
      res.push(num);
      res.push(-num);
    }
  }
  return res;
};
