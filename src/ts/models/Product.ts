export class Product {
  constructor(
    public name: string,
    public price: number,
    public image: string,
    public type: string,
    public description: string,
    public size: string,
    public secondImage?: string,
    public thirdImage?: string
  ) {}
  // addItem(add: number) {
  //   this.amount += add;
  // }
  // removeItem(remove: number) {
  //   this.amount -= remove;
  // }
}
