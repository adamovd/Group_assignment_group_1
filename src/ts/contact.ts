import { cartButton } from "./cart";
import { createFQA } from "./faq";
import { createMenu, toggleHamburgerMenu } from "./header";
import { createFooter } from "./footer";

window.addEventListener("load", () => {
  createMenu();
  toggleHamburgerMenu();
  cartButton();
  createFQA();
  createFooter();
});
