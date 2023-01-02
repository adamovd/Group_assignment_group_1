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

const paymentContainer: HTMLElement = document.querySelector(
  ".payment__choice"
) as HTMLElement;
const paymentCardRadio: HTMLInputElement = document.getElementById(
  "credit"
) as HTMLInputElement;
const paymentInvoiceRadio: HTMLInputElement = document.getElementById(
  "invoice"
) as HTMLInputElement;

paymentCardRadio.type = "radio";
paymentInvoiceRadio.type = "radio";

paymentCardRadio.addEventListener("click", () => {
  cardPayment();
});

paymentInvoiceRadio.addEventListener("click", () => {
  invoicePayment();
});

function cardPayment() {
  paymentContainer.innerHTML = "";
  const cardNameDiv: HTMLDivElement = document.createElement("div");
  const cardNumberDiv: HTMLDivElement = document.createElement("div");
  const cardExpirationDiv: HTMLDivElement = document.createElement("div");
  const cardCVVDiv: HTMLDivElement = document.createElement("div");
  const cardNameLabel: HTMLLabelElement = document.createElement("label");
  const cardNumberLabel: HTMLLabelElement = document.createElement("label");
  const cardExpirationLabel: HTMLLabelElement = document.createElement("label");
  const cardCVVLabel: HTMLLabelElement = document.createElement("label");
  const cardNameInput: HTMLInputElement = document.createElement("input");
  const cardNumberInput: HTMLInputElement = document.createElement("input");
  const cardExpirationInput: HTMLInputElement = document.createElement("input");
  const cardCVVInput: HTMLInputElement = document.createElement("input");
  const cardNameInvalid: HTMLDivElement = document.createElement("div");
  const cardNumberInvalid: HTMLDivElement = document.createElement("div");
  const cardExpirationInvalid: HTMLDivElement = document.createElement("div");
  const cardCVVInvalid: HTMLDivElement = document.createElement("div");

  cardNameDiv.classList.add("col-md-3");
  cardNumberDiv.classList.add("col-md-3");
  cardExpirationDiv.classList.add("col-md-3");
  cardCVVDiv.classList.add("col-md-3");
  cardNameLabel.classList.add("form-label");
  cardNumberLabel.classList.add("form-label");
  cardExpirationLabel.classList.add("form-label");
  cardCVVLabel.classList.add("form-label");
  cardNameInput.classList.add("form-control");
  cardNumberInput.classList.add("form-control");
  cardExpirationInput.classList.add("form-control");
  cardCVVInput.classList.add("form-control");
  cardNameInvalid.classList.add("invalid-feedback");
  cardNumberInvalid.classList.add("invalid-feedback");
  cardExpirationInvalid.classList.add("invalid-feedback");
  cardCVVInvalid.classList.add("invalid-feedback");
  cardNameLabel.setAttribute("for", "name");
  cardNumberLabel.setAttribute("for", "number");
  cardExpirationLabel.setAttribute("for", "expiration");
  cardCVVLabel.setAttribute("for", "cvv");
  cardNameInput.setAttribute("id", "name");
  cardNumberInput.setAttribute("id", "number");
  cardExpirationInput.setAttribute("id", "expiration");
  cardCVVInput.setAttribute("id", "cvv");
  cardNameInput.type = "text";
  cardNumberInput.type = "text";
  cardExpirationInput.type = "text";
  cardCVVInput.type = "text";
  cardNameInput.required = true;
  cardNumberInput.required = true;
  cardExpirationInput.required = true;
  cardCVVInput.required = true;

  cardNameLabel.innerHTML = "Name on card";
  cardNumberLabel.innerHTML = "Card number";
  cardExpirationLabel.innerHTML = "Expiration";
  cardCVVLabel.innerHTML = "CVV";

  cardNameDiv.appendChild(cardNameLabel);
  cardNameDiv.appendChild(cardNameInput);
  cardNameDiv.appendChild(cardNameInvalid);
  cardNumberDiv.appendChild(cardNumberLabel);
  cardNumberDiv.appendChild(cardNumberInput);
  cardNumberDiv.appendChild(cardNumberInvalid);
  cardExpirationDiv.appendChild(cardExpirationLabel);
  cardExpirationDiv.appendChild(cardExpirationInput);
  cardExpirationDiv.appendChild(cardExpirationInvalid);
  cardCVVDiv.appendChild(cardCVVLabel);
  cardCVVDiv.appendChild(cardCVVInput);
  cardCVVDiv.appendChild(cardCVVInvalid);
  paymentContainer.appendChild(cardNameDiv);
  paymentContainer.appendChild(cardNumberDiv);
  paymentContainer.appendChild(cardExpirationDiv);
  paymentContainer.appendChild(cardCVVDiv);
}

function invoicePayment() {
  paymentContainer.innerHTML = "";
  const useDeliveryInfoDiv: HTMLDivElement = document.createElement("div");
  const useDeliveryInfoLabel: HTMLLabelElement =
    document.createElement("label");
  const useDeliveryInfoInput: HTMLInputElement =
    document.createElement("input");
  const invoiceForm: HTMLFormElement = document.createElement("form");
  const invoicePnrDiv: HTMLDivElement = document.createElement("div");
  const invoicePnrLabel: HTMLLabelElement = document.createElement("label");
  const invoicePnrInput: HTMLInputElement = document.createElement("input");

  useDeliveryInfoDiv.classList.add("form-check");
  useDeliveryInfoLabel.classList.add("form-check-label");
  useDeliveryInfoInput.classList.add("form-check-input");
  useDeliveryInfoInput.setAttribute("id", "info");
  useDeliveryInfoLabel.setAttribute("for", "info");
  useDeliveryInfoInput.type = "radio";

  invoiceForm.classList.add("form");
  invoiceForm.classList.add("invoice__form");
  invoicePnrDiv.classList.add("invoice__pnr");
  invoicePnrLabel.classList.add("form-label");
  invoicePnrInput.classList.add("form-control");
  invoicePnrLabel.setAttribute("for", "name");
  invoicePnrInput.setAttribute("id", "name");
  invoicePnrInput.type = "text";
  invoicePnrInput.required = true;

  paymentContainer.appendChild(useDeliveryInfoDiv);
  useDeliveryInfoDiv.appendChild(useDeliveryInfoLabel);
  useDeliveryInfoDiv.appendChild(useDeliveryInfoInput);

  useDeliveryInfoInput.addEventListener("click", () => {});
}
