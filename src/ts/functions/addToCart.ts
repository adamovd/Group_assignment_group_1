import { createBadge } from "../header";
import { CartItem } from "../models/CartItem";
import { Product } from "../models/Product";

let cartProductsFromLS: CartItem[] = [];
export function addToCart(product: Product) {
  cartProductsFromLS = JSON.parse(localStorage.getItem("cart") || "[]");

  let cartProducts = cartProductsFromLS.map((cartProducts) => {
    return new CartItem(cartProducts.product, cartProducts.amount);
  });
  let cartProduct: CartItem = new CartItem(product, 1);
  let found: boolean = false;

  if (cartProducts.length === 0) {
    found = false;
  } else {
    for (let i = 0; i < cartProducts.length; i++) {
      cartProducts[i].product.id;
      if (cartProducts[i].product.id === cartProduct.product.id) {
        cartProducts[i].amount++;
        localStorage.setItem("cart", JSON.stringify(cartProducts) || "[]");
        found = true;
        createBadge();

        return;
      }
    }
  }
  if (found === false) {
    cartProducts.push(cartProduct);
    localStorage.setItem("cart", JSON.stringify(cartProducts) || "[]");
    createBadge();
  }
}
