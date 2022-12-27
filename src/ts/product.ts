import { Product } from "./models/Product";
import { products } from "./models/productList";

window.onload = () => {
  displayProduct(listOfProducts);
};

let listOfProducts: Product[] = products;

function getProductId() {
  const paramSearch: URLSearchParams = new URLSearchParams(
    window.location.search
  );
  let id: string = paramSearch.get("id") || "";
  return id;
}

export function displayProduct(listOfProducts: Product[]) {
  let id: string = getProductId();
  for (let i = 0; i < products.length; i++) {
    if (id === products[i].id) {
      const productContainer: HTMLDivElement = document.createElement("div");
      const productImgContainer: HTMLDivElement = document.getElementById(
        "carouselExampleControls"
      ) as HTMLDivElement;
      const productImgCarousel: HTMLDivElement = document.createElement("div");
      const firstCarouselItem: HTMLDivElement = document.createElement("div");
      const secondCarouselItem: HTMLDivElement = document.createElement("div");
      const thirdCarouselItem: HTMLDivElement = document.createElement("div");
      const carouselBtnPrev: HTMLButtonElement =
        document.createElement("button");
      const carouselBtnNext: HTMLButtonElement =
        document.createElement("button");
      const carouselPrevIcon: HTMLSpanElement = document.createElement("span");
      const carouselNextIcon: HTMLSpanElement = document.createElement("span");
      const productImg: HTMLImageElement = document.createElement("img");
      const productSecondImg: HTMLImageElement = document.createElement("img");
      const productThirdImg: HTMLImageElement = document.createElement("img");
      const productName: HTMLParagraphElement = document.createElement("p");
      const productType: HTMLParagraphElement = document.createElement("p");
      const productDescribe: HTMLSpanElement = document.createElement("span");
      const productPrice: HTMLParagraphElement = document.createElement("p");
      const productCartBtn: HTMLButtonElement =
        document.createElement("button");
      const productSizeContainer: HTMLDivElement =
        document.createElement("div");
      const productSizeFirst: HTMLButtonElement =
        document.createElement("button");
      const productSizeSecond: HTMLButtonElement =
        document.createElement("button");
      const productSizeThird: HTMLButtonElement =
        document.createElement("button");

      productContainer.classList.add("detailed");
      productImgCarousel.classList.add("carousel-inner");
      firstCarouselItem.classList.add("carousel-item");
      firstCarouselItem.classList.add("active");
      secondCarouselItem.classList.add("carousel-item");
      thirdCarouselItem.classList.add("carousel-item");
      carouselBtnPrev.classList.add("carousel-control-prev");
      carouselBtnPrev.type = "button";
      carouselBtnPrev.setAttribute(
        "data-bs-target",
        "#carouselExampleControls"
      );
      carouselBtnPrev.setAttribute("data-bs-slide", "prev");
      carouselBtnNext.classList.add("carousel-control-next");
      carouselBtnNext.type = "button";
      carouselBtnNext.setAttribute(
        "data-bs-target",
        "#carouselExampleControls"
      );
      carouselBtnNext.setAttribute("data-bs-slide", "next");
      carouselPrevIcon.classList.add("carousel-control-prev-icon");
      carouselPrevIcon.setAttribute("aria-hidden", "true");
      carouselNextIcon.classList.add("carousel-control-next-icon");
      carouselNextIcon.setAttribute("aria-hidden", "true");
      productImg.classList.add("detailed__img");
      productSecondImg.classList.add("detailed__img");
      productThirdImg.classList.add("detailed__img");
      productImg.classList.add("d-block");
      productSecondImg.classList.add("d-block");
      productThirdImg.classList.add("d-block");
      productImg.classList.add("w-100");
      productSecondImg.classList.add("w-100");
      productThirdImg.classList.add("w-100");
      productName.classList.add("detailed__name");
      productType.classList.add("detailed__type");
      productDescribe.classList.add("detailed__describe");
      productPrice.classList.add("detailed__price");
      productCartBtn.classList.add("detailed__btn");
      productCartBtn.classList.add("btn");
      productCartBtn.classList.add("btn-dark");
      productSizeContainer.classList.add("btn-group");
      productSizeContainer.setAttribute("role", "group");
      productSizeContainer.setAttribute("aria-label", "Basic outlined example");
      productSizeFirst.classList.add("btn");
      productSizeFirst.classList.add("btn-outline-dark");
      productSizeSecond.classList.add("btn");
      productSizeSecond.classList.add("btn-outline-dark");
      productSizeThird.classList.add("btn");
      productSizeThird.classList.add("btn-outline-dark");

      productName.innerHTML = listOfProducts[i].name;
      productImg.src = listOfProducts[i].image;
      productImg.alt = listOfProducts[i].name;
      productSecondImg.src =
        listOfProducts[i].secondImage || listOfProducts[i].image;
      productThirdImg.src =
        listOfProducts[i].thirdImage || listOfProducts[i].image;
      productType.innerHTML = listOfProducts[i].type;
      productDescribe.innerHTML = listOfProducts[i].description;
      productPrice.innerHTML = listOfProducts[i].price.toString() + " kr";
      productCartBtn.innerHTML = "Add to cart";
      if (listOfProducts[i].type === "Ring") {
        productSizeFirst.innerHTML = "16";
        productSizeSecond.innerHTML = "17";
        productSizeThird.innerHTML = "18";
      } else {
        productSizeFirst.innerHTML = "S";
        productSizeSecond.innerHTML = "M";
        productSizeThird.innerHTML = "L";
      }
      if (listOfProducts[i].type === "Earring") {
        productSizeFirst.innerHTML = "One size";
      }

      productImgContainer.appendChild(productImgCarousel);
      productImgContainer.appendChild(carouselBtnPrev);
      productImgContainer.appendChild(carouselBtnNext);
      productImgCarousel.appendChild(firstCarouselItem);
      productImgCarousel.appendChild(secondCarouselItem);
      productImgCarousel.appendChild(thirdCarouselItem);
      firstCarouselItem.appendChild(productImg);
      secondCarouselItem.appendChild(productSecondImg);
      thirdCarouselItem.appendChild(productThirdImg);
      carouselBtnPrev.appendChild(carouselPrevIcon);
      carouselBtnNext.appendChild(carouselNextIcon);
      productContainer.appendChild(productType);
      productContainer.appendChild(productName);
      productContainer.appendChild(productPrice);
      productContainer.appendChild(productSizeContainer);
      productContainer.appendChild(productCartBtn);
      productContainer.appendChild(productDescribe);
      if (listOfProducts[i].type === "Earring") {
        productSizeContainer.appendChild(productSizeFirst);
      } else {
        productSizeContainer.appendChild(productSizeFirst);
        productSizeContainer.appendChild(productSizeSecond);
        productSizeContainer.appendChild(productSizeThird);
      }
      document.body.appendChild(productImgContainer);
      document.body.appendChild(productContainer);
    }
  }
}
