const shoppingCartBtn = document.querySelector("#cart");
const overlayLayer = document.querySelector(".main-overlay-inactive")
const cartCloseBtn = document.querySelector("#close");

// open shopping cart
shoppingCartBtn.addEventListener("click", function (e) {
    overlayLayer.className = "main-overlay-active";
});

//close shopping cart
cartCloseBtn.addEventListener("click", function () {
    overlayLayer.className = "main-overlay-inactive"
})

