import { cartButton } from "./cart";
import { createFooter } from "./footer";
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

customerForm.addEventListener("submit", async (event: SubmitEvent) => {
  event.preventDefault();
  let form: FormData = new FormData(customerForm);
  console.log(form.values());
  await saveCustomer();
});

// let customerfromLS = JSON.parse(localStorage.getItem("customer") || "{}");

// let customerInfo = customerfromLS.map((customer: Customer) => {
//   return new Customer(
//     customer.name,
//     customer.lastname,
//     customer.adress,
//     customer.city,
//     customer.zip,
//     customer.phone,
//     customer.mail
//   );
// });
