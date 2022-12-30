import { Customer } from "../models/Customer";

export function saveCustomer(
  name: string,
  lastname: string,
  adress: string,
  city: string,
  zip: string,
  phone: string,
  mail: string
) {
  console.log("hej");

  const customer: Customer = new Customer(
    name,
    lastname,
    adress,
    city,
    zip,
    phone,
    mail
  );

  localStorage.setItem("customer", JSON.stringify(customer));
  let customerfromLS = JSON.parse(localStorage.getItem("customer") || "{}");

  console.log(customerfromLS);
}
