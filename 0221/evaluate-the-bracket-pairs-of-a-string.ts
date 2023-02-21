function evaluate(s: string, knowledge: string[][]): string {
  let mapping = new Map();
  for (const [key, val] of knowledge) {
    mapping.set(`(${key})`, val);
  }
  let start: number = 0;
  while (s.indexOf('(', start) > -1) {
    start = s.indexOf('(', start);
    let end = s.indexOf(')', start);
    if (end > start) {
      let key = s.substring(start, end + 1);
      const prefix: string = s.substring(0, start) + (mapping.get(key) ?? '?');
      s = prefix + s.substring(end + 1);
      start = prefix.length;
    } else {
      break;
    }
  }
  return s;
}

console.log(
  evaluate('(name)is(age)yearsold', [
    ['name', 'bob'],
    ['age', 'two'],
  ]),
);
