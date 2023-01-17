function divideString(s: string, k: number, fill: string): string[] {
  let group: string[] = [];
  let sub: string = '';
  for (let i = 0; i < s.length; i++) {
    const ch = s[i];
    if (sub.length < k) {
      sub += ch;
    } else {
      let newS: string = sub;
      group.push(newS);
      sub = ch;
    }
  }

  if (sub.length < k) {
    let sLen: number = sub.length;
    for (let i = sLen; i < k; i++) {
      sub += fill;
    }
  }
  group.push(sub);
  return group;
}
