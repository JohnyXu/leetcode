function freqAlphabets(s: string): string {
  let mapping: Map<string, string> = new Map<string, string>();

  for (let i = 1; i <= 26; i++) {
    if (i < 10) {
      mapping.set(i.toString(), String.fromCharCode('a'.charCodeAt(0) + i - 1));
    } else {
      mapping.set(i.toString() + '#', String.fromCharCode('a'.charCodeAt(0) + i - 1));
    }
  }

  let index: number = 0;
  let acc: string = '';
  while (true) {
    if (s[index + 2] === '#') {
      const key: string = s[index] + s[index + 1] + s[index + 2];
      acc += mapping.get(key) as string;
      index += 3;
    } else {
      acc += mapping.get(s[index]);
      index += 1;
    }
    if (index >= s.length) {
      break;
    }
  }
  return acc;
}

console.log(freqAlphabets('10#11#12'));
console.log(freqAlphabets('1326#'));
