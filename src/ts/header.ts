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

  const logo: HTMLAnchorElement = document.createElement(
    "a"
  ) as HTMLAnchorElement;

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

  logo.href = "#";
  logo.setAttribute("aria-label", "logo");
  logo.classList.add("header__logo");
  logo.innerHTML = 'Shop <i class="fas fa-gem"></i>';

  navbar.classList.add("header__navbar");

  homeLink.href = "#home";
  homeLink.innerText = "home";
  homeLink.classList.add("links");

  productsLink.href = "#products";
  productsLink.innerText = "Products";
  productsLink.classList.add("links");

  aboutLink.href = "#about";
  aboutLink.innerText = "About Us";
  aboutLink.classList.add("links");

  contactLink.href = "#contact";
  contactLink.innerText = "Contact";
  contactLink.classList.add("links");

  shoppingBag.href = "#";
  shoppingBag.setAttribute("aria-label", "shopping-cart-icon");
  shoppingBag.classList.add("icons__shoppingbag");

  icons.classList.add("icons");

  shoppingBagIcon.classList.add("fa", "fa-shopping-bag");

  search.href = "#";
  search.setAttribute("aria-label", "search-icon");
  search.classList.add("icons__search");

  searchIcon.classList.add("fas", "fa-search");

  ///
  menuBarWrap.appendChild(menuBar);

  navbar.appendChild(homeLink);
  navbar.appendChild(productsLink);
  navbar.appendChild(aboutLink);
  navbar.appendChild(contactLink);

  shoppingBag.appendChild(shoppingBagIcon);
  search.appendChild(searchIcon);
  icons.appendChild(shoppingBag);
  icons.appendChild(search);

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
