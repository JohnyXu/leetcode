function getNumber(s: string): number {
  const mapping: Map<string, string> = new Map<string, string>([
    ['a', '0'],
    ['b', '1'],
    ['c', '2'],
    ['d', '3'],
    ['e', '4'],
    ['f', '5'],
    ['g', '6'],
    ['h', '7'],
    ['i', '8'],
    ['j', '9'],
  ]);

  let acc: string = '';
  for (let i = 0; i < s.length; i++) {
    acc += mapping.get(s[i]) as string;
  }
  return parseInt(acc);
}

function isSumEqual(firstWord: string, secondWord: string, targetWord: string): boolean {
  let first: number = getNumber(firstWord);
  let second: number = getNumber(secondWord);
  let target: number = getNumber(targetWord);
  return first + second === target;
}

console.log(isSumEqual('acb', 'cba', 'cdb'));
console.log(isSumEqual('aaa', 'a', 'aab'));
console.log(isSumEqual('aaa', 'a', 'aaaa'));
