import { Product } from "../models/Product";
let cartProducts: Product[] = [];

export function addToCart(cartProducts: Product[]) {
  cartProducts = JSON.parse(localStorage.getItem("cart") || "[]");
  console.log(cartProducts);
  presentCart(cartProducts);
}

export function cartButton() {
  const modalBtn: HTMLButtonElement = document.getElementById(
    "openCart"
  ) as HTMLButtonElement;
  modalBtn.type = "button";
  modalBtn.classList.add("btn");
  modalBtn.setAttribute("data-bs-toggle", "modal");
  modalBtn.setAttribute("data-bs-target", "#cartModal");
  cartProducts = JSON.parse(localStorage.getItem("cart") || "[]");
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

  for (let i = 0; i < cartProducts.length; i++) {
    const cartProductUl: HTMLUListElement = document.createElement("ul");
    const cartProductLi: HTMLLIElement = document.createElement("li");
    const cartProductContainer: HTMLDivElement = document.createElement("div");
    const cartProductName: HTMLParagraphElement = document.createElement("p");
    const cartProductPrice: HTMLParagraphElement = document.createElement("p");
    const cartProductImg: HTMLImageElement = document.createElement("img");
    const cartProductAmount: HTMLParagraphElement = document.createElement("p");
    const cartProductAdd: HTMLButtonElement = document.createElement("button");
    const cartProductRemove: HTMLButtonElement =
      document.createElement("button");

    cartProductUl.classList.add("list-group");
    cartProductLi.classList.add("list-group-item");
    cartProductLi.classList.add("d-flex");
    cartProductLi.classList.add("justify-content-between");
    cartProductLi.classList.add("lh-sm");
    cartProductContainer.classList.add("cartproduct");
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

    cartModalBody.appendChild(cartProductUl);
    cartProductUl.appendChild(cartProductLi);
    cartProductLi.appendChild(cartProductContainer);
    cartProductLi.appendChild(cartProductImg);
    cartProductLi.appendChild(cartProductName);
    cartProductLi.appendChild(cartProductPrice);
    cartProductLi.appendChild(cartProductAdd);
    cartProductLi.appendChild(cartProductAmount);
    cartProductLi.appendChild(cartProductRemove);
  }
}
