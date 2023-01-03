import { cartButton } from "./cart";
import { createBadge, createMenu, toggleHamburgerMenu } from "./header";
import { createFooter } from "./footer";

window.addEventListener("load", () => {
  createMenu();
  toggleHamburgerMenu();
  cartButton();
  createAboutUs();
  createFooter();
  createBadge();
});

export function createAboutUs() {
  const aboutContainer: HTMLDivElement = document.querySelector(
    ".aboutContainer"
  ) as HTMLDivElement;

  const aboutImgWrapper: HTMLDivElement = document.createElement(
    "div"
  ) as HTMLDivElement;

  aboutImgWrapper.classList.add("aboutImgWrapper");

  const aboutImg: HTMLImageElement = document.createElement(
    "img"
  ) as HTMLImageElement;

  aboutImg.classList.add("aboutImg");

  aboutImg.src =
    "https://images.pexels.com/photos/6263143/pexels-photo-6263143.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";

  aboutImg.alt = "Crafting jewelry";

  const aboutTextWrapper: HTMLDivElement = document.createElement(
    "div"
  ) as HTMLDivElement;

  aboutTextWrapper.classList.add("aboutTextWrapper");

  const aboutTitle: HTMLHeadingElement = document.createElement(
    "h4"
  ) as HTMLHeadingElement;

  aboutTitle.classList.add("aboutTitle");
  aboutTitle.innerHTML = "Our Story";

  const aboutText: HTMLParagraphElement = document.createElement(
    "p"
  ) as HTMLParagraphElement;

  aboutText.classList.add("aboutText");

  aboutText.innerHTML = `
    Welcome to our exclusive jewelry shop, where you will find the most exquisite and unique pieces that are sure to make a statement. We are a brand that specializes in creating one of a kind, high-end jewelry that exudes glamour and sophistication.

    Our journey in the jewelry industry began many years ago, when our founder discovered their passion for fine gemstones and precious metals. They spent years honing their craft and learning the art of jewelry making, eventually turning their talent into a successful business.

    Today, we offer a wide range of luxurious jewelry pieces that are perfect for any occasion, whether you're looking for a statement necklace, a pair of stunning earrings, or an eye-catching ring. Our pieces are handcrafted by skilled artisans using only the finest materials, ensuring that each and every one is of the highest quality. We take great pride in the quality and craftsmanship of our pieces, and we only use the finest materials to ensure that each and every one is truly special. Our team of skilled artisans is dedicated to creating unique and breathtaking pieces that will be cherished for generations to come.
    
    Thank you for choosing us and shopping with us! We look forward to helping you to elevate your style.

    
  `;

  aboutImgWrapper.appendChild(aboutImg);

  aboutTextWrapper.appendChild(aboutTitle);
  aboutTextWrapper.appendChild(aboutText);

  aboutContainer.appendChild(aboutImgWrapper);
  aboutContainer.appendChild(aboutTextWrapper);
}
