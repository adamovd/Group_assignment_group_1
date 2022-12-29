import { createFooter } from "./about";
import { cartButton } from "./cart";
import { createMenu, toggleHamburgerMenu } from "./header";

window.addEventListener("load", () => {
  createMenu();
  toggleHamburgerMenu();
  cartButton();
  createFooter();
});
