import { cartButton } from "./cart";
import { createFooter } from "./footer";
import { createMenu, toggleHamburgerMenu } from "./header";
import { products } from "./models/productList";
import { StartpageItem } from "./models/StartpageItem";
import { startpageList } from "./models/startpageList";
import { createPromotion } from "./promo";

window.addEventListener("load", () => {
  createMenu();
  toggleHamburgerMenu();
  cartButton();
  // displayStartpage();
  createPromotion();
  createFooter();
  showProductStartpage();
});

function displayStartpage() {
  const startpageContainer: HTMLDivElement = document.querySelector(
    ".startpage"
  ) as HTMLDivElement;
  const startpageCarousel: HTMLDivElement = document.createElement("div");
  const firstCarouselItem: HTMLDivElement = document.createElement("div");
  const secondCarouselItem: HTMLDivElement = document.createElement("div");
  const carouselBtnPrev: HTMLButtonElement = document.createElement("button");
  const carouselBtnNext: HTMLButtonElement = document.createElement("button");
  const carouselPrevIcon: HTMLSpanElement = document.createElement("span");
  const carouselNextIcon: HTMLSpanElement = document.createElement("span");
  const startpageFirstImg: HTMLImageElement = document.createElement("img");
  const startpageSecondImg: HTMLImageElement = document.createElement("img");
  const startpageFirstCaption: HTMLDivElement = document.createElement("div");
  const startpageSecondCaption: HTMLDivElement = document.createElement("div");
  const startpageFirstTitle: HTMLHeadingElement = document.createElement("h3");
  const startpageSecondTitle: HTMLHeadingElement = document.createElement("h3");
  const startpageFirstText: HTMLSpanElement = document.createElement("span");
  const startpageSecondText: HTMLSpanElement = document.createElement("span");
  const startpageFirstBtn: HTMLButtonElement = document.createElement("button");
  const startpageSecondBtn: HTMLButtonElement =
    document.createElement("button");

  startpageCarousel.classList.add("carousel-inner");
  firstCarouselItem.classList.add("carousel-item");
  firstCarouselItem.classList.add("active");
  secondCarouselItem.classList.add("carousel-item");
  carouselBtnPrev.classList.add("carousel-control-prev");
  carouselBtnPrev.type = "button";
  carouselBtnPrev.setAttribute("data-bs-target", "#carouselExampleControls");
  carouselBtnPrev.setAttribute("data-bs-slide", "prev");
  carouselBtnNext.classList.add("carousel-control-next");
  carouselBtnNext.type = "button";
  carouselBtnNext.setAttribute("data-bs-target", "#carouselExampleControls");
  carouselBtnNext.setAttribute("data-bs-slide", "next");
  carouselPrevIcon.classList.add("carousel-control-prev-icon");
  carouselPrevIcon.setAttribute("aria-hidden", "true");
  carouselNextIcon.classList.add("carousel-control-next-icon");
  carouselNextIcon.setAttribute("aria-hidden", "true");
  startpageFirstImg.classList.add("startpage__img");
  startpageSecondImg.classList.add("startpage__img--first");
  startpageFirstCaption.classList.add("carousel-caption--second");
  startpageSecondCaption.classList.add("carousel-caption");
  startpageFirstTitle.classList.add("startpage__title");
  startpageSecondTitle.classList.add("startpage__title");
  startpageFirstText.classList.add("startpage__text");
  startpageSecondText.classList.add("startpage__text");
  startpageFirstBtn.classList.add("startpage__btn");
  startpageSecondBtn.classList.add("startpage__btn");
  startpageFirstBtn.classList.add("btn");
  startpageSecondBtn.classList.add("btn");
  startpageFirstImg.classList.add("d-block");
  startpageSecondImg.classList.add("d-block");
  startpageFirstImg.classList.add("w-100");
  startpageSecondImg.classList.add("w-100");

  startpageFirstImg.src =
    "https://images.unsplash.com/photo-1591892150204-2f872745bc4b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80";
  startpageSecondImg.src =
    "https://images.pexels.com/photos/6408285/pexels-photo-6408285.jpeg";
  startpageFirstTitle.innerHTML =
    "Welcome to Aurora Jewelry, the premier destination for exquisite fine jewelry.";
  startpageSecondTitle.innerHTML = `Join us in celebrating love and commitment with our Valentine's Day collection &hearts;`;
  startpageFirstText.innerHTML = `From timeless classics to unique contemporary designs, our collection is sure to dazzle and delight. Our experienced staff is passionate about helping you find the perfect piece for any occasion. We take pride in our commitment to customer satisfaction and strive to provide exceptional service and quality. Whether you're looking for a special gift, a statement piece, or an heirloom to pass down, Aurora Jewelry has something for everyone. Come visit us today and let us help you find a piece that expresses your personal style and elegance.`;
  startpageSecondText.innerHTML = `One of the most popular gifts to give on Valentine's Day is jewelry, as it is a timeless and elegant way to show your love. From sparkling diamonds to heartfelt charms, there are endless options to choose from when it comes to finding the perfect piece of jewelry for your loved one.
  Surprise your loved one with a stunning piece of jewelry from our Valentine's Day collection or treat yourself to something special with our collection of luxury jewelry. From statement necklaces to sparkling gemstone rings, we have something for every occasion and taste.`;

  startpageContainer.appendChild(startpageCarousel);
  startpageContainer.appendChild(carouselBtnPrev);
  startpageContainer.appendChild(carouselBtnNext);
  startpageCarousel.appendChild(firstCarouselItem);
  startpageCarousel.appendChild(secondCarouselItem);
  firstCarouselItem.appendChild(startpageFirstImg);
  firstCarouselItem.appendChild(startpageFirstCaption);
  secondCarouselItem.appendChild(startpageSecondImg);
  secondCarouselItem.appendChild(startpageSecondCaption);
  startpageFirstCaption.appendChild(startpageFirstTitle);
  startpageFirstCaption.appendChild(startpageFirstText);
  startpageSecondCaption.appendChild(startpageSecondTitle);
  startpageSecondCaption.appendChild(startpageSecondText);

  carouselBtnPrev.appendChild(carouselPrevIcon);
  carouselBtnNext.appendChild(carouselNextIcon);
}

const divContainer: HTMLDivElement = document.querySelector(
  ".productStartpage"
) as HTMLDivElement;

function showProductStartpage() {
  let productFilter = products.splice(15, 15);

  for (let i = 0; i < productFilter.length; i++) {
    const productContainer: HTMLDivElement = document.createElement("div");
    const productImgContainer: HTMLDivElement = document.createElement("div");
    const productName: HTMLParagraphElement = document.createElement("p");
    const productPrice: HTMLParagraphElement = document.createElement("p");
    const productType: HTMLParagraphElement = document.createElement("p");
    const productImg: HTMLImageElement = document.createElement("img");

    productContainer.classList.add("productsStartpage");
    productImgContainer.classList.add("productsStartpageImgContainer");
    productName.classList.add("productsStartpage__name");
    productPrice.classList.add("productsStartpage__price");
    productType.classList.add("productsStartpage__type");
    productImg.classList.add("productsStartpage__img");

    productName.innerHTML = productFilter[i].name;
    productPrice.innerHTML = productFilter[i].price.toString() + "kr";
    productType.innerHTML = productFilter[i].type;
    productImg.src = productFilter[i].image;
    productImg.alt = productFilter[i].name;

    divContainer.appendChild(productContainer);
    productContainer.appendChild(productImgContainer);
    productImgContainer.appendChild(productImg);
    productContainer.appendChild(productType);
    productContainer.appendChild(productName);
    productContainer.appendChild(productPrice);
  }
}
