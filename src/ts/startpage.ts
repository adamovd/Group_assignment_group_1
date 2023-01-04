import { cartButton } from "./cart";
import { createFooter } from "./footer";
import { createBadge, createMenu, toggleHamburgerMenu } from "./header";
import { products } from "./models/productList";

window.addEventListener("load", () => {
  createMenu();
  toggleHamburgerMenu();
  cartButton();
  displayStartpage();
  createFooter();
  createBadge();
  showProductsStartpage();
});

function displayStartpage() {
  const startpageContainer: HTMLDivElement = document.querySelector(
    ".startpage"
  ) as HTMLDivElement;
  const startpageCarousel: HTMLDivElement = document.createElement("div");
  const firstCarouselItem: HTMLDivElement = document.createElement("div");
  const secondCarouselItem: HTMLDivElement = document.createElement("div");
  const thirdCarouselItem: HTMLDivElement = document.createElement("div");
  const carouselBtnPrev: HTMLButtonElement = document.createElement("button");
  const carouselBtnNext: HTMLButtonElement = document.createElement("button");
  const carouselPrevIcon: HTMLSpanElement = document.createElement("span");
  const carouselNextIcon: HTMLSpanElement = document.createElement("span");
  const startpageFirstImg: HTMLImageElement = document.createElement("img");
  const startpageSecondImg: HTMLImageElement = document.createElement("img");
  const startpageThirdImg: HTMLImageElement = document.createElement("img");
  const startpageFirstCaption: HTMLDivElement = document.createElement("div");
  const startpageSecondCaption: HTMLDivElement = document.createElement("div");
  const startpageThirdCaption: HTMLDivElement = document.createElement("div");
  const startpageFirstTitle: HTMLHeadingElement = document.createElement("h3");
  const startpageSecondTitle: HTMLHeadingElement = document.createElement("h3");
  const startpageThirdTitle: HTMLHeadingElement = document.createElement("h3");
  const startpageFirstText: HTMLSpanElement = document.createElement("span");
  const startpageSecondText: HTMLSpanElement = document.createElement("span");
  const startpageThirdText: HTMLSpanElement = document.createElement("span");
  const startpageFirstBtn: HTMLButtonElement = document.createElement("button");
  const startpageSecondBtn: HTMLButtonElement =
    document.createElement("button");

  startpageCarousel.classList.add("carousel-inner");
  firstCarouselItem.classList.add("carousel-item");
  firstCarouselItem.classList.add("active");
  secondCarouselItem.classList.add("carousel-item");
  thirdCarouselItem.classList.add("carousel-item");
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
  startpageSecondImg.classList.add("startpage__img");
  startpageThirdImg.classList.add("startpage__img");
  startpageFirstCaption.classList.add("carousel-caption");
  startpageSecondCaption.classList.add("carousel-caption");
  startpageThirdCaption.classList.add("carousel-caption");
  startpageFirstTitle.classList.add("startpage__title");
  startpageSecondTitle.classList.add("startpage__title");
  startpageThirdTitle.classList.add("startpage__title");
  startpageFirstText.classList.add("startpage__text");
  startpageSecondText.classList.add("startpage__text");
  startpageThirdText.classList.add("startpage__text");
  startpageFirstBtn.classList.add("startpage__btn");
  startpageSecondBtn.classList.add("startpage__btn");
  startpageFirstBtn.classList.add("btn");
  startpageSecondBtn.classList.add("btn");
  startpageSecondBtn.classList.add("btn-dark");
  startpageFirstImg.classList.add("d-block");
  startpageSecondImg.classList.add("d-block");
  startpageFirstImg.classList.add("w-100");
  startpageSecondImg.classList.add("w-100");

  startpageFirstImg.src = "https://i.ibb.co/vmgH7gs/aurora.jpg";
  startpageSecondImg.src = "https://i.ibb.co/bW14cc6/valentines.jpg";
  startpageThirdImg.src = "https://i.ibb.co/gWtQRQG/gifts.jpg";
  startpageFirstTitle.innerHTML = "Welcome to Aurora Jewelry.";
  startpageSecondTitle.innerHTML = `Join us in celebrating love and commitment with our Valentine's Day collection &hearts;`;
  startpageFirstText.innerHTML = `Aurora Jewelry has something for everyone. Come visit us today and let us help you find a piece that expresses your personal style and elegance.`;
  startpageSecondText.innerHTML = `One of the most popular gifts to give on Valentine's Day is jewelry, we have something for every occasion and taste.`;
  startpageThirdTitle.innerHTML = `Sparkle and shine!`;
  startpageThirdText.innerHTML = `With our dazzling selection of rings!</br> Visit our jewelry shop now for a unique selection of fashionable and timeless rings.`;

  startpageContainer.appendChild(startpageCarousel);
  startpageContainer.appendChild(carouselBtnPrev);
  startpageContainer.appendChild(carouselBtnNext);
  startpageCarousel.appendChild(firstCarouselItem);
  startpageCarousel.appendChild(secondCarouselItem);
  startpageCarousel.appendChild(thirdCarouselItem);
  firstCarouselItem.appendChild(startpageFirstImg);
  firstCarouselItem.appendChild(startpageFirstCaption);
  secondCarouselItem.appendChild(startpageSecondImg);
  secondCarouselItem.appendChild(startpageSecondCaption);
  thirdCarouselItem.appendChild(startpageThirdImg);
  thirdCarouselItem.appendChild(startpageThirdCaption);
  startpageFirstCaption.appendChild(startpageFirstTitle);
  startpageFirstCaption.appendChild(startpageFirstText);
  startpageSecondCaption.appendChild(startpageSecondTitle);
  startpageSecondCaption.appendChild(startpageSecondText);
  startpageThirdCaption.appendChild(startpageThirdTitle);
  startpageThirdCaption.appendChild(startpageThirdText);

  carouselBtnPrev.appendChild(carouselPrevIcon);
  carouselBtnNext.appendChild(carouselNextIcon);
}

const divContainer: HTMLDivElement = document.querySelector(
  ".productStartpage"
) as HTMLDivElement;

function showProductsStartpage() {
  const spotlightContainer: HTMLDivElement = document.querySelector(
    ".spotlight"
  ) as HTMLDivElement;
  const spotlightTitle: HTMLParagraphElement = document.createElement("p");
  const spotlightText: HTMLParagraphElement = document.createElement("p");
  spotlightTitle.classList.add("spotlight__title");
  spotlightText.classList.add("spotlight__text");
  spotlightTitle.innerHTML = "In the Spotlight!";
  spotlightText.innerHTML = "Check out our latest collection.";
  spotlightContainer.appendChild(spotlightTitle);
  spotlightContainer.appendChild(spotlightText);
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

    productImg.addEventListener("click", () => {
      location.href = "../pages/productdetails.html?id=" + productFilter[i].id;
    });

    divContainer.appendChild(productContainer);
    productContainer.appendChild(productImgContainer);
    productImgContainer.appendChild(productImg);
    productContainer.appendChild(productType);
    productContainer.appendChild(productName);
    productContainer.appendChild(productPrice);
  }
}
