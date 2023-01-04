import { CartItem } from "../models/CartItem";

export function generatePurchase() {
  const checkout: HTMLElement = document.querySelector(
    ".checkout"
  ) as HTMLElement;
  checkout.innerHTML = "";

  let checkoutProductsFromLS: CartItem[] = [];
  checkoutProductsFromLS = JSON.parse(localStorage.getItem("order") || "[]");
  let orderProducts = checkoutProductsFromLS.map((orderProducts) => {
    return new CartItem(orderProducts.product, orderProducts.amount);
  });

  let customer = JSON.parse(localStorage.getItem("customer") || "{}");

  const purchaseContainer: HTMLDivElement = document.createElement("div");
  const purchaseTitle: HTMLParagraphElement = document.createElement("p");
  const purchaseText: HTMLParagraphElement = document.createElement("p");
  const orderContainer: HTMLUListElement = document.createElement("ul");
  const orderTitle: HTMLParagraphElement = document.createElement("p");
  const customerContainer: HTMLDivElement = document.createElement("div");
  const customerTitle: HTMLParagraphElement = document.createElement("p");
  const customerName: HTMLParagraphElement = document.createElement("p");
  const customerAdress: HTMLParagraphElement = document.createElement("p");
  const customerCity: HTMLParagraphElement = document.createElement("p");
  const customerZip: HTMLParagraphElement = document.createElement("p");
  const customerPhone: HTMLParagraphElement = document.createElement("p");
  const customerMail: HTMLParagraphElement = document.createElement("p");
  const orderQuestions: HTMLParagraphElement = document.createElement("p");

  purchaseContainer.classList.add("purchase");
  purchaseTitle.classList.add("purchase__title");
  purchaseText.classList.add("purchase__text");
  orderTitle.classList.add("order__title");
  orderContainer.classList.add("order");
  customerContainer.classList.add("customerinfo");
  customerTitle.classList.add("customerinfo__title");
  customerName.classList.add("customerinfo__name");
  customerAdress.classList.add("customerinfo__adress");
  customerCity.classList.add("customerinfo__city");
  customerZip.classList.add("customerinfo__zip");
  customerPhone.classList.add("customerinfo__phone");
  customerMail.classList.add("customerinfo__mail");
  orderQuestions.classList.add("orderquestions");

  purchaseTitle.innerHTML = "Thanks for your order!";
  purchaseText.innerHTML = `Thank you, ${customer.name}. We’ve received your order. We’ll send an email to ${customer.mail} when it ships.`;
  orderTitle.innerHTML = "Overview:";
  customerTitle.innerHTML = "Delivery adress:";
  customerName.innerHTML = customer.name + " " + customer.lastname;
  customerAdress.innerHTML = customer.adress;
  customerCity.innerHTML = customer.city;
  customerZip.innerHTML = customer.zip;
  customerPhone.innerHTML = customer.phone;
  customerMail.innerHTML = customer.mail;
  orderQuestions.innerHTML = `If you have any questions about your order, get in contact on: </br> <i>order@aurora.com</i>`;

  orderContainer.innerHTML = "";
  for (let i = 0; i < orderProducts.length; i++) {
    const checkoutProductLi: HTMLLIElement = document.createElement("li");
    const checkoutProductName: HTMLParagraphElement =
      document.createElement("p");
    const checkoutProductSize: HTMLParagraphElement =
      document.createElement("p");
    const checkoutProductPrice: HTMLParagraphElement =
      document.createElement("p");
    const checkoutProductImg: HTMLImageElement = document.createElement("img");
    const checkoutProductAmountContainer: HTMLDivElement =
      document.createElement("div");
    const checkoutProductAmount: HTMLParagraphElement =
      document.createElement("p");
    const checkoutProductAdd: HTMLButtonElement =
      document.createElement("button");
    const checkoutProductRemove: HTMLButtonElement =
      document.createElement("button");

    checkoutProductLi.classList.add("checkoutproduct");
    checkoutProductLi.classList.add("list-group-item");
    checkoutProductLi.classList.add("d-flex");
    checkoutProductLi.classList.add("justify-content-between");
    checkoutProductLi.classList.add("lh-sm");
    checkoutProductName.classList.add("checkoutproduct__name");
    checkoutProductSize.classList.add("checkoutproduct__size");
    checkoutProductPrice.classList.add("checkoutproduct__price");
    checkoutProductImg.classList.add("checkoutproduct__img");
    checkoutProductAmountContainer.classList.add(
      "checkoutproduct__amountcontainer"
    );
    checkoutProductAmount.classList.add("checkoutproduct__amount");

    checkoutProductName.innerHTML = orderProducts[i].product.name;
    checkoutProductPrice.innerHTML =
      orderProducts[i].product.price.toString() + " kr";
    checkoutProductImg.src = orderProducts[i].product.image;
    checkoutProductAmount.innerHTML = orderProducts[i].amount.toString();

    orderContainer.appendChild(checkoutProductLi);
    checkoutProductLi.appendChild(checkoutProductImg);
    checkoutProductLi.appendChild(checkoutProductName);
    checkoutProductLi.appendChild(checkoutProductSize);
    checkoutProductLi.appendChild(checkoutProductPrice);
    checkoutProductLi.appendChild(checkoutProductAmountContainer);
    checkoutProductAmountContainer.appendChild(checkoutProductRemove);
    checkoutProductAmountContainer.appendChild(checkoutProductAmount);
    checkoutProductAmountContainer.appendChild(checkoutProductAdd);
  }
  let sum = 0;
  const orderTotalAmount: HTMLParagraphElement = document.createElement("p");
  orderTotalAmount.classList.add("orderTotalAmount");

  checkout.appendChild(purchaseTitle);
  checkout.appendChild(purchaseText);
  checkout.appendChild(orderTitle);
  checkout.appendChild(orderContainer);
  checkout.appendChild(customerTitle);
  checkout.appendChild(customerContainer);
  customerContainer.appendChild(customerName);
  customerContainer.appendChild(customerAdress);
  customerContainer.appendChild(customerCity);
  customerContainer.appendChild(customerZip);
  customerContainer.appendChild(customerPhone);
  customerContainer.appendChild(customerMail);
  checkout.appendChild(orderQuestions);

  for (let i = 0; i < orderProducts.length; i++) {
    sum = sum + orderProducts[i].product.price * orderProducts[i].amount;
  }

  orderTotalAmount.innerHTML = "Total amount: " + sum + " kr";

  orderContainer.appendChild(orderTotalAmount);
}
