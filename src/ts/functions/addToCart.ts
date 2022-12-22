import { CartItem } from "../models/CartItem";
import { Product } from "../models/Product";
import { products } from "../models/productList";

let cartProductsFromLS: CartItem[] = [];

export function addToCart(cartProducts: CartItem[]) {
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
  cartProductsFromLS = JSON.parse(localStorage.getItem("cart") || "[]");
  modalBtn.addEventListener("click", () => {
    console.log("Klick");

    presentCart(cartProductsFromLS);
  });
}

export function presentCart(cartProducts: CartItem[]) {
  cartProductsFromLS = JSON.parse(localStorage.getItem("cart") || "[]");

  cartProductsFromLS.map((cartProducts) => {
    return new CartItem(cartProducts.product, cartProducts.amount);
  });

  const modal: HTMLDivElement = document.getElementById(
    "cartModal"
  ) as HTMLDivElement;

  let cartModalBody: HTMLDivElement = document.getElementById(
    "modal-body"
  ) as HTMLDivElement;

  cartModalBody.innerHTML = "";

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

    cartProductName.innerHTML = cartProducts[i].product.name;
    cartProductPrice.innerHTML = cartProducts[i].product.price.toString();
    cartProductImg.src = cartProducts[i].product.image;
    cartProductAmount.innerHTML = cartProducts[i].amount.toString();
    cartProductAdd.innerHTML = "+";
    cartProductRemove.innerHTML = "-";

    cartProductAdd.addEventListener("click", () => {
      console.log(cartProducts[i]);
      cartProducts[i].addItem(1);
      localStorage.setItem("cart", JSON.stringify(cartProducts) || "");
      presentCart(cartProducts);
      console.log(cartProducts[i].amount);
    });

    cartProductRemove.addEventListener("click", () => {
      console.log(cartProducts[i]);
      cartProducts[i].removeItem(1);
      localStorage.setItem("cart", JSON.stringify(cartProducts) || "[]");
      presentCart(cartProducts);
      console.log(cartProducts[i].amount);
    });

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

  let sum = 0;
  const totalAmount: HTMLParagraphElement = document.createElement("p");
  totalAmount.classList.add("totalAmount");

  for (let i = 0; i < cartProducts.length; i++) {
    sum = sum + cartProducts[i].product.price;
  }

  totalAmount.innerHTML = "Total amount:" + sum;
  cartModalBody.appendChild(totalAmount);
}
