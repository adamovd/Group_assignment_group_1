import { cartButton } from "./cart";
import { createFQA } from "./faq";
import { createBadge, createMenu, toggleHamburgerMenu } from "./header";
import { createFooter } from "./footer";

window.addEventListener("load", () => {
  createMenu();
  toggleHamburgerMenu();
  cartButton();
  createFQA();
  createFooter();
  createBadge();
});

export function createThankYouMessage() {
  let showMessage: HTMLParagraphElement = document.querySelector(
    ".thankYouMessage"
  ) as HTMLParagraphElement;
  showMessage.style.display = "none";

  let contactForm: HTMLFormElement = document.querySelector(
    ".contactForm"
  ) as HTMLFormElement;

  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();

    contactForm.style.display = "none";

    let showMessage: HTMLParagraphElement = document.querySelector(
      ".thankYouMessage"
    ) as HTMLParagraphElement;
    showMessage.style.display = "block";
  });
}

createThankYouMessage();
