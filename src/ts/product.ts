import { Product } from "./models/Product";
import { products } from "./models/productList";

window.onload = () => {
  displayProduct(listOfProducts);
};

let listOfProducts: Product[] = products;

function searchById() {
  const paramSearch: URLSearchParams = new URLSearchParams(
    window.location.search
  );
  let id: string = paramSearch.get("id") || "";
  return id;
}

function displayProduct(listOfProducts: Product[]) {
  let id: string = searchById();
  for (let i = 0; i < products.length; i++) {
    if (id === products[i].id) {
      const productContainer: HTMLDivElement = document.createElement("div");
      const productName: HTMLParagraphElement = document.createElement("p");
      const productImgContainer: HTMLDivElement = document.createElement("div");
      const productImg: HTMLImageElement = document.createElement("img");
      const productType: HTMLParagraphElement = document.createElement("p");
      const productDescribe: HTMLSpanElement = document.createElement("span");
      const productPrice: HTMLParagraphElement = document.createElement("p");

      productContainer.classList.add("detailed");
      productName.classList.add("detailed__name");
      productImgContainer.classList.add("detailedimgcontainer");
      productImg.classList.add("detailed__img");
      productType.classList.add("detailed__type");
      productDescribe.classList.add("detailed__describe");
      productPrice.classList.add("detailed__price");

      productName.innerHTML = listOfProducts[i].name;
      productImg.src = listOfProducts[i].image;
      productImg.alt = listOfProducts[i].name;
      productType.innerHTML = listOfProducts[i].type;
      productDescribe.innerHTML = listOfProducts[i].description;
      productPrice.innerHTML = listOfProducts[i].price.toString();

      productContainer.appendChild(productName);
      productContainer.appendChild(productImgContainer);
      productContainer.appendChild(productType);
      productContainer.appendChild(productDescribe);
      productContainer.appendChild(productPrice);
      productImgContainer.appendChild(productImg);
      document.body.appendChild(productContainer);
    }
  }
}
