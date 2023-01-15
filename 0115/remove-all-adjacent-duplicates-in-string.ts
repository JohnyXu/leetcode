function removeDuplicates(s: string): string {
  let stack: string[] = [];
  for (let i = 0; i < s.length; i++) {
    const cur = s[i];
    if (stack.length && stack[stack.length - 1] === cur) {
      stack.pop();
    } else {
      stack.push(cur);
    }
  }
  return stack.join('');
}

// console.log(removeDuplicates('abbaca'));
// console.log(removeDuplicates('azxxzy'));
console.log(removeDuplicates('abbbabaaa'));
