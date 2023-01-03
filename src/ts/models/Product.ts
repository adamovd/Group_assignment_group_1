export class Product {
  constructor(
    public id: string,
    public name: string,
    public price: number,
    public image: string,
    public type: string,
    public description: string,
    public size: string,
    public secondImage?: string,
    public thirdImage?: string
  ) {}
}
