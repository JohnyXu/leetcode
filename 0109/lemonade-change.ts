//UNRESOLVED
function lemonadeChange(bills: number[]): boolean {
  let five: number = 0;
  let ten: number = 0;
  for (let i = 0; i < bills.length; i++) {
    const cur = bills[i];
    if (cur === 5) {
      five++;
    } else {
      let left: number = cur - 5;
      five -= ten > 0 ? left / 5 : 1;
      if (left > 10 && ten > 0) {
        ten--;
      } else {
        ten++;
      }
    }
    if (five < 0) {
      return false;
    }
  }
  return true;
}

console.log(lemonadeChange([5, 5, 5, 10, 20]));
console.log(lemonadeChange([5, 5, 10, 10, 20]));
console.log(lemonadeChange([10, 10]));
console.log(lemonadeChange([5, 5, 5, 10, 5, 5, 10, 20, 20, 20]));
