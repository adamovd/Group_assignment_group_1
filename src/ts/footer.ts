export function createFooter() {
  const footer: HTMLElement = document.querySelector(".footer") as HTMLElement;

  const footerContainer: HTMLDivElement = document.createElement(
    "div"
  ) as HTMLDivElement;
  footerContainer.classList.add("container");

  const footerRow: HTMLDivElement = document.createElement(
    "div"
  ) as HTMLDivElement;
  footerRow.classList.add("row");

  const arrowWrapper: HTMLAnchorElement = document.createElement(
    "a"
  ) as HTMLAnchorElement;
  arrowWrapper.classList.add("arrow");
  arrowWrapper.href = "#";
  arrowWrapper.setAttribute("aria-label", "arrow-to-go-top-of-page");

  const arrowIcon: HTMLSpanElement = document.createElement(
    "span"
  ) as HTMLSpanElement;

  arrowIcon.classList.add("bi", "bi-arrow-up", "arrow");
  arrowIcon.classList.add("arrow");

  const footerCol: HTMLDivElement = document.createElement(
    "div"
  ) as HTMLDivElement;
  footerCol.classList.add("footer-col");

  const shopTitle: HTMLHeadingElement = document.createElement(
    "h4"
  ) as HTMLHeadingElement;

  shopTitle.innerText = "Aurora";
  shopTitle.classList.add("footer__title");

  const shopUl: HTMLUListElement = document.createElement(
    "ul"
  ) as HTMLUListElement;
  shopUl.classList.add("footer__ul");

  const shopLiHome: HTMLLIElement = document.createElement(
    "li"
  ) as HTMLLIElement;
  shopLiHome.classList.add("footer__li");

  const shopLinkHome: HTMLAnchorElement = document.createElement(
    "a"
  ) as HTMLAnchorElement;
  shopLinkHome.classList.add("footer__links");
  shopLinkHome.innerText = "Home";
  shopLinkHome.href = "../index.html";

  //

  const shopLiProducts: HTMLLIElement = document.createElement(
    "li"
  ) as HTMLLIElement;
  shopLiProducts.classList.add("footer__li");

  const shopLinkProducts: HTMLAnchorElement = document.createElement(
    "a"
  ) as HTMLAnchorElement;
  shopLinkProducts.classList.add("footer__links");
  shopLinkProducts.innerText = "Products";
  shopLinkProducts.href = "../pages/products.html";

  const shopLiAbout: HTMLLIElement = document.createElement(
    "li"
  ) as HTMLLIElement;
  shopLiAbout.classList.add("footer__li");

  const shopLinkAbout: HTMLAnchorElement = document.createElement(
    "a"
  ) as HTMLAnchorElement;
  shopLinkAbout.classList.add("footer__links");
  shopLinkAbout.innerText = "About Us:";
  shopLinkAbout.href = "../pages/about.html";

  //
  const shopLiContact: HTMLLIElement = document.createElement(
    "li"
  ) as HTMLLIElement;
  shopLiContact.classList.add("footer__li");

  const shopLinkContact: HTMLAnchorElement = document.createElement(
    "a"
  ) as HTMLAnchorElement;
  shopLinkContact.classList.add("footer__links");
  shopLinkContact.innerText = "Contact";
  shopLinkContact.href = "../pages/contact.html";

  const footerCol2: HTMLDivElement = document.createElement(
    "div"
  ) as HTMLDivElement;
  footerCol2.classList.add("footer-col");

  const faqTitle: HTMLHeadingElement = document.createElement(
    "h4"
  ) as HTMLHeadingElement;

  faqTitle.innerText = "FAQ";
  faqTitle.classList.add("footer__title");

  const faqUl: HTMLUListElement = document.createElement(
    "ul"
  ) as HTMLUListElement;
  faqUl.classList.add("footer__ul");

  const faqLiShipping: HTMLLIElement = document.createElement(
    "li"
  ) as HTMLLIElement;
  faqLiShipping.classList.add("footer__li");

  const faqLinkShipping: HTMLAnchorElement = document.createElement(
    "a"
  ) as HTMLAnchorElement;
  faqLinkShipping.classList.add("footer__links");
  faqLinkShipping.innerText = "Shipping";
  faqLinkShipping.href = "../pages/contact.html";

  ///
  const faqLiReturns: HTMLLIElement = document.createElement(
    "li"
  ) as HTMLLIElement;
  faqLiReturns.classList.add("footer__li");

  const faqLinkReturns: HTMLAnchorElement = document.createElement(
    "a"
  ) as HTMLAnchorElement;
  faqLinkReturns.classList.add("footer__links");
  faqLinkReturns.innerText = "Returns";
  faqLinkReturns.href = "../pages/contact.html";

  //
  const faqLiOrderS: HTMLLIElement = document.createElement(
    "li"
  ) as HTMLLIElement;
  faqLiOrderS.classList.add("footer__li");

  const faqLinkOrderS: HTMLAnchorElement = document.createElement(
    "a"
  ) as HTMLAnchorElement;
  faqLinkOrderS.classList.add("footer__links");
  faqLinkOrderS.innerText = "Order Status";
  faqLinkOrderS.href = "../pages/contact.html";

  const faqLiPaymentO: HTMLLIElement = document.createElement(
    "li"
  ) as HTMLLIElement;
  faqLiPaymentO.classList.add("footer__li");

  const faqLinkPaymentO: HTMLAnchorElement = document.createElement(
    "a"
  ) as HTMLAnchorElement;
  faqLinkPaymentO.classList.add("footer__links");
  faqLinkPaymentO.innerText = "Payment Optins";
  faqLinkPaymentO.href = "../pages/contact.html";

  const footerCol3: HTMLDivElement = document.createElement(
    "div"
  ) as HTMLDivElement;
  footerCol3.classList.add("footer-col");

  const storeTitle: HTMLHeadingElement = document.createElement(
    "h4"
  ) as HTMLHeadingElement;

  storeTitle.innerText = "Store";
  storeTitle.classList.add("footer__title");

  const storeUl: HTMLUListElement = document.createElement(
    "ul"
  ) as HTMLUListElement;
  storeUl.classList.add("footer__ul");

  const storeLiAdress: HTMLLIElement = document.createElement(
    "li"
  ) as HTMLLIElement;
  storeLiAdress.classList.add("footer__li");

  const storeAdress: HTMLAnchorElement = document.createElement(
    "a"
  ) as HTMLAnchorElement;
  storeAdress.classList.add("footer__links");
  storeAdress.innerHTML = `<i class="fa fa-map-marker"></i>Gågatan 2,Stockholm`;

  const storeLiEmail: HTMLLIElement = document.createElement(
    "li"
  ) as HTMLLIElement;
  storeLiEmail.classList.add("footer__li");

  const storeEmail: HTMLAnchorElement = document.createElement(
    "a"
  ) as HTMLAnchorElement;
  storeEmail.classList.add("footer__links");
  storeEmail.innerHTML = `<i class="fa fa-envelope"></i>info@aurora.com`;
  storeEmail.href = "#";

  const storeLiTel: HTMLLIElement = document.createElement(
    "li"
  ) as HTMLLIElement;
  storeLiTel.classList.add("footer__li");

  const storeTel: HTMLAnchorElement = document.createElement(
    "a"
  ) as HTMLAnchorElement;
  storeTel.classList.add("footer__links");
  storeTel.innerHTML = `<i class="fa fa-phone"></i>073-5647654`;
  storeTel.href = "#";

  const footerCol4: HTMLDivElement = document.createElement(
    "div"
  ) as HTMLDivElement;
  footerCol4.classList.add("footer-col");

  const socialsTitle: HTMLHeadingElement = document.createElement(
    "h4"
  ) as HTMLHeadingElement;

  socialsTitle.innerText = "Follow Us";
  socialsTitle.classList.add("footer__title");

  const socialLinks: HTMLDivElement = document.createElement(
    "div"
  ) as HTMLDivElement;
  socialLinks.classList.add("social-links");

  const fb: HTMLAnchorElement = document.createElement(
    "a"
  ) as HTMLAnchorElement;

  fb.href = "https://sv-se.facebook.com/";
  fb.setAttribute("aria-label", "facebook-logo");
  fb.classList.add("footer__links");
  fb.innerHTML = '<i class="fab fa-facebook-f"></i>@aurorashopse';

  const insta: HTMLAnchorElement = document.createElement(
    "a"
  ) as HTMLAnchorElement;

  insta.href = "https://www.instagram.com/";
  insta.setAttribute("aria-label", "instagram-logo");
  insta.classList.add("footer__links");
  insta.innerHTML = `<i class="fab fa-instagram"></i>@aurorashopse`;

  const twitter: HTMLAnchorElement = document.createElement(
    "a"
  ) as HTMLAnchorElement;

  twitter.href = "https://twitter.com/";
  twitter.setAttribute("aria-label", "twitter");
  twitter.classList.add("footer__links");
  twitter.innerHTML = '<i class="fab fa-twitter"></i>@aurorashopse';

  const copyRightWrapper: HTMLDivElement = document.createElement(
    "div"
  ) as HTMLDivElement;

  const copyRight: HTMLParagraphElement = document.createElement(
    "p"
  ) as HTMLParagraphElement;
  copyRight.classList.add("copyright");
  copyRight.innerHTML = "Copyright © 2023 Aurora";

  footerRow.appendChild(arrowWrapper);
  arrowWrapper.appendChild(arrowIcon);

  footerRow.appendChild(footerCol);
  footerCol.appendChild(shopTitle);
  footerCol.appendChild(shopUl);

  shopUl.appendChild(shopLiHome);
  shopUl.appendChild(shopLiProducts);
  shopUl.appendChild(shopLiAbout);
  shopUl.appendChild(shopLiContact);

  shopLiHome.appendChild(shopLinkHome);
  shopLiProducts.appendChild(shopLinkProducts);
  shopLiAbout.appendChild(shopLinkAbout);
  shopLiContact.append(shopLinkContact);

  footerRow.appendChild(footerCol2);
  footerCol2.appendChild(faqTitle);
  footerCol2.appendChild(faqUl);
  faqUl.appendChild(faqLiShipping);
  faqUl.appendChild(faqLiReturns);
  faqUl.appendChild(faqLiOrderS);
  faqUl.appendChild(faqLiPaymentO);

  faqLiShipping.appendChild(faqLinkShipping);
  faqLiReturns.appendChild(faqLinkReturns);
  faqLiOrderS.appendChild(faqLinkOrderS);
  faqLiPaymentO.appendChild(faqLinkPaymentO);

  footerRow.appendChild(footerCol3);
  footerCol3.appendChild(storeTitle);
  footerCol3.appendChild(storeUl);

  storeUl.appendChild(storeLiAdress);
  storeUl.appendChild(storeLiEmail);
  storeUl.appendChild(storeLiTel);

  storeLiAdress.appendChild(storeAdress);
  storeLiEmail.appendChild(storeEmail);
  storeLiTel.appendChild(storeTel);

  footerRow.appendChild(footerCol4);
  footerCol4.appendChild(socialsTitle);
  footerCol4.appendChild(socialLinks);
  socialLinks.appendChild(fb);
  socialLinks.appendChild(insta);
  socialLinks.appendChild(twitter);

  footerRow.appendChild(copyRightWrapper);
  copyRightWrapper.appendChild(copyRight);
  footerContainer.appendChild(footerRow);

  footer.appendChild(footerContainer);
}
