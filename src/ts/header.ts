import { cartModal } from "./functions/cartModal";

let icon: HTMLButtonElement = document.getElementById(
  "icon"
) as HTMLButtonElement;

icon.addEventListener("click", cartModal);
