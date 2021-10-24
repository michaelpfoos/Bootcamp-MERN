const express = require("express");
const { company } = require("faker");
const faker = require("faker");
const app = express();

// req is short for request
// res is short for response
app.get("/api", (req, res) => {
  res.send("Our express api server is now sending this over to the browser");
});

// we can create a function to return a random / fake "Product"
const createProduct = () => {
  const newFake = {
      name: faker.commerce.productName(),
      price: '$' + faker.commerce.price(),
      department: faker.commerce.department()
  };
  return newFake;
};

//createUser function using faker api
const createUser = () => {
  const newFake = {
    id: faker.datatype.uuid(),
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    phoneNumber: faker.phone.phoneNumber(),
    email: faker.internet.email(),
    password: faker.internet.password()
  };
  return newFake;
}

//createCompany function using faker api
const createCompany = () => {
  const newFake = {
    id: faker.datatype.uuid(),
    name: faker.company.companyName(),
    address: faker.address.streetName(),
    street: faker.address.streetAddress(),
    city: faker.address.city(),
    state: faker.address.state(),
    zipcode: faker.address.zipCode(),
    country: faker.address.country()
  };
  return newFake;
}
  
//linuxhome:8000/api/faker/newFakeProduct
//linuxhome i just my server hosting this.
//Example from assignment seen through.
app.get("/api/faker/newFakeProduct", (request, response)=> {

  //use example solution from assignment
  const newFakeProduct = createProduct();

  response.json({
    name: newFakeProduct.name,
    price: newFakeProduct.price,
    department: newFakeProduct.department
  })
});

//linuxhome:8000/api/users/new
app.get("/api/users/new", (request, response)=> {

  //use example solution from assignment
  const newFakerUser = createUser();

  response.json({newFakerUser})
});

//linuxhome:8000/api/companies/new
app.get("/api/companies/new", (request, response)=> {

  //use example solution from assignment
  const newFakeCompany = createCompany();

  response.json({newFakeCompany})
});


const server = app.listen(8000, () =>
  console.log(`Server is locked and loaded on port ${server.address().port}!`)
);