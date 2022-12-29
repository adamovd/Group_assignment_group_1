import { cartButton, presentCart } from "./cart";
import { addToCart } from "./functions/addToCart";
import { cartModal } from "./functions/cartModal";
import { CartItem } from "./models/CartItem";
import { Product } from "./models/Product";
import { products } from "./models/productList";

window.onload = () => {
  cartButton();
  createHTML(productList);
  // sortRing();
};
let productList: Product[] = products;
const cartProducts: CartItem[] = [];

const cartModalBody: HTMLUListElement = document.getElementById(
  "modal-body"
) as HTMLUListElement;

const allProducts: HTMLDivElement = document.createElement("div");
allProducts.classList.add("products");

// function sortRing() {
//   let ringButton: HTMLAnchorElement = document.getElementById(
//     "ringItem"
//   ) as HTMLAnchorElement;

//   let sortItem = productList.filter(function (products) {
//     return products.type == "Ring";
//   });

//   createHTML();

//   console.log(sortItem);
// }

// function sortItems() {
//   for (let i = 0; i < products.length; i++) {
//     if (products[i].type === "Ring") {
//       createHTML();
//     }
//   }
// }

function createHTML(Products: Product[]) {
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

    productBtn.addEventListener("click", () => {
      addToCart(products[i]);
    });

    productImg.addEventListener("click", () => {
      location.href = "../pages/productdetails.html?id=" + products[i].id;
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

export function filterProducts() {
  let allButton: HTMLAnchorElement = document.getElementById(
    "allProductItems"
  ) as HTMLAnchorElement;

  let ringButton: HTMLAnchorElement = document.getElementById(
    "ringItem"
  ) as HTMLAnchorElement;

  let selectedFilter: string = "";

  ringButton.addEventListener("click", () => {
    let selectedFilter = "All";
    filterAlternatives(products, selectedFilter);
  });

  ringButton.addEventListener("click", () => {
    let selectedFilter = "Rings";
    filterAlternatives(products, selectedFilter);
  });
}

function filterAlternatives(products: Product[], selectedFilter: string) {
  let productList = products.filter((product) => {
    return product.type === selectedFilter;
  });

  if (selectedFilter === "All") {
    allProducts.innerHTML = "";
    createHTML(products);
  } else {
    showFilteredProducts(productList);
  }
}

const showFilteredProducts = (productList: Product[]) => {
  allProducts.innerHTML = "";

  for (let i = 0; i < products.length; i++) {
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

      productBtn.addEventListener("click", () => {
        addToCart(products[i]);
      });

      productImg.addEventListener("click", () => {
        location.href = "../pages/productdetails.html?id=" + products[i].id;
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
};
