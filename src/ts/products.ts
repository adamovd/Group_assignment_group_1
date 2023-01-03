import { cartButton } from "./cart";
import { createFooter } from "./footer";
import { addToCart } from "./functions/addToCart";
import { createMenu, toggleHamburgerMenu } from "./header";
import { CartItem } from "./models/CartItem";
import { Product } from "./models/Product";
import { products } from "./models/productList";

window.onload = () => {
  createMenu();
  toggleHamburgerMenu();
  cartButton();
  createHTML(productList);
  filterItem();
  sortItem();
  createFooter();
};

let productList: Product[] = products;
const cartProducts: CartItem[] = [];

const cartModalBody: HTMLUListElement = document.getElementById(
  "modal-body"
) as HTMLUListElement;

const allProducts: HTMLElement = document.querySelector(
  ".productscontainer"
) as HTMLElement;

const allProductsContainer: HTMLDivElement = document.createElement(
  "div"
) as HTMLDivElement;
allProductsContainer.classList.add("allProductsContainer");

const allProductsFilter: HTMLDivElement = document.createElement("div");
allProductsFilter.classList.add("allProductsContainerFilter");

function filterItem() {
  let allButton: HTMLAnchorElement = document.querySelector(
    ".filter__all"
  ) as HTMLAnchorElement;

  allButton.addEventListener("click", () => {
    createHTML(products);
  });

  let ringButton: HTMLAnchorElement = document.querySelector(
    ".filter__rings"
  ) as HTMLAnchorElement;

  let sortItemRings = productList.filter(function (products) {
    return products.type == "Ring";
  });

  ringButton.addEventListener("click", () => {
    showFilteredProducts(sortItemRings);
  });

  let necklaceButton: HTMLAnchorElement = document.querySelector(
    ".filter__necklaces"
  ) as HTMLAnchorElement;

  let sortItemNecklaces = productList.filter(function (products) {
    return products.type == "Necklace";
  });

  necklaceButton.addEventListener("click", () => {
    showFilteredProducts(sortItemNecklaces);
  });

  let braceletButton: HTMLAnchorElement = document.querySelector(
    ".filter__bracelets"
  ) as HTMLAnchorElement;

  let sortItemBracelets = productList.filter(function (products) {
    return products.type == "Bracelet";
  });

  braceletButton.addEventListener("click", () => {
    showFilteredProducts(sortItemBracelets);
  });

  let earringButton: HTMLAnchorElement = document.querySelector(
    ".filter__earrings"
  ) as HTMLAnchorElement;

  let sortItemEarrings = productList.filter(function (products) {
    return products.type == "Earring";
  });

  earringButton.addEventListener("click", () => {
    showFilteredProducts(sortItemEarrings);
  });
}

function sortItem() {
  let resetButton: HTMLAnchorElement = document.querySelector(
    ".sort__reset"
  ) as HTMLAnchorElement;

  let sortAll = productList.filter(function (products) {
    return products.id;
  });
  resetButton.addEventListener("click", () => {
    createHTML(sortAll);
  });

  let sortAzButton: HTMLAnchorElement = document.querySelector(
    ".sort__az"
  ) as HTMLAnchorElement;

  sortAzButton.addEventListener("click", () => {
    console.log(1);
    productList.sort((a, b) => {
      if (a.name < b.name) {
        return -1;
      }
      if (a.name > b.name) {
        return 1;
      }

      return 0;
    });

    createHTML(productList);
  });

  let sortZaButton: HTMLAnchorElement = document.querySelector(
    ".sort__za"
  ) as HTMLAnchorElement;

  sortZaButton.addEventListener("click", () => {
    console.log(2);
    productList.sort((a, b) => {
      if (a.name > b.name) {
        return -1;
      }
      if (a.name < b.name) {
        return 1;
      }

      return 0;
    });

    createHTML(productList);
  });

  let highToLowButton: HTMLAnchorElement = document.querySelector(
    ".sort__pricehtol"
  ) as HTMLAnchorElement;

  highToLowButton.addEventListener("click", () => {
    console.log(3);
    productList.sort((a, b) => b.price - a.price);

    createHTML(productList);
  });

  let lowToHighButton: HTMLAnchorElement = document.querySelector(
    ".sort__priceltoh"
  ) as HTMLAnchorElement;

  lowToHighButton.addEventListener("click", () => {
    console.log(4);
    productList.sort((a, b) => a.price - b.price);

    createHTML(productList);
  });
}

function createHTML(products: Product[]) {
  allProductsContainer.innerHTML = "";
  allProductsFilter.innerHTML = "";
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

    allProductsContainer.appendChild(productContainer);
    productContainer.appendChild(productImgContainer);
    productImgContainer.appendChild(productImg);
    productImgContainer.appendChild(productBtn);
    productContainer.appendChild(productType);
    productContainer.appendChild(productName);
    productContainer.appendChild(productPrice);
    allProducts.appendChild(allProductsContainer);
  }
}

const showFilteredProducts = (products: Product[]) => {
  allProductsContainer.innerHTML = "";
  allProductsFilter.innerHTML = "";

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

    allProductsFilter.appendChild(productContainerFilter);
    productContainerFilter.appendChild(productImgContainerFilter);
    productImgContainerFilter.appendChild(productImgFilter);
    productImgContainerFilter.appendChild(productBtnFilter);
    productContainerFilter.appendChild(productTypeFilter);
    productContainerFilter.appendChild(productNameFilter);
    productContainerFilter.appendChild(productPriceFilter);
    allProducts.appendChild(allProductsFilter);
  }
};
