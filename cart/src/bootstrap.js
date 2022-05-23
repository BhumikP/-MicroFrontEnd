import faker from "faker";

let cartItem = `<h1>Your cart has ${faker.random.number()} Items.</h1>`;

// let img = `<img src="${faker.random.image()}" width="600" height="600" />`;

document.querySelector("#cart-show").innerHTML = cartItem;
