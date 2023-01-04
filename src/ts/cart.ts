import { createBadge } from "./header";
import { CartItem } from "./models/CartItem";

let cartProductsFromLS: CartItem[] = [];

const cartModalBody: HTMLUListElement = document.getElementById(
  "modal-body"
) as HTMLUListElement;

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
    presentCart(cartProductsFromLS);
  });
}

export function presentCart(cartProducts: CartItem[]) {
  console.log(cartProducts.length);

  cartProductsFromLS = JSON.parse(localStorage.getItem("cart") || "[]");

  cartProducts = cartProductsFromLS.map((cartProducts) => {
    return new CartItem(cartProducts.product, cartProducts.amount);
  });

  cartModalBody.innerHTML = "";

  for (let i = 0; i < cartProducts.length; i++) {
    console.log(cartProducts[i]);

    const cartProductLi: HTMLLIElement = document.createElement("li");
    const cartProductName: HTMLParagraphElement = document.createElement("p");
    const cartProductPrice: HTMLParagraphElement = document.createElement("p");
    const cartProductImg: HTMLImageElement = document.createElement("img");
    const cartProductAmountContainer: HTMLDivElement =
      document.createElement("div");
    const cartProductAmount: HTMLParagraphElement = document.createElement("p");
    const cartProductAdd: HTMLButtonElement = document.createElement("button");
    const cartProductRemove: HTMLButtonElement =
      document.createElement("button");

    cartProductLi.classList.add("cartproduct");
    cartProductLi.classList.add("list-group-item");
    cartProductLi.classList.add("d-flex");
    cartProductLi.classList.add("justify-content-between");
    cartProductLi.classList.add("lh-sm");
    cartProductName.classList.add("cartproduct__name");
    cartProductPrice.classList.add("cartproduct__price");
    cartProductImg.classList.add("cartproduct__img");
    cartProductAmountContainer.classList.add("cartproduct__amountcontainer");
    cartProductAmount.classList.add("cartproduct__amount");
    cartProductAdd.classList.add("cartproduct__add");
    cartProductAdd.classList.add("btn");
    cartProductAdd.classList.add("btn-dark");
    cartProductRemove.classList.add("cartproduct__remove");
    cartProductRemove.classList.add("btn");
    cartProductRemove.classList.add("btn-dark");

    cartProductName.innerHTML = cartProducts[i].product.name;
    cartProductPrice.innerHTML =
      cartProducts[i].product.price.toString() + " kr";
    cartProductImg.src = cartProducts[i].product.image;
    cartProductAmount.innerHTML = cartProducts[i].amount.toString();
    cartProductAdd.innerHTML = `<i class="bi bi-plus"></i>`;
    cartProductRemove.innerHTML = `<i class="bi bi-dash"></i>`;

    cartProductAdd.addEventListener("click", () => {
      console.log(cartProducts[i]);
      cartProducts[i].addItem(1);
      localStorage.setItem("cart", JSON.stringify(cartProducts) || "");
      presentCart(cartProducts);
      console.log(cartProducts[i].amount);

      createBadge();
    });

    cartProductRemove.addEventListener("click", () => {
      console.log(cartProducts[i]);
      cartProducts[i].removeItem(1);
      if (cartProducts[i].amount < 1) {
        cartProducts.splice(i, 1);
        createBadge();
      }
      localStorage.setItem("cart", JSON.stringify(cartProducts) || "[]");
      presentCart(cartProducts);
      console.log(cartProducts[i].amount);
      createBadge();
    });

    cartModalBody.appendChild(cartProductLi);
    cartProductLi.appendChild(cartProductImg);
    cartProductLi.appendChild(cartProductName);
    cartProductLi.appendChild(cartProductPrice);
    cartProductLi.appendChild(cartProductAmountContainer);
    cartProductAmountContainer.appendChild(cartProductRemove);
    cartProductAmountContainer.appendChild(cartProductAmount);
    cartProductAmountContainer.appendChild(cartProductAdd);
  }

  let sum = 0;
  const totalAmount: HTMLParagraphElement = document.createElement("p");
  totalAmount.classList.add("totalAmount");

  if (cartProducts.length > 0) {
    for (let i = 0; i < cartProducts.length; i++) {
      sum = sum + cartProducts[i].product.price * cartProducts[i].amount;
    }

    totalAmount.innerHTML = "Total amount: " + sum + " kr";
  } else {
    totalAmount.innerHTML = "Your cart is empty";
  }
  cartModalBody.appendChild(totalAmount);

  const checkoutBtn: HTMLButtonElement = document.getElementById(
    "btn-checkout"
  ) as HTMLButtonElement;

  const shoppingBtn: HTMLButtonElement = document.querySelector(
    ".shopping"
  ) as HTMLButtonElement;

  checkoutBtn.addEventListener("click", () => {
    window.location.href = "../pages/checkout.html";
  });
  createBadge();

  shoppingBtn.addEventListener("click", () => {
    window.location.href = "../pages/products.html";
  });
}
