function removeOuterParentheses(s: string): string {
  let ans: string[] = [];
  let stack: string[] = [];
  let acc: string = '';
  for (let i = 0; i < s.length; i++) {
    acc += s[i];
    if (s[i] === '(') {
      stack.push('(');
    } else if (s[i] === ')') {
      stack.pop();
      if (stack.length === 0) {
        ans.push(acc);
        acc = '';
      }
    }
  }
  return ans
    .map((value) => {
      return value.substring(1, value.length - 1);
    })
    .join('');
}

console.log(removeOuterParentheses('(()())(())'));
console.log(removeOuterParentheses('(()())(())(()(()))'));
console.log(removeOuterParentheses('()()'));
