import { cartButton } from "./cart";
import { createFooter } from "./footer";
import { addToCart } from "./functions/addToCart";
import { createMenu, toggleHamburgerMenu } from "./header";
import { Product } from "./models/Product";
import { products } from "./models/productList";

window.addEventListener("load", () => {
  displayProduct(listOfProducts);
  createMenu();
  toggleHamburgerMenu();
  cartButton();
  createFooter();
});

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
      const productContainer: HTMLElement = document.querySelector(
        ".productcontainer"
      ) as HTMLElement;
      const productInfoContainer: HTMLDivElement =
        document.createElement("div");
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
      const productSizeFirstLabel: HTMLLabelElement =
        document.createElement("label");
      const productSizeSecondLabel: HTMLLabelElement =
        document.createElement("label");
      const productSizeThirdLabel: HTMLLabelElement =
        document.createElement("label");
      const productSizeFirstInput: HTMLInputElement =
        document.createElement("input");
      const productSizeSecondInput: HTMLInputElement =
        document.createElement("input");
      const productSizeThirdInput: HTMLInputElement =
        document.createElement("input");

      productContainer.classList.add("product");
      productInfoContainer.classList.add("detailed");
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
      productSizeContainer.setAttribute(
        "aria-label",
        "Basic radio toggle button group"
      );
      productSizeFirstLabel.classList.add("btn");
      productSizeFirstLabel.classList.add("btn-outline-dark");
      productSizeSecondLabel.classList.add("btn");
      productSizeSecondLabel.classList.add("btn-outline-dark");
      productSizeThirdLabel.classList.add("btn");
      productSizeThirdLabel.classList.add("btn-outline-dark");
      productSizeFirstLabel.setAttribute("for", "btnradio1");
      productSizeSecondLabel.setAttribute("for", "btnradio2");
      productSizeThirdLabel.setAttribute("for", "btnradio3");
      productSizeFirstInput.type = "radio";
      productSizeSecondInput.type = "radio";
      productSizeThirdInput.type = "radio";
      productSizeFirstInput.classList.add("btn-check");
      productSizeSecondInput.classList.add("btn-check");
      productSizeThirdInput.classList.add("btn-check");
      productSizeFirstInput.setAttribute("name", "btnradio");
      productSizeSecondInput.setAttribute("name", "btnradio");
      productSizeThirdInput.setAttribute("name", "btnradio");
      productSizeFirstInput.setAttribute("id", "btnradio1");
      productSizeSecondInput.setAttribute("id", "btnradio2");
      productSizeThirdInput.setAttribute("id", "btnradio3");
      productSizeFirstInput.setAttribute("autocomplete", "off");
      productSizeSecondInput.setAttribute("autocomplete", "off");
      productSizeThirdInput.setAttribute("autocomplete", "off");

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
        productSizeFirstLabel.innerHTML = "16";
        productSizeSecondLabel.innerHTML = "17";
        productSizeThirdLabel.innerHTML = "18";
      } else {
        productSizeFirstLabel.innerHTML = "S";
        productSizeSecondLabel.innerHTML = "M";
        productSizeThirdLabel.innerHTML = "L";
      }
      if (listOfProducts[i].type === "Earring") {
        productSizeFirstLabel.innerHTML = "One size";
      }

      productSizeFirstInput.addEventListener("input", () => {
        listOfProducts[i].size = productSizeFirstLabel.innerHTML;
        console.log(listOfProducts[i]);
      });
      productSizeSecondInput.addEventListener("input", () => {
        listOfProducts[i].size = productSizeSecondLabel.innerHTML;
        console.log(listOfProducts[i]);
      });
      productSizeThirdInput.addEventListener("input", () => {
        listOfProducts[i].size = productSizeThirdLabel.innerHTML;
        console.log(listOfProducts[i]);
      });

      productCartBtn.addEventListener("click", () => {
        console.log(listOfProducts[i]);

        addToCart(listOfProducts[i]);
      });

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
      productInfoContainer.appendChild(productType);
      productInfoContainer.appendChild(productName);
      productInfoContainer.appendChild(productPrice);
      productInfoContainer.appendChild(productSizeContainer);
      productInfoContainer.appendChild(productCartBtn);
      productInfoContainer.appendChild(productDescribe);
      if (listOfProducts[i].type === "Earring") {
        productSizeContainer.appendChild(productSizeFirstInput);
        productSizeContainer.appendChild(productSizeFirstLabel);
      } else {
        productSizeContainer.appendChild(productSizeFirstInput);
        productSizeContainer.appendChild(productSizeFirstLabel);
        productSizeContainer.appendChild(productSizeSecondInput);
        productSizeContainer.appendChild(productSizeSecondLabel);
        productSizeContainer.appendChild(productSizeThirdInput);
        productSizeContainer.appendChild(productSizeThirdLabel);
      }
      productContainer.appendChild(productImgContainer);
      productContainer.appendChild(productInfoContainer);
    }
  }
}
