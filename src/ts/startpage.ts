import { cartButton } from "./cart";
import { createFooter } from "./footer";
import { createMenu, toggleHamburgerMenu } from "./header";

window.addEventListener("load", () => {
  createMenu();
  toggleHamburgerMenu();
  cartButton();

  createFooter();
});
