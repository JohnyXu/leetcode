class MyHashSet {
  constructor(public list: number[]) {
    this.list = [];
  }

  add(key: number): void {
    if (this.contains(key)) {
      return;
    }
    this.list.push(key);
  }

  remove(key: number): void {
    const newList: number[] = [];
    for (let i = 0; i < this.list.length; i++) {
      const num = this.list[i];
      if (num !== key) {
        newList.push(num);
      }
    }
    this.list = newList;
  }

  contains(key: number): boolean {
    for (const num of this.list) {
      if (num === key) {
        return true;
      }
    }
    return false;
  }
}

/**
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = new MyHashSet()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */
