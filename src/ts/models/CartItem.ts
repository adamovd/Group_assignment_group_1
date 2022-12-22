import { Product } from "./Product";

export class CartItem {
  amount: number;
  constructor(public product: Product) {
    this.amount = 1;
  }
  addItem(add: number) {
    this.amount += add;
  }
  removeItem(remove: number) {
    this.amount -= remove;
  }
}
