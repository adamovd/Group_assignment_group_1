import { CartItem } from "./models/CartItem";

const cartBadge: HTMLSpanElement = document.createElement(
  "span"
) as HTMLSpanElement;
cartBadge.classList.add("cart-badge", "badge", "rounded-pill");
cartBadge.id = "badgeOnCart";

export function createBadge() {
  let getLSList: string = localStorage.getItem("cart") || "[]";

  let LSList: CartItem[] = JSON.parse(getLSList);

  let sum = 0;
  for (let i = 0; i < LSList.length; i++) {
    sum += LSList[i].amount;

    cartBadge.innerHTML = sum.toString();
  }

  if (LSList.length < 1) {
    cartBadge.innerHTML = "";
  }
}

export function createMenu() {
  const header: HTMLDivElement = document.querySelector(
    ".header"
  ) as HTMLDivElement;

  const menuBarWrap: HTMLDivElement = document.createElement(
    "div"
  ) as HTMLDivElement;

  const menuBar: HTMLSpanElement = document.createElement(
    "span"
  ) as HTMLSpanElement;

  const logo: HTMLImageElement = document.createElement("img");

  const navbar: HTMLParagraphElement = document.createElement(
    "p"
  ) as HTMLParagraphElement;

  const homeLink: HTMLAnchorElement = document.createElement(
    "a"
  ) as HTMLAnchorElement;

  const productsLink: HTMLAnchorElement = document.createElement(
    "a"
  ) as HTMLAnchorElement;

  const aboutLink: HTMLAnchorElement = document.createElement(
    "a"
  ) as HTMLAnchorElement;

  const contactLink: HTMLAnchorElement = document.createElement(
    "a"
  ) as HTMLAnchorElement;

  const icons: HTMLDivElement = document.createElement("div") as HTMLDivElement;

  const shoppingBag: HTMLAnchorElement = document.createElement(
    "a"
  ) as HTMLAnchorElement;

  const shoppingBagIcon: HTMLSpanElement = document.createElement(
    "span"
  ) as HTMLSpanElement;

  const search: HTMLAnchorElement = document.createElement(
    "a"
  ) as HTMLAnchorElement;

  const searchIcon: HTMLSpanElement = document.createElement(
    "span"
  ) as HTMLSpanElement;

  //class/ id
  header.classList.add("header");

  menuBar.id = "header__menu-bar";
  menuBar.classList.add("fas", "fa-bars");

  menuBarWrap.classList.add("header__menuBar");

  logo.classList.add("header__logo");

  logo.src = "https://i.ibb.co/0f6g50Q/aurora-logo-2.png";

  logo.addEventListener("click", () => {
    location.href = "../index.html";
  });

  navbar.classList.add("header__navbar");

  homeLink.href = "../index.html";
  homeLink.innerText = "Home";
  homeLink.classList.add("links");

  productsLink.href = "../pages/products.html";
  productsLink.innerText = "Products";
  productsLink.classList.add("links");

  aboutLink.href = "../pages/about.html";
  aboutLink.innerText = "About Us";
  aboutLink.classList.add("links");

  contactLink.href = "../pages/contact.html";
  contactLink.innerText = "Contact";
  contactLink.classList.add("links");

  shoppingBag.href = "#";
  shoppingBag.setAttribute("aria-label", "shopping-cart-icon");
  shoppingBag.classList.add("icons__shoppingbag");
  shoppingBag.id = "openCart";

  icons.classList.add("icons");

  shoppingBagIcon.classList.add("fa", "fa-shopping-bag");

  searchIcon.classList.add("fas", "fa-search");

  /////////////7

  //cartBadge.innerHTML = "0";

  /////////////////////////////7
  menuBarWrap.appendChild(menuBar);

  navbar.appendChild(homeLink);
  navbar.appendChild(productsLink);
  navbar.appendChild(aboutLink);
  navbar.appendChild(contactLink);

  shoppingBag.appendChild(shoppingBagIcon);
  shoppingBagIcon.appendChild(cartBadge);

  search.appendChild(searchIcon);
  icons.appendChild(shoppingBag);
  //icons.appendChild(search);

  header.appendChild(menuBarWrap);
  header.appendChild(logo);
  header.appendChild(navbar);
  header.appendChild(icons);
}

export function toggleHamburgerMenu() {
  let menu: HTMLSpanElement = document.getElementById(
    "header__menu-bar"
  ) as HTMLSpanElement;
  let navbar: HTMLParagraphElement = document.querySelector(
    ".header__navbar"
  ) as HTMLParagraphElement;

  menu.addEventListener("click", () => {
    menu.classList.toggle("fa-times");
    navbar.classList.toggle("active");
  });

  /*  window.onscroll = () => {
    menu.classList.remove("fa-times");
    navbar.classList.remove("active");
  }; */

  window.addEventListener("scroll", () => {
    menu.classList.remove("fa-times");
    navbar.classList.remove("active");
  });
}

createBadge();
