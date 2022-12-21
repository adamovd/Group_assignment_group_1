import { cartModal } from "./functions/cartModal";

let icon: HTMLParagraphElement = document.getElementById(
  "icon"
) as HTMLParagraphElement;

icon.addEventListener("click", () => {
  cartModal();
});
