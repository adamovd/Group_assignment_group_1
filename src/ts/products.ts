import { cartButton, presentCart } from "./functions/addToCart";
import { CartItem } from "./models/CartItem";
import { Product } from "./models/Product";
import { products } from "./models/productList";

window.onload = () => {
  cartButton();
  createHTML();
  sortRing();
};

const cartProducts: CartItem[] = [];

const allProducts: HTMLDivElement = document.createElement("div");
allProducts.classList.add("products");

let ringButton = document.createElement("button");
ringButton.addEventListener("click", () => {
  sortRing();
  createHTML();
});

ringButton.innerHTML = "Ring";

document.body.appendChild(ringButton);

function sortRing() {
  let sortItem = products.filter(function (products) {
    return products.type == "Ring";
  });

  console.log(sortItem);
}

// function sortItems() {
//   for (let i = 0; i < products.length; i++) {
//     if (products[i].type === "Ring") {
//       createHTML();
//     }
//   }
// }

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
      if (cartProducts.length > 0) {
        for (let i = 0; i < cartProducts.length; i++) {
          if (cartProduct.product.id === cartProducts[i].product.id) {
            let index: number = cartProducts.indexOf(cartProducts[i]);
            let amount: number = cartProduct.amount;
            cartProducts.splice(index, 1);
            amount++;
            localStorage.setItem("cart", JSON.stringify(cartProducts) || "");
            console.log(2);

            presentCart(cartProducts);
          } else {
            cartProducts.push(cartProduct);
            localStorage.setItem("cart", JSON.stringify(cartProducts) || "");
            console.log(3);

            presentCart(cartProducts);
          }
        }
      } else {
        cartProducts.push(cartProduct);
        localStorage.setItem("cart", JSON.stringify(cartProducts) || "");
        console.log(1);
        presentCart(cartProducts);
      }

      // if (cartProducts.length < 1) {
      //   cartProducts.push(cartProduct);
      //   localStorage.setItem("cart", JSON.stringify(cartProducts) || "");
      //   presentCart(cartProducts);
      //   console.log("andra");
      // }
      // for (let i = 0; i < cartProducts.length; i++) {
      //   if (cartProduct.product.id === cartProducts[i].product.id) {
      //     cartProducts[i].addItem(1);
      //     localStorage.setItem("cart", JSON.stringify(cartProducts) || "");
      //     presentCart(cartProducts);
      //     console.log("första");
      //   }
      // }
    });

    productImgContainer.addEventListener("click", () => {
      location.href = "../pages/product.html?id=" + products[i].id;
    });

    if (productImgSecond.src !== productImg.src) {
      productImgContainer.addEventListener("mouseenter", () => {
        productImg.src = products[i].secondImage || "";
      });
      productImgContainer.addEventListener("mouseleave", () => {
        productImg.src = products[i].image;
      });
    }

    allProducts.appendChild(productContainer);
    productContainer.appendChild(productImgContainer);
    productImgContainer.appendChild(productImg);
    productImgContainer.appendChild(productBtn);
    productContainer.appendChild(productType);
    productContainer.appendChild(productName);
    productContainer.appendChild(productPrice);
    document.body.appendChild(allProducts);
  }
}
