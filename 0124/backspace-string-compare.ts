function removeBackspace(s: string) {
  let ans: string = '';
  let add: number = 0;
  for (let i = s.length - 1; i >= 0; i--) {
    const ch = s[i];
    if (ch === '#') {
      add += 1;
    } else {
      if (add <= 0) {
        ans += ch;
      }
      if (add >= 1) {
        add -= 1;
      }
    }
  }
  return ans;
}

function backspaceCompare(s: string, t: string): boolean {
  let newS: string = removeBackspace(s);
  let newT: string = removeBackspace(t);

  return newS === newT;
}
