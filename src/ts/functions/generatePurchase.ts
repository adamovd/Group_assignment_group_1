import { CartItem } from "../models/CartItem";
import { Customer } from "../models/Customer";
import { presentCheckout } from "./presentCheckout";

export function generatePurschase() {
  const cartModalBody: HTMLUListElement = document.getElementById(
    "modal-body"
  ) as HTMLUListElement;

  let checkoutProductsFromLS: CartItem[] = [];
  checkoutProductsFromLS = JSON.parse(localStorage.getItem("cart") || "[]");
  let cartProducts = checkoutProductsFromLS.map((cartProducts) => {
    return new CartItem(cartProducts.product, cartProducts.amount);
  });

  let customerfromLS = JSON.parse(localStorage.getItem("customer") || "{}");

  let customerInfo: Customer = customerfromLS.map((customer: Customer) => {
    return new Customer(
      customer.name,
      customer.lastname,
      customer.adress,
      customer.city,
      customer.zip,
      customer.phone,
      customer.mail
    );
  });

  cartModalBody.innerHTML = "";

  const purchaseContainer: HTMLDivElement = document.createElement("div");
  presentCheckout(cartProducts);
  const customerName: HTMLParagraphElement = document.createElement("p");
  const customerLastName: HTMLParagraphElement = document.createElement("p");
  const customerAdress: HTMLParagraphElement = document.createElement("p");
  const customerCity: HTMLParagraphElement = document.createElement("p");
  const customerZip: HTMLParagraphElement = document.createElement("p");
  const customerPhone: HTMLParagraphElement = document.createElement("p");
  const customerMail: HTMLParagraphElement = document.createElement("p");

  customerName.innerHTML = customerInfo.name;

  cartModalBody.append(customerName);
}
