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

export function createThankYouMessage() {
  let showMessage: HTMLParagraphElement = document.querySelector(
    ".thankYouMessage"
  ) as HTMLParagraphElement;
  showMessage.style.display = "none";
  let formSubmitBtn: HTMLButtonElement = document.querySelector(
    ".thankYouBtn"
  ) as HTMLButtonElement;
  formSubmitBtn.addEventListener("click", (e) => {
    e.preventDefault();
    let hideForm: HTMLFormElement = document.querySelector(
      ".contactForm"
    ) as HTMLFormElement;
    hideForm.style.display = "none";
    let showMessage: HTMLParagraphElement = document.querySelector(
      ".thankYouMessage"
    ) as HTMLParagraphElement;
    showMessage.style.display = "block";
  });
}

createThankYouMessage();
