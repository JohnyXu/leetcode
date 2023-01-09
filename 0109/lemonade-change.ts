//UNRESOLVED
function lemonadeChange(bills: number[]): boolean {
  let ans: number[] = [];
  for (let i = 0; i < bills.length; i++) {
    const cur = bills[i];
    if (cur === 5) {
      ans.push(cur);
    } else {
      let removes: number[] = [];
      let left: number = cur - 5;
      let index: number = ans.length - 1;
      while (index >= 0) {
        if (left >= ans[index]) {
          left -= ans[index];
          removes.push(index);
          if (left === 0) {
            break;
          }
        }
        index--;
      }

      if (left !== 0) {
        console.log(i, left, ans[0]);
        return false;
      }
      ans = ans.filter((val, idx) => {
        return !removes.includes(idx);
      });
      ans.push(cur);
      ans.sort((a, b) => a - b);
    }
  }
  return true;
}

// console.log(lemonadeChange([5, 5, 5, 10, 20]));
// console.log(lemonadeChange([5, 5, 10, 10, 20]));
// console.log(lemonadeChange([10, 10]));
// console.log(lemonadeChange([5, 5, 5, 10, 5, 5, 10, 20, 20, 20]));
