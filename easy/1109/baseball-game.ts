function calPoints(operations: string[]): number {
  let records: number[] = [];

  for (let i = 0; i < operations.length; i++) {
    const key = operations[i];
    let len: number = records.length;
    if (key == '+') {
      records.push(records[len - 1] + records[len - 2]);
    } else if (key == 'D') {
      records.push(records[len - 1] * 2);
    } else if (key == 'C') {
      records.pop();
    } else {
      records.push(parseInt(key, 10));
    }
  }
  if (records.length > 0) {
    return records.reduce((sum, cur) => {
      return sum + cur;
    }, 0);
  }
  return 0;
}

// console.log(calPoints(['5', '2', 'C', 'D', '+']));
console.log(calPoints(['5', '-2', '4', 'C', 'D', '9', '+', '+']));
