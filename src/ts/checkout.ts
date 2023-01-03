import { cartButton } from "./cart";
import { createFooter } from "./footer";
import { generatePurchase } from "./functions/generatePurchase";
import { presentCheckout } from "./functions/presentCheckout";
import { saveCustomer } from "./functions/saveCustomer";
import { createBadge, createMenu, toggleHamburgerMenu } from "./header";
import { CartItem } from "./models/CartItem";

window.addEventListener("load", () => {
  createMenu();
  toggleHamburgerMenu();
  presentCheckout(cartProducts);
  cartButton();
  createFooter();
  createBadge();
});

let cartProductsFromLS: CartItem[] = [];
cartProductsFromLS = JSON.parse(localStorage.getItem("cart") || "[]");
let cartProducts = cartProductsFromLS.map((cartProducts) => {
  return new CartItem(cartProducts.product, cartProducts.amount);
});

const shipmentExpress: HTMLInputElement = document.querySelector(
  ".express"
) as HTMLInputElement;
const shipmentStandard: HTMLInputElement = document.querySelector(
  ".standard"
) as HTMLInputElement;

shipmentExpress.addEventListener("click", () => {
  console.log(1);
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
  payment();
});

const paymentContainer: HTMLElement = document.querySelector(
  ".payment"
) as HTMLElement;

function payment() {
  const paymentMethods: HTMLElement = document.querySelector(
    ".payment__methods"
  ) as HTMLElement;
  const paymentCard: HTMLDivElement = document.createElement("div");
  const paymentCardRadio: HTMLInputElement = document.createElement("input");
  const paymentCardLabel: HTMLLabelElement = document.createElement("label");
  const paymentInvoice: HTMLDivElement = document.createElement("div");
  const paymentInvoiceRadio: HTMLInputElement = document.createElement("input");
  const paymentInvoiceLabel: HTMLLabelElement = document.createElement("label");

  paymentCard.classList.add("form-check");
  paymentInvoice.classList.add("form-check");
  paymentCardRadio.classList.add("form-check-input");
  paymentInvoiceRadio.classList.add("form-check-input");
  paymentCardLabel.classList.add("form-check-label");
  paymentInvoiceLabel.classList.add("form-check-label");
  paymentCardRadio.setAttribute("id", "credit");
  paymentCardRadio.setAttribute("name", "paymentMethod");
  paymentCardRadio.type = "radio";
  paymentCardRadio.required = true;
  paymentCardRadio.checked = true;
  paymentInvoiceRadio.setAttribute("id", "invoice");
  paymentInvoiceRadio.setAttribute("name", "paymentMethod");
  paymentInvoiceRadio.type = "radio";
  paymentInvoiceRadio.required = true;
  paymentCardLabel.setAttribute("for", "credit");
  paymentInvoiceLabel.setAttribute("for", "invoice");

  paymentCardLabel.innerHTML = "Pay by card";
  paymentInvoiceLabel.innerHTML = "Pay by invoice";

  if (paymentCardRadio.checked) {
    cardPayment();
  }

  paymentCardRadio.addEventListener("click", () => {
    console.log(1);
    cardPayment();
  });

  paymentInvoiceRadio.addEventListener("click", () => {
    console.log(2);
    invoicePayment();
  });

  paymentCard.appendChild(paymentCardRadio);
  paymentCard.appendChild(paymentCardLabel);
  paymentInvoice.appendChild(paymentInvoiceRadio);
  paymentInvoice.appendChild(paymentInvoiceLabel);
  paymentMethods.appendChild(paymentCard);
  paymentMethods.appendChild(paymentInvoice);
}

const paymentChoices: HTMLElement = document.querySelector(
  ".payment__choice"
) as HTMLElement;

function cardPayment() {
  paymentChoices.innerHTML = "";
  const cardForm: HTMLFormElement = document.createElement("form");
  const cardNameDiv: HTMLDivElement = document.createElement("div");
  const cardNumberDiv: HTMLDivElement = document.createElement("div");
  const cardExpirationDiv: HTMLDivElement = document.createElement("div");
  const cardCVVDiv: HTMLDivElement = document.createElement("div");
  const rowDiv: HTMLDivElement = document.createElement("div");
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
  const submitBtn: HTMLButtonElement = document.createElement("button");

  cardForm.classList.add("form");
  cardForm.classList.add("card");
  cardNameDiv.classList.add("card__name");
  cardNumberDiv.classList.add("card__number");
  cardExpirationDiv.classList.add("card__expiration");
  cardCVVDiv.classList.add("card__cvv");
  rowDiv.classList.add("card__row");
  cardNameInput.classList.add("form-control");
  cardNumberInput.classList.add("form-control");
  cardExpirationInput.classList.add("form-control");
  cardCVVInput.classList.add("form-control");
  cardNameInput.classList.add("card__nameinput");
  cardNumberInput.classList.add("card__numberinput");
  cardExpirationInput.classList.add("card__expirationinput");
  cardCVVInput.classList.add("card__cvvinput");
  cardNameInvalid.classList.add("invalid-feedback");
  cardNumberInvalid.classList.add("invalid-feedback");
  cardExpirationInvalid.classList.add("invalid-feedback");
  cardCVVInvalid.classList.add("invalid-feedback");
  submitBtn.classList.add("btn");
  submitBtn.classList.add("btn-primary");
  submitBtn.classList.add("pay");
  cardNameInput.setAttribute("id", "name");
  cardNumberInput.setAttribute("id", "number");
  cardExpirationInput.setAttribute("id", "expiration");
  cardCVVInput.setAttribute("id", "cvv");
  cardNameInput.type = "text";
  cardNumberInput.type = "text";
  cardExpirationInput.type = "text";
  cardCVVInput.type = "text";
  submitBtn.type = "submit";
  cardNameInput.required = true;
  cardNumberInput.required = true;
  cardExpirationInput.required = true;
  cardCVVInput.required = true;
  cardNameLabel.classList.add("form-label");
  cardNumberLabel.classList.add("form-label");
  cardExpirationLabel.classList.add("form-label");
  cardCVVLabel.classList.add("form-label");
  cardNameLabel.setAttribute("for", "name");
  cardNumberLabel.setAttribute("for", "number");
  cardExpirationLabel.setAttribute("for", "expiration");
  cardCVVLabel.setAttribute("for", "cvv");
  cardNameLabel.setAttribute("placeholder", "Name on card");
  cardNumberLabel.setAttribute("placeholder", "Card number");
  cardExpirationLabel.setAttribute("placeholder", "DD/YY");
  cardCVVLabel.setAttribute("placeholder", "CVV");

  cardNameLabel.innerHTML = "Name on card";
  cardNumberLabel.innerHTML = "Card number";
  cardExpirationLabel.innerHTML = "Expiration";
  cardCVVLabel.innerHTML = "CVV";
  submitBtn.innerHTML = "Pay and place order";

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
  cardForm.appendChild(cardNameDiv);
  cardForm.appendChild(cardNumberDiv);
  cardForm.appendChild(rowDiv);
  rowDiv.appendChild(cardExpirationDiv);
  rowDiv.appendChild(cardCVVDiv);
  cardForm.appendChild(submitBtn);
  paymentChoices.appendChild(cardForm);

  cardForm.addEventListener("submit", (event: SubmitEvent) => {
    event.preventDefault();
    window.scrollTo(0, 0);
    localStorage.setItem("order", JSON.stringify(cartProducts));
    localStorage.removeItem("cart");
    generatePurchase();
  });
}

function invoicePayment() {
  paymentChoices.innerHTML = "";
  const useDeliveryInfoDiv: HTMLDivElement = document.createElement("div");
  const useDeliveryInfoLabel: HTMLLabelElement =
    document.createElement("label");
  const useDeliveryInfoInput: HTMLInputElement =
    document.createElement("input");
  const invoiceForm: HTMLFormElement = document.createElement("form");
  const invoicePnrDiv: HTMLDivElement = document.createElement("div");
  const invoicePnrLabel: HTMLLabelElement = document.createElement("label");
  const invoicePnrInput: HTMLInputElement = document.createElement("input");
  const submitBtn: HTMLButtonElement = document.createElement("button");

  useDeliveryInfoDiv.classList.add("form-check");
  useDeliveryInfoLabel.classList.add("form-check-label");
  useDeliveryInfoInput.classList.add("form-check-input");
  submitBtn.classList.add("btn");
  submitBtn.classList.add("btn-primary");
  submitBtn.classList.add("pay");
  useDeliveryInfoInput.setAttribute("id", "info");
  useDeliveryInfoLabel.setAttribute("for", "info");
  useDeliveryInfoInput.type = "radio";
  useDeliveryInfoInput.checked = true;
  invoiceForm.classList.add("form");
  invoiceForm.classList.add("invoice");
  invoicePnrDiv.classList.add("invoice__pnr");
  invoicePnrLabel.classList.add("form-label");
  invoicePnrInput.classList.add("form-control");
  invoicePnrLabel.setAttribute("for", "name");
  invoicePnrInput.setAttribute("id", "name");
  invoicePnrInput.type = "text";
  submitBtn.type = "submit";
  invoicePnrInput.required = true;

  useDeliveryInfoLabel.innerHTML = "Use my delivery info";
  invoicePnrLabel.innerHTML = "Personal ID number:";
  submitBtn.innerHTML = "Pay and place order";

  paymentChoices.appendChild(useDeliveryInfoDiv);
  paymentChoices.appendChild(invoiceForm);
  useDeliveryInfoDiv.appendChild(useDeliveryInfoLabel);
  useDeliveryInfoDiv.appendChild(useDeliveryInfoInput);
  invoiceForm.appendChild(invoicePnrDiv);
  invoiceForm.appendChild(invoicePnrLabel);
  invoiceForm.appendChild(invoicePnrInput);
  invoiceForm.appendChild(submitBtn);

  useDeliveryInfoInput.addEventListener("click", () => {});

  invoiceForm.addEventListener("submit", (event: SubmitEvent) => {
    event.preventDefault();
    window.scrollTo(0, 0);
    localStorage.setItem("order", JSON.stringify(cartProducts));
    localStorage.removeItem("cart");
    generatePurchase();
  });
}
