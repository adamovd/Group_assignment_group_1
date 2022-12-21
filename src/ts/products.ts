import { cartButton, presentCart } from "./functions/addToCart";
import { addToCart } from "./functions/cartProducts";
import { Product } from "./models/Product";
import { products } from "./models/productList";
window.onload = () => {
  cartButton();
  createHTML();
};

const cartProducts: Product[] = [];

function createHTML() {
  for (let i = 0; i < products.length; i++) {
    let productContainer: HTMLDivElement = document.createElement("div");
    let productName: HTMLParagraphElement = document.createElement("p");
    let productPrice: HTMLParagraphElement = document.createElement("p");
    let productType: HTMLParagraphElement = document.createElement("p");
    let productImg: HTMLImageElement = document.createElement("img");
    let productBtn: HTMLButtonElement = document.createElement("button");

    productContainer.classList.add("product");
    productName.classList.add("product__name");
    productPrice.classList.add("product__price");
    productType.classList.add("product__type");
    productImg.classList.add("product__img");
    productBtn.classList.add("product__btn");

    productName.innerHTML = products[i].name;
    productPrice.innerHTML = products[i].price.toString() + "kr";
    productType.innerHTML = products[i].type;
    productImg.src = products[i].image;
    productImg.alt = products[i].name;
    productBtn.innerHTML = "Add to cart";

    //lägg till funktion som visar varukorgen
    productBtn.addEventListener("click", () => {
      cartProducts.push(products[i]);
      localStorage.setItem("cart", JSON.stringify(cartProducts) || "");
      addToCart(cartProducts);
      presentCart(cartProducts);
    });

    productContainer.appendChild(productName);
    productContainer.appendChild(productPrice);
    productContainer.appendChild(productType);
    productContainer.appendChild(productImg);
    productContainer.appendChild(productBtn);
    document.body.appendChild(productContainer);
  }
}
