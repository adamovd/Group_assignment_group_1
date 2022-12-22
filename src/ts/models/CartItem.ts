import { Product } from "./Product";

export class CartItem {
  constructor(public product: Product, public amount: number) {
    this.amount = amount;
  }
  addItem(add: number) {
    this.amount += add;
  }
  removeItem(remove: number) {
    this.amount -= remove;
  }
}
