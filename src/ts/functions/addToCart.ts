import { CartItem } from "../models/CartItem";
import { Product } from "../models/Product";

let cartProducts: CartItem[] = [];

export function addToCart(product: Product) {
  let itemFound: boolean = false;
  let i: number = 0;
  let amount: number = 0;
  let cartProduct: CartItem = new CartItem(product, amount);
  if (cartProducts.length > 0) {
    console.log(1);

    for (let i = 0; i < cartProducts.length; i++) {
      if (product.id === cartProducts[i].product.id) {
        console.log(2);
        itemFound = true;
        i = cartProducts.indexOf(cartProducts[i]);
        amount = cartProducts[i].amount;
      }
    }
    if (itemFound) {
      console.log(3);
      cartProducts.splice(i, 1);
      cartProduct.addItem(1);
    } else {
      console.log(4);
      amount = 0;
      cartProduct.addItem(1);
    }
  } else {
    console.log(5);
    amount = 0;
    cartProduct.addItem(1);
  }
  cartProducts.push(cartProduct);
  localStorage.setItem("cart", JSON.stringify(cartProducts) || "[]");
}
