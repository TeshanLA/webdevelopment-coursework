//data
const newArrival = [
    {
        "title": "Lightweight Headband",
        "discription": "Headbands for Men and Women Sports Hairband Lightweight with 20% discount",
        "price": 4.25,
        "image": "../images/products/items-images/headbandimg.jpg",
        "rating": 4,
        "hasSize": true,
        "numOfItems": 1
    },
    {
        "title": "Swimset Mask",
        "discription": "Superior quality material, mask with perfect design and Lightweigt and durable",
        "price": 1.5,
        "image": "../images/products/items-images/watermask.jpg",
        "rating": 5,
        "hasSize": false,
        "numOfItems": 1
    },
    {
        "title": "Badminton Racket",
        "discription": "Powerfull good tension badminton which suitable for indoor and tournaments",
        "price": 12,
        "image": "../images/products/items-images/Badminton-racket.png",
        "rating": 3,
        "hasSize": false,
        "numOfItems": 1
    },
    {
        "title": "Mens Running tights",
        "discription": "Designed for your free activities, elastic slim and light without any restricted feeling",
        "price": 15.5,
        "image": "../images/products/items-images/Mens-running.png",
        "rating": 5,
        "hasSize": true,
        "numOfItems": 1
    },
    {
        "title": "Bike Phoneholder",
        "discription": "one hand operated device,it is quick and easy to remove your phone from the mount and replace it when you’re done",
        "price": 30.45,
        "image": "../images/products/items-images/bike-phone-holder.jpg",
        "rating": 5,
        "hasSize": false,
        "numOfItems": 1
    }
]

const sportswear = [
    {
        "title": "Lightweight Headband",
        "discription": "Headbands for Men and Women Sports Hairband Lightweight with 20% discount",
        "price": 4.25,
        "image": "../images/products/items-images/headbandimg.jpg",
        "rating": 4,
        "hasSize": true,
        "numOfItems": 1
    }
]


const shoppingCartItems = [];
const cartDetails = {
    "items": 0,
    "total": 0
};

const pageDetails = {
    "selectedPage": 0
}

//set cartDetails to initial value
function initialize() {
    cartDetails.items = 0;
    cartDetails.total = 0;
}

const items = document.querySelector("#items");
const cardHeader = document.querySelector(".header");
const removeAllBtn = document.querySelector(".action");
const numOfItems = document.querySelector(".items");
const totAmount = document.querySelector(".total-amont");


function loadData(array) {
    array.forEach(function (iterator, i) {
        //load items
        const item = document.createElement("div");
        item.classList.add("item");

        const overlay = document.createElement("div");
        overlay.classList.add("overlay");

        const btnAdd = document.createElement("button");
        btnAdd.classList.add("add");
        btnAdd.innerText = "Add to Cart";

        btnAdd.addEventListener("click", function () {
            const index = shoppingCartItems.findIndex(object => object.title === iterator.title);
            if (index === -1) {
                shoppingCartItems.push(iterator);
            }
        });

        const ratingBar = document.createElement("div");
        ratingBar.classList.add("rating");
        for (let index = 1; index < 6; index++) {
            const ratings = iterator.rating;
            if (index <= ratings) {
                const star = document.createElement("span");
                star.classList.add("fa", "fa-star", "checked");
                ratingBar.appendChild(star);
            } else {
                const star = document.createElement("span");
                star.classList.add("fa", "fa-star");
                ratingBar.appendChild(star);
            }
        }

        overlay.appendChild(btnAdd);
        overlay.appendChild(ratingBar);

        const productImg = document.createElement("img");
        productImg.classList.add("item-image");
        productImg.src = iterator.image;

        const header = document.createElement("div");
        header.classList.add("heading");
        header.innerText = iterator.title;

        const discription = document.createElement("div");
        discription.classList.add("description");
        discription.innerText = iterator.discription;

        const price = document.createElement("div");
        price.classList.add("price");
        price.innerText = `$ ${iterator.price}`;

        item.appendChild(overlay);
        item.appendChild(productImg);
        item.appendChild(header);
        item.appendChild(discription);
        item.appendChild(price);

        items.appendChild(item);

    });
}

function prepareCart(array) {
    array.forEach(function (element, i) {
        const cartItem = document.createElement("div");
        cartItem.classList.add("cart-item");

        const imgBox = document.createElement("div");
        imgBox.classList.add("img-box");

        const prdctImg = document.createElement("img");
        prdctImg.classList.add("cart-item-img");
        prdctImg.src = element.image;
        prdctImg.alt = "image"
        imgBox.appendChild(prdctImg);

        const about = document.createElement("div");
        about.classList.add("about");

        const mainTitle = document.createElement("div");
        mainTitle.classList.add("main-title");
        mainTitle.innerText = element.title
        about.appendChild(mainTitle);

        const subDescription = document.createElement("div");
        subDescription.classList.add("sub");
        subDescription.innerText = element.discription.slice(0, 35) + "...";
        about.appendChild(subDescription);

        const counter = document.createElement("div");
        counter.classList.add("counter");

        const increment = document.createElement("div")
        increment.classList.add("inc")
        increment.innerText = "+";
        const count = document.createElement("div");
        count.classList.add("count");
        count.innerText = element.numOfItems;
        const decrement = document.createElement("div");
        decrement.classList.add("dec")
        decrement.innerText = "-";

        counter.append(decrement, count, increment);


        let size = null;
        if (element.hasSize) {
            size = document.createElement("div")
            size.classList.add("sizes");
            const label = document.createElement("label");
            label.htmlFor = "size";
            label.innerText = "Size:";
            const select = document.createElement("select");
            size.append(label, select);


            const sizes = ["Small", "Medium", "Large", "X-large", "XXL"];

            for (let index = 0; index < 5; index++) {
                const option = document.createElement("option");
                option.value = index + 1;
                option.innerText = sizes[index];
                select.appendChild(option);

            }

            select.addEventListener("change", function (event) {
                element.size = event.target.value;
                console.log(element.size);
            })
        }

        increment.addEventListener("click", function () {
            let items = parseInt(count.innerText);
            items = items + 1;
            count.innerText = items;
            element.numOfItems = items;
            cartDetails.total = cartDetails.total + element.price;
            totAmount.innerText = `$${cartDetails.total}`
        });

        decrement.addEventListener("click", function () {
            let items = parseInt(count.innerText);
            if (!(items <= 1)) {
                items = items - 1;
                count.innerText = items;
                element.numOfItems = items;
                cartDetails.total = cartDetails.total - element.price;
                totAmount.innerText = `$${cartDetails.total}`;
            }

        });

        const priceDiv = document.createElement("div");
        priceDiv.classList.add("prices");

        const amountDiv = document.createElement("div");
        amountDiv.classList.add("amount");
        amountDiv.innerText = `$ ${element.price}`;


        const removeItemBtn = document.createElement("div");
        removeItemBtn.classList.add("remove-item");
        const underline = document.createElement("u");
        underline.innerText = "Remove Item";
        removeItemBtn.appendChild(underline);

        removeItemBtn.addEventListener("click", function () {
            cartItem.remove();
            let items = parseInt(count.innerText);
            let totalPrice = element.price * items;
            cartDetails.total = cartDetails.total - totalPrice;
            totAmount.innerText = `$${cartDetails.total}`
            shoppingCartItems.splice(i, 1);
            numOfItems.innerText = `${shoppingCartItems.length} Items`;
        })

        //add price to total price and items to num of items
        cartDetails.total = cartDetails.total + (element.price * element.numOfItems);
        totAmount.innerText = cartDetails.total;

        cartDetails.items = cartDetails.items + 1;
        numOfItems.innerText = `${cartDetails.items} Items`;

        priceDiv.append(amountDiv, removeItemBtn);

        cartItem.append(imgBox, about, counter,);
        (element.hasSize ? cartItem.appendChild(size) : null);
        cartItem.appendChild(priceDiv);

        cardHeader.after(cartItem);

    });
}

// page loading
loadData(newArrival);
prepareCart(shoppingCartItems);

const shoppingCartBtn = document.querySelector("#cart");
const overlayLayer = document.querySelector(".main-overlay-inactive")
const cartCloseBtn = document.querySelector("#close");


//remove all items from cart
removeAllBtn.addEventListener("click", function () {
    if (!(shoppingCartItems.length === 0)) {
        let elem = document.querySelectorAll(".cart-item")
        elem.forEach(element => {
            element.remove();
        });
        shoppingCartItems.splice(0, shoppingCartItems.length);
        initialize();
        numOfItems.innerText = `${cartDetails.items} Items`;
        totAmount.innerText = `$${cartDetails.total}`;

        shoppingCartItems.forEach(element => {
            element.numOfItems = 1;
        });
    }
});


// open shopping cart
shoppingCartBtn.addEventListener("click", function (e) {
    overlayLayer.className = "main-overlay-active";
    prepareCart(shoppingCartItems);
    totAmount.innerText = `$${cartDetails.total}`;
});

//close shopping cart
cartCloseBtn.addEventListener("click", function () {
    overlayLayer.className = "main-overlay-inactive"
    let cartItems = document.querySelectorAll(".cart-item");
    cartItems.forEach(element => {
        element.remove();
    });
    initialize();
})

//select categories
const categories = document.querySelectorAll(".catogory");
categories.forEach(function (element, i) {
    if (i === 0) {
        element.addEventListener("click", function () {
            if (!(pageDetails.selectedPage === 0)) {
                console.log("new arrivals");
                let items = document.querySelectorAll(".item");
                items.forEach(node => { node.remove(); });
                loadData(newArrival);
                pageDetails.selectedPage = 0;
            }
        });
    } else if (i === 1) {
        element.addEventListener("click", function () {
            if (!(pageDetails.selectedPage === 1)) {
                console.log("sportswear");
                let items = document.querySelectorAll(".item");
                items.forEach(node => { node.remove(); });
                loadData(sportswear);
                pageDetails.selectedPage = 1;
            }
        });
    } else if (i === 2) {
        element.addEventListener("click", function () {
            if (!(pageDetails.selectedPage === 2)) {
                console.log("Eqipments");
                pageDetails.selectedPage = 2;
            }
        });
    } else if (i === 3) {
        element.addEventListener("click", function () {
            if (!(pageDetails.selectedPage === 3)) {
                console.log("teamsports");
                let items = document.querySelectorAll(".item");
                items.forEach(node => { node.remove(); });
                loadData(newArrival);
                pageDetails.selectedPage = 3;
            }
        });
    } else if (i === 4) {
        element.addEventListener("click", function () {
            if (!(pageDetails.selectedPage === 4)) {
                console.log("safety");
                let items = document.querySelectorAll(".item");
                items.forEach(node => { node.remove(); });
                loadData(newArrival);
                pageDetails.selectedPage = 4;
            }
        });
    }

});

//checkout button onClick
const checkoutBtn = document.querySelector("#proceed");
checkoutBtn.addEventListener("click", function () {
    if (shoppingCartItems.length === 0) {
        alert("No any Items in Cart");
    } else {
        localStorage.setItem('items', JSON.stringify(shoppingCartItems));
        window.location.href = "../HTML/Chekout.html";
    }
});

