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
    const productContainer: HTMLDivElement = document.createElement("div");
    const productImgContainer: HTMLDivElement = document.createElement("div");
    const productName: HTMLParagraphElement = document.createElement("p");
    const productPrice: HTMLParagraphElement = document.createElement("p");
    const productType: HTMLParagraphElement = document.createElement("p");
    const productImg: HTMLImageElement = document.createElement("img");
    const productImgSecond: HTMLImageElement = document.createElement("img");
    const productBtn: HTMLButtonElement = document.createElement("button");

    productContainer.classList.add("product");
    productImgContainer.classList.add("productimgcontainer");
    productName.classList.add("product__name");
    productPrice.classList.add("product__price");
    productType.classList.add("product__type");
    productImg.classList.add("product__img");
    productImgSecond.classList.add("product__img--second");
    productBtn.classList.add("btn");
    productBtn.classList.add("btn-dark");
    productBtn.classList.add("product__btn");

    productName.innerHTML = products[i].name;
    productPrice.innerHTML = products[i].price.toString() + "kr";
    productType.innerHTML = products[i].type;
    productImg.src = products[i].image;
    productImgSecond.src = products[i].secondImage || productImg.src;
    productImg.alt = products[i].name;
    productBtn.innerHTML = `<i class="bi bi-cart-plus-fill"></i>`;

    //lägg till funktion som visar varukorgen
    productBtn.addEventListener("click", () => {
      const cartProduct: CartItem = new CartItem(products[i], 1);
      cartProducts.push(cartProduct);
      // if (cartProducts.length === 0) {
      //   cartProducts.push(cartProduct);
      //   localStorage.setItem("cart", JSON.stringify(cartProducts) || "");
      //   presentCart(cartProducts);
      // }
      // if (cartProduct.product.id === cartProducts[i].product.id) {
      //   cartProducts[i].addItem(1);
      // } else {
      //   localStorage.setItem("cart", JSON.stringify(cartProducts) || "");
      //   presentCart(cartProducts);
      // }
      localStorage.setItem("cart", JSON.stringify(cartProducts) || "");
      presentCart(cartProducts);
    });
    if (productImgSecond.src !== productImg.src) {
      productImgContainer.addEventListener("mouseenter", () => {
        productImg.src = products[i].secondImage || "";
      });
      productImgContainer.addEventListener("mouseleave", () => {
        productImg.src = products[i].image;
      });
    }

    productContainer.appendChild(productImgContainer);
    productImgContainer.appendChild(productImg);
    productImgContainer.appendChild(productBtn);
    productContainer.appendChild(productType);
    productContainer.appendChild(productName);
    productContainer.appendChild(productPrice);
    document.body.appendChild(productContainer);
  }
}
