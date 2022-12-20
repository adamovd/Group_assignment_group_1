import { Product } from "../models/Product";
import { products } from "../models/productList";

export function addToCart(cartProduct: Product) {
  let cart: Product[] = [];

  cart.push(cartProduct);
  cart = JSON.parse(localStorage.getItem("cart") || "[]");

  console.log(cartProduct.name);
}
