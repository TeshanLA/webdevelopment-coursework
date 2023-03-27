//change country flag and discountrate on select
const selected = document.querySelector("#country");
const countryImg = document.querySelector(".country-img");

const orderSummary = JSON.parse(localStorage.getItem("items"));

const stateOfValues = {
    "discount": 10,
    "deliveryFee": 10,
    "totalWithoutDisc": 0,
    "deliveryMethod": "Express"
};

//create order summery
function createOrder(order) {

    //calculate total
    let total = 0;

    order.forEach(element => {
        const itmImage = document.createElement("img");
        itmImage.classList.add("item-container-image");
        itmImage.src = element.image;

        const itemDetail = document.createElement("div");
        itemDetail.classList.add("item-container-details");

        const itemHeader = document.createElement("div");
        itemHeader.classList.add("container-detail-header");
        itemHeader.innerText = element.title;

        const itmAttrbutes = document.createElement("div");
        itmAttrbutes.classList.add("container-detail-attr");

        if (element.hasSize) {
            const attrKey = document.createElement("div");
            attrKey.classList.add("attr-key");
            attrKey.innerText = "Size";
            const attrVal = document.createElement("div");
            attrVal.classList.add("attr-value");

            let temp = "1";

            switch (element.size) {
                case "1":
                    temp = "Small"
                    break;
                case "2":
                    temp = "Medium"
                    break
                case "3":
                    temp = "Large"
                    break
                case "4":
                    temp = "XL"
                    break
                case "5":
                    temp = "XXL"
                    break

                default:
                    break;
            }

            attrVal.innerText = temp;
            itmAttrbutes.append(attrKey, attrVal);
        }

        const wrapperDiv = document.createElement("div");
        const itmPrice = document.createElement("div");
        itmPrice.classList.add("item-price");
        itmPrice.innerText = `$${element.price} `;

        const numOfItms = document.createElement("div");
        numOfItms.classList.add("num-of-items")
        numOfItms.innerText = `× 0${element.numOfItems}`;

        wrapperDiv.append(itmPrice, numOfItms);
        itemDetail.append(itemHeader, itmAttrbutes, wrapperDiv);

        const itemContainer = document.createElement("div");
        itemContainer.classList.add("item-container");
        itemContainer.append(itmImage, itemDetail);

        document.querySelector("#margin").insertAdjacentElement("afterend", itemContainer);
        itemContainer.insertAdjacentElement("afterend", document.createElement("hr"));

        total = total + (element.price * element.numOfItems);
    });

    stateOfValues.totalWithoutDisc = total;
};

function calculateTotal(discount, fee, total, method) {
    const costs = document.querySelectorAll(".amount");
    costs[0].innerText = `$${fee}`;
    costs[1].innerText = `-$${discount}`;

    document.querySelector("#delivery-method").innerText = method;
    let tempTot = total + fee - discount;

    document.querySelector("#total-amount").innerText = `$${tempTot}`;

}

createOrder(orderSummary);
calculateTotal(stateOfValues.discount, stateOfValues.deliveryFee, stateOfValues.totalWithoutDisc, stateOfValues.deliveryMethod);



selected.addEventListener("change", function (e) {
    if (e.target.value === "SL") {
        countryImg.src = "../images/checkout/srilanka.png";
        calculateTotal(stateOfValues.discount, stateOfValues.deliveryFee, stateOfValues.totalWithoutDisc, stateOfValues.deliveryMethod);
    } else if (e.target.value === "IN") {
        countryImg.src = "../images/checkout/india.png";
        calculateTotal(14, 15, stateOfValues.totalWithoutDisc, "Air Shipping");
    } else if (e.target.value === "JP") {
        countryImg.src = "../images/checkout/japan.png";
        calculateTotal(17, 20, stateOfValues.totalWithoutDisc, "Air Shipping");
    } else if (e.target.value === "UK") {
        countryImg.src = "../images/checkout/uk.png";
        calculateTotal(20, 25, stateOfValues.totalWithoutDisc, "Air Shipping");
    } else {
        countryImg.src = "../images/checkout/united-states.png";
        calculateTotal(19, 25, stateOfValues.totalWithoutDisc, "Air Shipping");
    }
});

//forms
const billDetailsForm = document.querySelector("#bil-details");
const paymentDetails = document.querySelector("#payment-details");


//submit button
const submitBtn = document.querySelector("#sub-btn");

submitBtn.addEventListener("click", function (e) {

});

//cancle button
const cancleBtn = document.querySelector("#Cancel-btn");
cancleBtn.addEventListener("click", function (e) {
    localStorage.clear();
    window.location.href = "../HTML/products.html";
});