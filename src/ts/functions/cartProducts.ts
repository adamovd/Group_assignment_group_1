import { Product } from "../models/Product";

export function addToCart(newProduct: Product) {
  let productsInCart: Product[] = [];
  if (localStorage.getItem("productToCart")) {
  }
  productsInCart.push(newProduct);

  console.log(productsInCart);
}
