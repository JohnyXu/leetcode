function maxDepth(s: string): number {
  let maxCount = 0;
  let stack: string[] = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(') {
      stack.push('(');
    } else if (s[i] === ')') {
      if (stack.length > maxCount) {
        maxCount = stack.length;
      }
      stack.pop();
    }
  }
  return maxCount;
}

console.log(maxDepth('(1+(2*3)+((8)/4))+1'));
console.log(maxDepth('(1)+((2))+(((3)))'));
