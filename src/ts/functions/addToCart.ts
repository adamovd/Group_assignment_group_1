import { Product } from "../models/Product";

export function addToCart(cartProducts: Product[]) {
  cartProducts = JSON.parse(localStorage.getItem("cart") || "[]");
  console.log(cartProducts);
  presentCart(cartProducts);
}
const cartProducts: Product[] = [];

export function cartButton() {
  const modalBtn: HTMLButtonElement = document.getElementById(
    "openCart"
  ) as HTMLButtonElement;
  modalBtn.type = "button";
  modalBtn.classList.add("btn");
  modalBtn.setAttribute("data-bs-toggle", "modal");
  modalBtn.setAttribute("data-bs-target", "#cartModal");
  modalBtn.addEventListener("click", () => {
    console.log("Klick");

    presentCart(cartProducts);
  });
}

export function presentCart(cartProducts: Product[]) {
  cartProducts = JSON.parse(localStorage.getItem("cart") || "[]");
  const modal: HTMLDivElement = document.getElementById(
    "cartModal"
  ) as HTMLDivElement;

  let cartModalBody: HTMLDivElement = document.getElementById(
    "modal-body"
  ) as HTMLDivElement;
  cartModalBody.innerHTML = "";

  for (let i = 0; i < cartProducts.length; i++) {
    const cartProductName: HTMLParagraphElement = document.createElement("p");
    const cartProductPrice: HTMLParagraphElement = document.createElement("p");
    const cartProductImg: HTMLImageElement = document.createElement("img");
    const cartProductAmount: HTMLParagraphElement = document.createElement("p");
    const cartProductAdd: HTMLButtonElement = document.createElement("button");
    const cartProductRemove: HTMLButtonElement =
      document.createElement("button");

    cartProductName.classList.add("cartproduct__name");
    cartProductPrice.classList.add("cartproduct__price");
    cartProductImg.classList.add("cartproduct__img");
    cartProductAmount.classList.add("cartproduct__amount");
    cartProductAdd.classList.add("cartproduct__add");
    cartProductRemove.classList.add("cartproduct__remove");

    cartProductName.innerHTML = cartProducts[i].name;
    cartProductPrice.innerHTML = cartProducts[i].price.toString();
    cartProductImg.src = cartProducts[i].image;
    cartProductAmount.innerHTML = cartProducts[i].amount.toString();
    cartProductAdd.innerHTML = "+";
    cartProductRemove.innerHTML = "-";

    cartModalBody.appendChild(cartProductImg);
    cartModalBody.appendChild(cartProductName);
    cartModalBody.appendChild(cartProductPrice);
    cartModalBody.appendChild(cartProductAdd);
    cartModalBody.appendChild(cartProductAmount);
    cartModalBody.appendChild(cartProductRemove);
  }
}
