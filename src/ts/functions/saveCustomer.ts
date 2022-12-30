import { Customer } from "../models/Customer";

export function saveCustomer() {
  const customerNameInput: HTMLInputElement = document.getElementById(
    "name"
  ) as HTMLInputElement;
  const customerLastnameInput: HTMLInputElement = document.getElementById(
    "lastname"
  ) as HTMLInputElement;
  const customerAdressInput: HTMLInputElement = document.getElementById(
    "adress"
  ) as HTMLInputElement;
  const customerCityInput: HTMLInputElement = document.getElementById(
    "cityname"
  ) as HTMLInputElement;
  const customerZipInput: HTMLInputElement = document.getElementById(
    "zipcode"
  ) as HTMLInputElement;
  const customerPhoneInput: HTMLInputElement = document.getElementById(
    "phone"
  ) as HTMLInputElement;
  const customerMailInput: HTMLInputElement = document.getElementById(
    "email"
  ) as HTMLInputElement;

  const customerName: string = customerNameInput.value;
  console.log(customerName);
  const customerLastName: string = customerLastnameInput.value;
  console.log(customerLastName);
  const customerAdress: string = customerAdressInput.value;
  console.log(customerAdress);
  const customerCity: string = customerCityInput.value;
  console.log(customerCity);
  const customerZip: string = customerZipInput.value;
  console.log(customerZip);
  const customerPhone: string = customerPhoneInput.value;
  console.log(customerPhone);
  const customerMail: string = customerMailInput.value;
  console.log(customerMail);

  let customer: Customer = new Customer(
    customerName,
    customerLastName,
    customerAdress,
    customerCity,
    customerZip,
    customerPhone,
    customerMail
  );
  localStorage.setItem("customer", JSON.stringify(customer));

  console.log(customer);
}
