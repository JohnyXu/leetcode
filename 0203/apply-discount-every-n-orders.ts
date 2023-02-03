class Cashier {
  n: number;
  discount: number;
  products: number[];
  prices: number[];
  counter: number;

  constructor(n: number, discount: number, products: number[], prices: number[]) {
    this.n = n;
    this.discount = discount;
    this.products = products;
    this.prices = prices;
    this.counter = 0;
  }

  getBill(product: number[], amount: number[]): number {
    let sum: number = 0;
    for (let i = 0; i < product.length; i++) {
      const id = product[i];
      const idx: number = this.products.indexOf(id);
      sum += this.prices[idx - 1] * amount[i];
    }
    this.counter += 1;
    if (this.counter === this.n) {
      sum = (sum * (100 - this.discount)) / 100;
      this.counter = 0;
    }
    return sum;
  }
}

/**
 * Your Cashier object will be instantiated and called as such:
 * var obj = new Cashier(n, discount, products, prices)
 * var param_1 = obj.getBill(product,amount)
 */
