import { cartButton } from "./cart";
import { createFooter } from "./footer";
import { generatePurschase } from "./functions/generatePurchase";
import { presentCheckout } from "./functions/presentCheckout";
import { saveCustomer } from "./functions/saveCustomer";
import { createMenu, toggleHamburgerMenu } from "./header";
import { CartItem } from "./models/CartItem";
import { Customer } from "./models/Customer";

window.addEventListener("load", () => {
  createMenu();
  toggleHamburgerMenu();
  presentCheckout(cartProducts);
  cartButton();
  createFooter();
});

let cartProductsFromLS: CartItem[] = [];
cartProductsFromLS = JSON.parse(localStorage.getItem("cart") || "[]");
let cartProducts = cartProductsFromLS.map((cartProducts) => {
  return new CartItem(cartProducts.product, cartProducts.amount);
});

const customerForm: HTMLFormElement = document.querySelector(
  ".customer__form"
) as HTMLFormElement;
const customerNameInput: HTMLInputElement = document.getElementById(
  "name"
) as HTMLInputElement;
const customerLastnameInput: HTMLInputElement = document.getElementById(
  "lastname"
) as HTMLInputElement;
const customerAdressInput: HTMLInputElement = document.getElementById(
  "adress"
) as HTMLInputElement;
const customerCityInput: HTMLInputElement = document.getElementById(
  "cityname"
) as HTMLInputElement;
const customerZipInput: HTMLInputElement = document.getElementById(
  "zipcode"
) as HTMLInputElement;
const customerPhoneInput: HTMLInputElement = document.getElementById(
  "phone"
) as HTMLInputElement;
const customerMailInput: HTMLInputElement = document.getElementById(
  "email"
) as HTMLInputElement;
const payBtn: HTMLButtonElement = document.querySelector(
  ".pay"
) as HTMLButtonElement;
payBtn.addEventListener("click", () => {
  generatePurschase();
});

customerForm.addEventListener("submit", (event: SubmitEvent) => {
  event.preventDefault();
  const customerName: string = customerNameInput.value || "";
  console.log(customerName);
  const customerLastName: string = customerLastnameInput.value || "";
  console.log(customerLastName);
  const customerAdress: string = customerAdressInput.value || "";
  console.log(customerAdress);
  const customerCity: string = customerCityInput.value || "";
  console.log(customerCity);
  const customerZip: string = customerZipInput.value || "";
  console.log(customerZip);
  const customerPhone: string = customerPhoneInput.value || "";
  console.log(customerPhone);
  const customerMail: string = customerMailInput.value || "";

  saveCustomer(
    customerName,
    customerLastName,
    customerAdress,
    customerCity,
    customerZip,
    customerPhone,
    customerMail
  );
});
