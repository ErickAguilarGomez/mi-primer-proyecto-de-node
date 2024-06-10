const subtotal = document.querySelector("p");
let produc = {
    price: Number(subtotal.textContent.replace("$", "").trim())
};
console.log(produc.price);
