function shift(ch: string, num: number) {
  return String.fromCharCode(ch.charCodeAt(0) + num);
}

function replaceDigits(s: string): string {
  let ans: string[] = [];
  for (let i = 0; i < s.length; i += 2) {
    ans.push(s[i]);
    if (i + 1 >= s.length) {
      break;
    }
    const next: string = shift(s[i], parseInt(s[i + 1]));
    ans.push(next);
  }
  return ans.join('');
}

console.log(replaceDigits('a1c1e1'));
console.log(replaceDigits('a1b2c3d4e'));
