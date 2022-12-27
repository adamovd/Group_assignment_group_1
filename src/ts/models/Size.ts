import { products } from "./productList";

export class Size {
  constructor(
    public firstSize: string,
    public secondSize?: string,
    public thirdSize?: string
  ) {}
}
