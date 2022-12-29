import { cartButton } from "./cart";
import { createFooter } from "./footer";
import { createMenu, toggleHamburgerMenu } from "./header";
import { createPromotion } from "./promo";

window.addEventListener("load", () => {
  createMenu();
  toggleHamburgerMenu();
  cartButton();
  createPromotion();
  createFooter();
});
