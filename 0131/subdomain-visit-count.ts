function subdomainVisits(cpdomains: string[]): string[] {
  let map = new Map();
  for (let i = 0; i < cpdomains.length; i++) {
    const s = cpdomains[i].split(' ');
    const count: number = +s[0];
    const domains: string[] = s[1].split('.');

    let acc: string = '';
    for (let j = domains.length - 1; j >= 0; j--) {
      if (acc.length <= 0) {
        acc += domains[j];
      } else {
        acc = domains[j] + '.' + acc;
      }
      map.set(acc, (map.get(acc) ?? 0) + count);
    }
  }
  let ans: string[] = [];
  for (const key of map.keys()) {
    const count: number = map.get(key);
    const s: string = count + ' ' + key;
    ans.push(s);
  }
  return ans;
}
