import { CartItem } from "../models/CartItem";
import { Customer } from "../models/Customer";
import { presentCheckout } from "./presentCheckout";

export function generatePurschase() {
  const checkout: HTMLElement = document.querySelector(
    ".checkout"
  ) as HTMLElement;
  checkout.innerHTML = "";

  let checkoutProductsFromLS: CartItem[] = [];
  checkoutProductsFromLS = JSON.parse(localStorage.getItem("cart") || "[]");
  let cartProducts = checkoutProductsFromLS.map((cartProducts) => {
    return new CartItem(cartProducts.product, cartProducts.amount);
  });

  presentCheckout(cartProducts);
  let customer = JSON.parse(localStorage.getItem("customer") || "{}");

  const purchaseContainer: HTMLDivElement = document.createElement("div");
  const purchaseTitle: HTMLParagraphElement = document.createElement("p");
  const purchaseText: HTMLParagraphElement = document.createElement("p");
  const customerContainer: HTMLDivElement = document.createElement("div");
  const customerName: HTMLParagraphElement = document.createElement("p");
  const customerAdress: HTMLParagraphElement = document.createElement("p");
  const customerCity: HTMLParagraphElement = document.createElement("p");
  const customerZip: HTMLParagraphElement = document.createElement("p");
  const customerPhone: HTMLParagraphElement = document.createElement("p");
  const customerMail: HTMLParagraphElement = document.createElement("p");

  purchaseContainer.classList.add("purchase");

  customerName.innerHTML = customer.name + " " + customer.lastname;

  checkout.append(customerName);
}
