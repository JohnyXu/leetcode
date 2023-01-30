class BrowserHistory {
  stk1: string[];
  stk2: string[];

  constructor(homepage: string) {
    this.stk1 = [];
    this.stk2 = [];
    this.visit(homepage);
  }

  visit(url: string): void {
    this.stk1.push(url);
    this.stk2 = [];
  }

  back(steps: number): string {
    while (steps && this.stk1.length > 1) {
      this.stk2.push(this.stk1.pop() as string);
      steps -= 1;
    }
    return this.stk1[this.stk1.length - 1];
  }

  forward(steps: number): string {
    while (steps && this.stk2.length > 1) {
      this.stk1.push(this.stk2.pop() as string);
      steps -= 1;
    }
    return this.stk1[this.stk1.length - 1];
  }
}

/**
 * Your BrowserHistory object will be instantiated and called as such:
 * var obj = new BrowserHistory(homepage)
 * obj.visit(url)
 * var param_2 = obj.back(steps)
 * var param_3 = obj.forward(steps)
 */
