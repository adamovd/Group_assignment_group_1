import { cartButton, presentCart } from "./functions/addToCart";
import { addToCart } from "./functions/cartProducts";
import { CartItem } from "./models/CartItem";
import { products } from "./models/productList";
window.onload = () => {
  cartButton();
  createHTML();
};

const cartProducts: CartItem[] = [];

function createHTML() {
  for (let i = 0; i < products.length; i++) {
    let productContainer: HTMLDivElement = document.createElement("div");
    let productName: HTMLParagraphElement = document.createElement("p");
    let productPrice: HTMLParagraphElement = document.createElement("p");
    let productType: HTMLParagraphElement = document.createElement("p");
    let productImg: HTMLImageElement = document.createElement("img");
    let productImgSecond: HTMLImageElement = document.createElement("img");
    let productBtn: HTMLButtonElement = document.createElement("button");

    productContainer.classList.add("product");
    productName.classList.add("product__name");
    productPrice.classList.add("product__price");
    productType.classList.add("product__type");
    productImg.classList.add("product__img");
    productImgSecond.classList.add("product__img--second");
    productBtn.classList.add("product__btn");

    productName.innerHTML = products[i].name;
    productPrice.innerHTML = products[i].price.toString() + "kr";
    productType.innerHTML = products[i].type;
    productImg.src = products[i].image;
    productImgSecond.src = products[i].secondImage || "";
    productImg.alt = products[i].name;
    productBtn.innerHTML = "add to cart";

    //lägg till funktion som visar varukorgen
    productBtn.addEventListener("click", () => {
      const cartProduct: CartItem = new CartItem(products[i], 1);
      cartProducts.push(cartProduct);
      localStorage.setItem("cart", JSON.stringify(cartProducts) || "");
      presentCart(cartProducts);
    });
    if (productImgSecond.src !== "") {
      productImg.addEventListener("mouseenter", () => {
        productImg.src = products[i].secondImage || "";
      });
      productImg.addEventListener("mouseleave", () => {
        productImg.src = products[i].image;
      });
    }

    productContainer.appendChild(productImg);
    productContainer.appendChild(productType);
    productContainer.appendChild(productName);
    productContainer.appendChild(productPrice);
    productContainer.appendChild(productBtn);
    document.body.appendChild(productContainer);
  }
}
