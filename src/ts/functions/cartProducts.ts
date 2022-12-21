import { Product } from "../models/Product";

export function addToCart(cartProducts: Product[]) {
  cartProducts = JSON.parse(localStorage.getItem("cart") || "[]");
  console.log(cartProducts);
}
