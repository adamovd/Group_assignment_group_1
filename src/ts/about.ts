import { cartButton } from "./cart";

cartButton();

export function createHeader() {
  let headerWrapper: HTMLDivElement = document.createElement(
    "div"
  ) as HTMLDivElement;

  let navigationWrapper: HTMLDivElement = document.createElement(
    "div"
  ) as HTMLDivElement;

  let nav = ` <header>


  <div> <i id="menu-bar" class="fas fa-bars"></i></div>

  <a href="#" aria-label="logo" class="logo">Shop <i class="fas fa-gem"></i></a>

  <nav class="navbar">
    <a href="#home">home</a>
    <a href="#products">Products</a>
    <a href="#about">About Us</a>
    <a href="#contact">Contact</a>
  </nav>

  <div class="icons">
  <a href="#" aria-label="shopping-cart-icon" > <i class="fa fa-shopping-bag"></i></a>
  <a href="#" aria-label="search-icon" class="fas fa-search"></a>
    
  </div>
</header>`;

  //<a href="#" aria-label="shopping-cart-icon" class="fas fa-shopping-cart"> <i class="fa fa-shopping-bag" aria-hidden="true"></i></a>

  navigationWrapper.innerHTML += nav;

  document.body.appendChild(headerWrapper);
  headerWrapper.appendChild(navigationWrapper);

  let menu: HTMLDivElement = document.querySelector(
    "#menu-bar"
  ) as HTMLDivElement;
  let navbar: HTMLDivElement = document.querySelector(
    ".navbar"
  ) as HTMLDivElement;

  menu.addEventListener("click", () => {
    menu.classList.toggle("fa-times");

    navbar.classList.toggle("active");
  });
}

//  <div id="menu-bar" class="fas fa-bars "></div>

export function createFooter() {
  let footerwraper: HTMLDivElement = document.createElement(
    "div"
  ) as HTMLDivElement;

  let footer: HTMLDivElement = document.createElement("div") as HTMLDivElement;

  let footerContent = `
  
    <footer class="footer">
       <div class="container">

         <div class="row">
         <a href="#" class="arrow-wrapper" aria-label="arrow-to-go-top-of-page"><i class="bi bi-arrow-up arrow"></i></a>

           <div class="footer-col">
             <h4>Shop</h4>
             <ul>
               <li><a href="#">Home</a></li>
               <li><a href="#">Products</a></li>
               <li><a href="#">About Us</a></li>
               <li><a href="#">Contact</a></li>
             </ul>
           </div>
           <div class="footer-col">
             <h4>FAQ</h4>
             <ul>
               <li><a href="#">Shipping</a></li>
               <li><a href="#">Returns</a></li>
               <li><a href="#">Order Status</a></li>
               <li><a href="#">Payment Options</a></li>
             </ul>
           </div>
           <div class="footer-col">
             <h4>Store</h4>
           	<ul>
  	 				<li><a href="#"><i class="fa fa-map-marker"></i>Address:Gågatan 2,Stockholm</a></li> 
            <li><a href="#"><i class="fa fa-envelope"></i>Email:shop@webbshop.se</a></li>     
  	 				<li><a href="#"> <i class="fa fa-phone"></i>Phone:073-5647654</a></li>
  	 			</ul>
           </div>
           <div class="footer-col">
             <h4>follow us</h4>

             <div class="social-links">
               <a href="#" aria-label="facebook-logo"><i class="fab fa-facebook-f"></i></a>
               <a href="#" aria-label="instagram-logo"><i class="fab fa-instagram"></i></a>
               <a href="#" aria-label="twitter"><i class="fab fa-twitter"></i></a>
             </div>


           </div>

         </div>
         <p class="copyright"> Copyright © 2023 Shop</p>
       </div>
    </footer>
  
  `;

  footerwraper.innerHTML += footerContent;

  document.body.appendChild(footerwraper);
  footerwraper.appendChild(footer);
}

export function createFQA() {
  let wrapperFAQ: HTMLDivElement = document.createElement(
    "div"
  ) as HTMLDivElement;

  let bodyFAQ: HTMLParagraphElement = document.createElement(
    "div"
  ) as HTMLParagraphElement;

  let contentFAQ = ` 

  <div class="faq">

  <h3 class="faq-mtitle">FAQ</h3>
      <div class="faq-item">
          <input class="faq-input" type="checkbox" id="faq_1">
          <label class="faq-title" for="faq_1">Jewelry Care</label>
          <div class="faq-text">
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores eum, ipsum. Voluptatum deleniti ut ipsa blanditiis, modi facere distinctio impedit illum fugiat ex vel, quasi sit, explicabo veniam nemo reprehenderit!</p>
          </div>
      </div>

      <div class="faq-item">
          <input class="faq-input" type="checkbox" id="faq_2">
          <label class="faq-title" for="faq_2">Sizing Guide</label>
          <div class="faq-text">
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores eum, ipsum. Voluptatum deleniti ut ipsa blanditiis, modi facere distinctio impedit illum fugiat ex vel, quasi sit, explicabo veniam nemo reprehenderit!</p>
          </div>
        </div>

        <div class="faq-item">
        <input class="faq-input" type="checkbox" id="faq_3">
        <label class="faq-title" for="faq_3">Shipping</label>
        <div class="faq-text">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores eum, ipsum. Voluptatum deleniti ut ipsa blanditiis, modi facere distinctio impedit illum fugiat ex vel, quasi sit, explicabo veniam nemo reprehenderit!</p>
        </div>
      </div>

      
      <div class="faq-item">
      <input class="faq-input" type="checkbox" id="faq_4">
      <label class="faq-title" for="faq_4">Returns</label>
      <div class="faq-text">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores eum, ipsum. Voluptatum deleniti ut ipsa blanditiis, modi facere distinctio impedit illum fugiat ex vel, quasi sit, explicabo veniam nemo reprehenderit!</p>
      </div>
    </div>

    
    <div class="faq-item">
    <input class="faq-input" type="checkbox" id="faq_5">
    <label class="faq-title" for="faq_5">Order Status</label>
    <div class="faq-text">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores eum, ipsum. Voluptatum deleniti ut ipsa blanditiis, modi facere distinctio impedit illum fugiat ex vel, quasi sit, explicabo veniam nemo reprehenderit!</p>
    </div>
  </div>


  
  <div class="faq-item">
  <input class="faq-input" type="checkbox" id="faq_6">
  <label class="faq-title" for="faq_6">Payment Options</label>
  <div class="faq-text">
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores eum, ipsum. Voluptatum deleniti ut ipsa blanditiis, modi facere distinctio impedit illum fugiat ex vel, quasi sit, explicabo veniam nemo reprehenderit!</p>
  </div>
</div>

  </div>

 

`;

  bodyFAQ.innerHTML += contentFAQ;
  document.body.appendChild(wrapperFAQ);
  wrapperFAQ.appendChild(bodyFAQ);
}

export function createPromotion() {
  let wrapperPromo: HTMLDivElement = document.createElement(
    "div"
  ) as HTMLDivElement;

  let promo: HTMLParagraphElement = document.createElement(
    "div"
  ) as HTMLParagraphElement;

  let contentPromo = ` 
 

<div class="container-fluid">
<div class="row banner" color="primary">
  <div class="row col-md inner-banner m-4">
    <div class="col-md-6 content bg-circle align-self-center text-center">
      <h4 class="text-center">Hello There!</h4>
      <h5>Enjoy Christmas Speacials</h5>
      <p class="promo-text">
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint commodi placeat eligendi repudiandae, possimus eaque rerum sapiente neque eius, quae eos doloremque fugiat, consectetur adipisci veniam eum soluta ullam sed totam itaque. Vel ipsam facere consequatur perferendis, suscipit tempore repudiandae officia magnam neque eum nesciunt animi, ullam autem voluptatum.
      </p>
      <div class="button">
        <button type="button" class="btn">
          Shop Now <i class="fa fa-shopping-bag" aria-hidden="true"></i>
        </button>
      </div>
    </div>
    <div class="col-md-6  alig-end" >

      <div class=" d-flex justify-content-center">

      <img src="https://images.pexels.com/photos/14756614/pexels-photo-14756614.jpeg" class="image" alt="black and white boxes stacked on top of eachother">
      </div>
    </div>
  </div>
</div>
</div>

`;

  promo.innerHTML += contentPromo;
  document.body.appendChild(wrapperPromo);
  wrapperPromo.appendChild(promo);
}
window.addEventListener("load", () => {
  createHeader();
  createFQA();
  createPromotion();
  createFooter();
});
