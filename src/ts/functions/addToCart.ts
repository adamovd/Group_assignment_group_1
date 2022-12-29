import { CartItem } from "../models/CartItem";
import { Product } from "../models/Product";

let cartProducts: CartItem[] = [];
export function addToCart(product: Product) {
  let cartProduct: CartItem = new CartItem(product, 1);
  let found: boolean = false;

  if (cartProducts.length === 0) {
    found = false;
  } else {
    for (let i = 0; i < cartProducts.length; i++) {
      if (cartProducts[i].product.id === cartProduct.product.id) {
        cartProducts[i].amount++;
        localStorage.setItem("cart", JSON.stringify(cartProducts) || "[]");
        found = true;
        return;
      }
    }
  }
  if (found === false) {
    cartProducts.push(cartProduct);
    localStorage.setItem("cart", JSON.stringify(cartProducts) || "[]");
  }
}
