function randomCh(exa: string, exb: string) {
  let sets: Set<string> = new Set<string>();
  const ch0Code: number = 'a'.charCodeAt(0);
  for (let i = 0; i < 26; i++) {
    sets.add(String.fromCharCode(i + ch0Code));
  }
  if (sets.has(exa)) {
    sets.delete(exa);
  }
  if (sets.has(exb)) {
    sets.delete(exb);
  }
  for (const ch of sets.values()) {
    return ch;
  }
  return '';
}

function modifyString(s: string): string {
  if (s.length === 1) {
    if (s === '?') {
      return randomCh('', '');
    }
    return s;
  }
  let ans: string = '';

  if (s[0] === '?') {
    if (s[1] === '?') {
      ans += randomCh('', '');
    } else {
      ans += randomCh(s[1], '');
    }
  } else {
    ans += s[0];
  }

  let prev: string = ans[0];
  for (let i = 1; i < s.length; i++) {
    const cur: string = s[i];
    if (cur === '?') {
      if (i < s.length - 1) {
        const next: string = s[i + 1];
        ans += randomCh(prev, next);
      } else {
        ans += randomCh(prev, '?');
      }
    } else {
      ans += cur;
    }
    prev = ans[i];
  }
  return ans;
}
