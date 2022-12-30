import { cartButton, presentCart } from "./cart";
import { addToCart } from "./functions/addToCart";
import { cartModal } from "./functions/cartModal";
import { CartItem } from "./models/CartItem";
import { Product } from "./models/Product";
import { products } from "./models/productList";

window.onload = () => {
  cartButton();
  createHTML(productList);
  sortRing();
};
let productList: Product[] = products;
const cartProducts: CartItem[] = [];

const cartModalBody: HTMLUListElement = document.getElementById(
  "modal-body"
) as HTMLUListElement;

const allProducts: HTMLDivElement = document.createElement("div");
allProducts.classList.add("products");

function sortRing() {
  let ringButton: HTMLAnchorElement = document.querySelector(
    ".filter__rings"
  ) as HTMLAnchorElement;

  let sortItem = productList.filter(function (products) {
    return products.type == "Ring";
  });

  ringButton.addEventListener("click", () => {
    showFilteredProducts(sortItem);
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

function createHTML(products: Product[]) {
  const productContainer: HTMLDivElement = document.createElement("div");
  productContainer.innerHTML = "";
  for (let i = 0; i < products.length; i++) {
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

const allProductsFilter: HTMLDivElement = document.createElement("div");
allProductsFilter.classList.add("products");

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
    filterAlternatives(productList, selectedFilter);
  });

  ringButton.addEventListener("click", () => {
    console.log("ringar");

    selectedFilter = "Rings";
    filterAlternatives(productList, selectedFilter);
  });
}

function filterAlternatives(products: Product[], selectedFilter: string) {
  let filteredProductList = products.filter((product) => {
    return product.type === selectedFilter;
  });
  console.log(filteredProductList);

  createHTML(filteredProductList);
}

const showFilteredProducts = (products: Product[]) => {
  allProducts.innerHTML = "";

  for (let i = 0; i < products.length; i++) {
    const productContainerFilter: HTMLDivElement =
      document.createElement("div");
    const productImgContainerFilter: HTMLDivElement =
      document.createElement("div");
    const productNameFilter: HTMLParagraphElement = document.createElement("p");
    const productPriceFilter: HTMLParagraphElement =
      document.createElement("p");
    const productTypeFilter: HTMLParagraphElement = document.createElement("p");
    const productImgFilter: HTMLImageElement = document.createElement("img");
    const productImgSecondFilter: HTMLImageElement =
      document.createElement("img");
    const productBtnFilter: HTMLButtonElement =
      document.createElement("button");

    productContainerFilter.classList.add("product");
    productImgContainerFilter.classList.add("productimgcontainer");
    productNameFilter.classList.add("product__name");
    productPriceFilter.classList.add("product__price");
    productTypeFilter.classList.add("product__type");
    productImgFilter.classList.add("product__img");
    productImgSecondFilter.classList.add("product__img--second");
    productBtnFilter.classList.add("btn");
    productBtnFilter.classList.add("btn-dark");
    productBtnFilter.classList.add("product__btn");

    productNameFilter.innerHTML = products[i].name;
    productPriceFilter.innerHTML = products[i].price.toString() + "kr";
    productTypeFilter.innerHTML = products[i].type;
    productImgFilter.src = products[i].image;
    productImgSecondFilter.src =
      products[i].secondImage || productImgFilter.src;
    productImgFilter.alt = products[i].name;
    productBtnFilter.innerHTML = `<i class="bi bi-cart-plus-fill"></i>`;

    productBtnFilter.addEventListener("click", () => {
      addToCart(products[i]);
    });

    productImgFilter.addEventListener("click", () => {
      location.href = "../pages/productdetails.html?id=" + products[i].id;
    });

    if (productImgSecondFilter.src !== productImgFilter.src) {
      productImgContainerFilter.addEventListener("mouseenter", () => {
        productImgFilter.src = products[i].secondImage || "";
      });
      productImgContainerFilter.addEventListener("mouseleave", () => {
        productImgFilter.src = products[i].image;
      });
    }

    allProducts.appendChild(productContainerFilter);
    productContainerFilter.appendChild(productImgContainerFilter);
    productImgContainerFilter.appendChild(productImgFilter);
    productImgContainerFilter.appendChild(productBtnFilter);
    productContainerFilter.appendChild(productTypeFilter);
    productContainerFilter.appendChild(productNameFilter);
    productContainerFilter.appendChild(productPriceFilter);
    document.body.appendChild(allProductsFilter);
  }
};
