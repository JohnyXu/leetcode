class CustomStack {
  maxSize: number;
  data: number[];

  constructor(maxSize: number) {
    this.maxSize = maxSize;
    this.data = [];
  }

  push(x: number): void {
    if (this.data.length < this.maxSize) {
      this.data.push(x);
    }
  }

  pop(): number {
    if (this.data.length < 1) {
      return -1;
    }
    const x: number = this.data.pop() as number;
    return x;
  }

  increment(k: number, val: number): void {
    let count: number = k < this.data.length ? k : this.data.length;
    for (let i = 0; i < count; i++) {
      this.data[i] += val;
    }
  }
}

/**
 * Your CustomStack object will be instantiated and called as such:
 * var obj = new CustomStack(maxSize)
 * obj.push(x)
 * var param_2 = obj.pop()
 * obj.increment(k,val)
 */
