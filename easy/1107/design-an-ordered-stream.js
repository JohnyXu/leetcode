/**
 * @param {number} n
 */
var OrderedStream = function (n) {
  this.last = 0;
  this.list = {};
};

/**
 * @param {number} idKey
 * @param {string} value
 * @return {string[]}
 */
OrderedStream.prototype.insert = function (idKey, value) {
  if (!this.list[idKey]) {
    this.list[idKey] = value;
  }
  let res = [];
  const count = idKey > this.last ? idKey : this.last;
  for (let i = 1; i <= count; i++) {
    if (this.list[i]) {
      if (i >= idKey) {
        res.push(this.list[i]);
      }
    } else {
      break;
    }
  }
  if (idKey >= this.last) {
    this.last = idKey;
  }

  return res;
};

/**
 * Your OrderedStream object will be instantiated and called as such:
 * var obj = new OrderedStream(n)
 * var param_1 = obj.insert(idKey,value)
 */
