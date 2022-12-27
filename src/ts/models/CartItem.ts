import { Product } from "./Product";

export class CartItem {
  constructor(
    public product: Product,
    public amount: number,
    public size?: string
  ) {
    this.amount = amount;
  }
  addItem(add: number) {
    this.amount += add;
  }
  removeItem(remove: number) {
    this.amount -= remove;
  }
}
