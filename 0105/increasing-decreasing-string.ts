function sortString(s: string): string {
  const sortS = s.split('').sort((a, b) => a.charCodeAt(0) - b.charCodeAt(0));
  const group: string[] = [];

  let acc: string = '';
  for (let i = 0; i < sortS.length; i++) {
    acc += sortS[i];
    if (sortS[i] !== sortS[i + 1]) {
      group.push(acc);
      acc = '';
    }
  }
  let groupArr: string[][] = group.map((val) => {
    return val.split('');
  });

  let ans: string = '';
  while (true) {
    for (const arr of groupArr) {
      if (arr.length > 0) {
        ans += arr.pop();
      }
    }
    groupArr = groupArr.reverse();
    const count = groupArr.reduce((a, c) => {
      return a + c.length;
    }, 0);
    if (count <= 0) {
      break;
    }
  }
  return ans;
}

console.log(sortString('aaaabbbbcccc'));
console.log(sortString('rat'));
console.log(sortString('g'));
