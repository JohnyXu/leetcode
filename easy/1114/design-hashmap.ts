interface MapDefine {
  [key: number]: number;
}

class MyHashMap {
  constructor(public map: MapDefine) {
    this.map = {};
  }

  put(key: number, value: number): void {
    this.map[key] = value;
  }

  get(key: number): number {
    return this.map[key] === undefined ? -1 : this.map[key];
  }

  remove(key: number): void {
    delete this.map[key];
  }
}

/**
 * Your MyHashMap object will be instantiated and called as such:
 * var obj = new MyHashMap()
 * obj.put(key,value)
 * var param_2 = obj.get(key)
 * obj.remove(key)
 */
