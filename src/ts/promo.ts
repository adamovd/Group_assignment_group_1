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

      <h5>Join us in celebrating love and commitment with our Valentine's Day collection &hearts;</h5>

      <p class="promo-text">
      One of the most popular gifts to give on Valentine's Day is jewelry, as it is a timeless and elegant way to show your love. From sparkling diamonds to heartfelt charms, there are endless options to choose from when it comes to finding the perfect piece of jewelry for your loved one.
      Surprise your loved one with a stunning piece of jewelry from our Valentine's Day collection or treat yourself to something special with our collection of luxury jewelry. From statement necklaces to sparkling gemstone rings, we have something for every occasion and taste.
      </p>
      <div class="button">
      
      <button type="button" class="btn">

      <a href="../pages/products.html" class="promo-link"
      > Shop Now <i class="fa fa-shopping-bag" aria-hidden="true"></i></a
    >
       
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

  const main: HTMLElement = document.querySelector(".main") as HTMLElement;

  main.appendChild(wrapperPromo);
  wrapperPromo.appendChild(promo);
}
