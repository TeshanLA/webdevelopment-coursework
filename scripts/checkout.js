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

if (orderSummary == null) {
    alert("Empty shoppin cart")
    document.querySelector("#sub-btn").disabled = true;
} else {
    createOrder(orderSummary);
    calculateTotal(stateOfValues.discount, stateOfValues.deliveryFee, stateOfValues.totalWithoutDisc, stateOfValues.deliveryMethod);

}



selected.addEventListener("change", function (e) {
    if (e.target.value === "SL") {
        countryImg.src = "../images/student-one/checkout/srilanka.png";
        calculateTotal(stateOfValues.discount, stateOfValues.deliveryFee, stateOfValues.totalWithoutDisc, stateOfValues.deliveryMethod);
    } else if (e.target.value === "IN") {
        countryImg.src = "../images/student-one/checkout/india.png";
        calculateTotal(4, 13, stateOfValues.totalWithoutDisc, "Air Shipping");
    } else if (e.target.value === "JP") {
        countryImg.src = "../images/student-one/checkout/japan.png";
        calculateTotal(9, 15, stateOfValues.totalWithoutDisc, "Air Shipping");
    } else if (e.target.value === "UK") {
        countryImg.src = "../images/student-one/checkout/uk.png";
        calculateTotal(8, 19, stateOfValues.totalWithoutDisc, "Air Shipping");
    } else {
        countryImg.src = "../images/student-one/checkout/united-states.png";
        calculateTotal(19, 20, stateOfValues.totalWithoutDisc, "Air Shipping");
    }
});

//forms
const billDetailsForm = document.querySelector("#bil-details");
const paymentDetails = document.querySelector("#payment-details");


//input validation
function validation() {
    let hasError = false;
    //regular exprression for check numbers only in input field
    const numbers = /^[0-9]+$/;
    const emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    const formBilDetails = document.getElementById("bil-details");
    const formContactDetails = document.getElementById("contact-details");
    const paymentDetails = document.getElementById("payment-details");

    //check input fields
    let fName = formBilDetails.elements['fname'].value;
    let errorFname = document.createElement("div");
    errorFname.classList.add("error");
    if (fName == "") {
        hasError = true;
        errorFname.innerText = "First-Name Required"
        document.querySelector("#fname").after(errorFname);
    }

    let lname = formBilDetails.elements['lname'].value;
    let errorLname = document.createElement("div");
    errorLname.classList.add("error");
    if (lname == "") {
        hasError = true;
        errorLname.innerText = "Last-Name Required"
        document.querySelector("#lname").after(errorLname);
    }

    let address = formBilDetails.elements['adress'].value;
    let errorAddress = document.createElement("div");
    errorAddress.classList.add("error");
    if (address == "") {
        hasError = true;
        errorAddress.innerText = "Address Required"
        document.querySelector("#address").after(errorAddress);
    }

    let city = formBilDetails.elements['city'].value;
    let errorCity = document.createElement("div");
    errorCity.classList.add("error");
    if (city == "") {
        hasError = true;
        errorCity.innerText = "City Required"
        document.querySelector("#city").after(errorCity);
    }

    let postalCode = formBilDetails.elements['postal'].value;
    let errorPostal = document.createElement("div");
    errorPostal.classList.add("error");
    if (postalCode == "") {
        hasError = true;
        errorPostal.innerText = "Postal Code Required"
        document.querySelector("#postal").after(errorPostal);
    } else if (postalCode.match(numbers) == null) {
        hasError = true;
        errorPostal.innerText = "Invalid Postal Code";
        document.querySelector("#postal").after(errorPostal);
    }

    let nameONCard = paymentDetails.elements['nOnCard'].value;
    let errorNameONCardNumber = document.createElement("div");
    errorNameONCardNumber.classList.add("error");
    if (nameONCard == "") {
        hasError = true;
        errorNameONCardNumber.innerText = "Card Holders Name Required";
        document.querySelector("#nOnCard").after(errorNameONCardNumber);
    }

    let cardNumber = paymentDetails.elements['cardNumber'].value;
    let errorCardNumber = document.createElement("div");
    errorCardNumber.classList.add("error");
    if (cardNumber == "") {
        hasError = true;
        errorCardNumber.innerText = "Card Number Required"
        document.querySelector("#cardNumber").after(errorCardNumber);
    } else if (cardNumber.match(numbers) == null) {
        hasError = true;
        errorCardNumber.innerText = "Invalid format of card number";
        document.querySelector("#cardNumber").after(errorCardNumber);
    }

    let expDate = paymentDetails.elements['expDate'].value;
    let errorExpDate = document.createElement("div");
    errorExpDate.classList.add("error");
    if (new Date(expDate) <= new Date()) {
        hasError = true;
        errorExpDate.innerText = "Card Expired"
        document.querySelector("#expDate").after(errorExpDate);
    }

    let cvv = paymentDetails.elements['cvv'].value;
    let errorCVV = document.createElement("div");
    errorCVV.classList.add("error");
    if (cvv == "") {
        hasError = true;
        errorCVV.innerText = "CVV Number Required"
        document.querySelector("#cvv").after(errorCVV);
    } else if (cvv.match(numbers) == null) {
        hasError = true;
        errorCVV.innerText = "Invalid format of CVV number";
        document.querySelector("#cvv").after(errorCVV);
    }

    let conNumber = formContactDetails.elements['contact'].value;
    let errorConNum = document.createElement("div");
    errorConNum.classList.add("error");
    if (conNumber == "") {
        hasError = true;
        errorConNum.innerText = "Contact Number Required";
        document.querySelector("#contact").after(errorConNum)
    }

    let email = formContactDetails.elements['email'].value;
    let errorEmail = document.createElement("div");
    errorEmail.classList.add("error");
    if (email.match(emailPattern) == null) {
        hasError = true;
        errorEmail.innerText = "Invalid Email Address";
        document.querySelector("#email").after(errorEmail)
    }



    if (!hasError) {
        alert("Payment succesfull");
        window.location.href = "../HTML/main.html";
        localStorage.clear();
    }


}

//submit on enter if cart is not empty
if (!(orderSummary == null)) {
    window.addEventListener("keyup", function (e) {
        e.preventDefault();
        if (e.key == "Enter") {
            let temp = document.querySelectorAll(".error");
            if (temp.length > 0) {
                temp.forEach(element => {
                    element.remove();
                })
            }
            validation();
        }
    });
}


//submit button
const submitBtn = document.querySelector("#sub-btn");
submitBtn.addEventListener("click", function () {
    let temp = document.querySelectorAll(".error");
    if (temp.length > 0) {
        temp.forEach(element => {
            element.remove();
        })
    }
    validation();
});

//cancle button
const cancleBtn = document.querySelector("#Cancel-btn");
cancleBtn.addEventListener("click", function (e) {
    localStorage.clear();
    window.location.href = "../HTML/products.html";
});