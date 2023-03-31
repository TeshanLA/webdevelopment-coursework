setTimeout(function () {
    let subDisc = document.querySelector(".sub-discription");
    subDisc.classList.replace("sub-discription", "sub-discription-active")
}, 1800);


setTimeout(function () {
    let temp = document.querySelector(".image-cont");
    temp.classList.replace("image-cont", "image-cont-up")
}, 1300);

setTimeout(function () {
    let welcome = document.querySelector(".welcome");
    welcome.classList.replace("welcome", "welcome-active")
}, 5200);

setTimeout(function () {
    let header = document.querySelector(".header");
    header.classList.replace("header", "header-active")
}, 5500);


const students = document.querySelectorAll(".student");
students.forEach(function (element, index) {
    setTimeout(function () {
        element.classList.replace("student", "student-active")
    }, (5600 + index * 300));
});

//navigate to home
setTimeout(() => {
    window.location.href = "../HTML/main.html";
}, 7200);


