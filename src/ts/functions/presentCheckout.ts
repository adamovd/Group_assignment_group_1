import { CartItem } from "../models/CartItem";

const checkoutSummary: HTMLUListElement = document.getElementById(
  "checkoutsummary"
) as HTMLUListElement;

export function presentCheckout(cartProducts: CartItem[]) {
  checkoutSummary.innerHTML = "";
  for (let i = 0; i < cartProducts.length; i++) {
    const checkoutProductLi: HTMLLIElement = document.createElement("li");
    const checkoutProductName: HTMLParagraphElement =
      document.createElement("p");
    const checkoutProductSize: HTMLParagraphElement =
      document.createElement("p");
    const checkoutProductPrice: HTMLParagraphElement =
      document.createElement("p");
    const checkoutProductImg: HTMLImageElement = document.createElement("img");
    const checkoutProductAmountContainer: HTMLDivElement =
      document.createElement("div");
    const checkoutProductAmount: HTMLParagraphElement =
      document.createElement("p");
    const checkoutProductAdd: HTMLButtonElement =
      document.createElement("button");
    const checkoutProductRemove: HTMLButtonElement =
      document.createElement("button");

    checkoutProductLi.classList.add("checkoutproduct");
    checkoutProductLi.classList.add("list-group-item");
    checkoutProductLi.classList.add("d-flex");
    checkoutProductLi.classList.add("justify-content-between");
    checkoutProductLi.classList.add("lh-sm");
    checkoutProductName.classList.add("checkoutproduct__name");
    checkoutProductSize.classList.add("checkoutproduct__size");
    checkoutProductPrice.classList.add("checkoutproduct__price");
    checkoutProductImg.classList.add("checkoutproduct__img");
    checkoutProductAmountContainer.classList.add(
      "checkoutproduct__amountcontainer"
    );
    checkoutProductAmount.classList.add("checkoutproduct__amount");
    checkoutProductAdd.classList.add("checkoutproduct__add");
    checkoutProductAdd.classList.add("btn");
    checkoutProductAdd.classList.add("btn-dark");
    checkoutProductRemove.classList.add("checkoutproduct__remove");
    checkoutProductRemove.classList.add("btn");
    checkoutProductRemove.classList.add("btn-dark");

    checkoutProductName.innerHTML = cartProducts[i].product.name;
    checkoutProductSize.innerHTML = cartProducts[i].product.size;
    checkoutProductPrice.innerHTML =
      cartProducts[i].product.price.toString() + " kr";
    checkoutProductImg.src = cartProducts[i].product.image;
    checkoutProductAmount.innerHTML = cartProducts[i].amount.toString();
    checkoutProductAdd.innerHTML = `<i class="bi bi-plus"></i>`;
    checkoutProductRemove.innerHTML = `<i class="bi bi-dash"></i>`;

    checkoutProductAdd.addEventListener("click", () => {
      console.log(cartProducts[i]);
      cartProducts[i].addItem(1);
      localStorage.setItem("cart", JSON.stringify(cartProducts) || "");
      presentCheckout(cartProducts);
      console.log(cartProducts[i].amount);
    });

    checkoutProductRemove.addEventListener("click", () => {
      console.log(cartProducts[i]);
      cartProducts[i].removeItem(1);
      if (cartProducts[i].amount < 1) {
        cartProducts.splice(i, 1);
      }
      localStorage.setItem("cart", JSON.stringify(cartProducts) || "[]");
      presentCheckout(cartProducts);
      console.log(cartProducts[i].amount);
    });

    checkoutSummary.appendChild(checkoutProductLi);
    checkoutProductLi.appendChild(checkoutProductImg);
    checkoutProductLi.appendChild(checkoutProductName);
    checkoutProductLi.appendChild(checkoutProductSize);
    checkoutProductLi.appendChild(checkoutProductPrice);
    checkoutProductLi.appendChild(checkoutProductAmountContainer);
    checkoutProductAmountContainer.appendChild(checkoutProductRemove);
    checkoutProductAmountContainer.appendChild(checkoutProductAmount);
    checkoutProductAmountContainer.appendChild(checkoutProductAdd);
  }

  let sum = 0;
  const checkoutTotalAmount: HTMLParagraphElement = document.createElement("p");
  checkoutTotalAmount.classList.add("checkoutTotalAmount");

  if (cartProducts.length > 0) {
    for (let i = 0; i < cartProducts.length; i++) {
      sum = sum + cartProducts[i].product.price * cartProducts[i].amount;
    }

    checkoutTotalAmount.innerHTML = "Total amount: " + sum + " kr";
  } else {
    checkoutTotalAmount.innerHTML = "Your cart is empty";
  }
  checkoutSummary.appendChild(checkoutTotalAmount);
}
