//selecting  elements
const start_button = document.querySelector(".start_button button");
const infor_box = document.querySelector(".infoBox");

// When start Quiz button clicked
start_button.onclick = () => {
    infor_box.classList.add("activeInfo");
}
//selecting  elements
const exit_button = infor_box.querySelector(".buttons .quit");

// When exit Quiz button clicked
exit_button.onclick = () => {
    infor_box.classList.remove("activeInfo");
}
//selecting  elements
const continue_button = infor_box.querySelector(".buttons .restart");
const q_box = document.querySelector(".quizBox");

//  continue  button clicked
continue_button.onclick = () => {
    infor_box.classList.remove("activeInfo");
    q_box.classList.add("activeQuiz");
    showQs(0);
    qCounter(1);
    startTime(6);
    startTimeLine(0);
}
//selecting elements
const resultbox = document.querySelector(".resultBox");
const optionlist = document.querySelector(".option_list");
const timeLine = document.querySelector("header .time_line");
const textTime = document.querySelector(".timer .time_left_txt");
const countTime = document.querySelector(".timer .timer_sec");
const restartQuiz = resultbox.querySelector(".buttons .restart");
const quitQuiz = resultbox.querySelector(".buttons .quit");

let timingValue = 6;
let question_count = 0;
let question_number = 1;
let uScore = 0;
let counter;
let countLine;
let widthVal = 0;


//When restart button clicked
restartQuiz.onclick = () => {
    q_box.classList.add("activeQuiz");
    resultbox.classList.remove("activeResult");
    timingValue = 6;
    question_count = 0;
    question_number = 1;
    uScore = 0;
    widthVal = 0;
    showQs(question_count);
    qCounter(question_number);
    clearInterval(counter);
    clearInterval(countLine);
    startTime(timingValue);
    startTimeLine(widthVal);
    textTime.textContent = "Time Left";
}

// When quit Quiz button clicked
quitQuiz.onclick = () => {
    window.location.reload();
}

const next_button = document.querySelector("footer .next_btn");
const bottomQcounter = document.querySelector("footer .total_que");

// When Next Que button clicked
next_button.onclick = () => {
    if (question_count < questions.length - 1) {
        question_count++;
        question_number++;
        showQs(question_count);
        qCounter(question_number);
        clearInterval(counter);
        clearInterval(countLine);
        startTime(timingValue);
        startTimeLine(widthVal);
        textTime.textContent = "Time Left";
        next_button.classList.remove("show");
    } else {
        clearInterval(counter);
        clearInterval(countLine);
        showResult();
    }
}

// showing questions and options 
function showQs(index) {
    const que_text = document.querySelector(".que_text");

    let q_tag = '<span>' + questions[index].numb + ". " + questions[index].question + '</span>';
    let optionTag = '<div class="option"><span>' + questions[index].options[0] + '</span></div>'
        + '<div class="option"><span>' + questions[index].options[1] + '</span></div>'
        + '<div class="option"><span>' + questions[index].options[2] + '</span></div>'
        + '<div class="option"><span>' + questions[index].options[3] + '</span></div>';
    que_text.innerHTML = q_tag;
    optionlist.innerHTML = optionTag;

    const option = optionlist.querySelectorAll(".option");

    // setTING onclick attribute
    for (i = 0; i < option.length; i++) {
        option[i].setAttribute("onclick", "optionSelected(this)");
    }
}
// creating the new div tags for TICK & CROSS icons
let tickIcon = '<div class="icon tick"><i class="fas fa-check"></i></div>';
let crossIcon = '<div class="icon cross"><i class="fas fa-times"></i></div>';

//When user clicked on option
function optionSelected(answer) {
    clearInterval(counter);
    clearInterval(countLine);
    let userAnswer = answer.textContent;
    let correctAnswer = questions[question_count].answer;
    const all_Options = optionlist.children.length;

    if (userAnswer == correctAnswer) {
        uScore += 1;
        answer.classList.add("correct");
        answer.insertAdjacentHTML("beforeend", tickIcon);
        console.log("Correct Answer");
        console.log("Your correct answers = " + uScore);
    } else {
        answer.classList.add("incorrect");
        answer.insertAdjacentHTML("beforeend", crossIcon);
        console.log("Wrong Answer");

        for (i = 0; i < all_Options; i++) {
            if (optionlist.children[i].textContent == correctAnswer) {
                optionlist.children[i].setAttribute("class", "option correct");
                optionlist.children[i].insertAdjacentHTML("beforeend", tickIcon);
                console.log("Auto selected correct answer.");
            }
        }
    }
    for (i = 0; i < all_Options; i++) {
        optionlist.children[i].classList.add("disabled");
    }
    next_button.classList.add("show");
}

function showResult() {
    infor_box.classList.remove("activeInfo");
    q_box.classList.remove("activeQuiz");
    resultbox.classList.add("activeResult");
    const score_Text = resultbox.querySelector(".score_text");
    if (uScore > 8) {

        let scoreTag = '<span> Congrats! 🎊😍🎉 , You got <p>' + uScore + '</p> out of <p>' + questions.length + '</p></span>';
        score_Text.innerHTML = scoreTag;
    }
    else if (uScore > 5) {
        let scoreTag = '<span> Nice 😎 , You got <p>' + uScore + '</p> out of <p>' + questions.length + '</p></span>';
        score_Text.innerHTML = scoreTag;
    }
    else {
        let scoreTag = '<span> Sorry 😐 , You got only <p>' + uScore + '</p> out of <p>' + questions.length + '</p> Try Again</span>';
        score_Text.innerHTML = scoreTag;
    }
}

function startTime(time) {
    counter = setInterval(timer, 1000);
    function timer() {
        countTime.textContent = time;
        time--;
        if (time < 9) {
            let addZero = countTime.textContent;
            countTime.textContent = "0" + addZero;
        }
        if (time < 0) {
            clearInterval(counter);
            textTime.textContent = "Time Off";
            const allOptions = optionlist.children.length;
            let correcAns = questions[question_count].answer;
            for (i = 0; i < allOptions; i++) {
                if (optionlist.children[i].textContent == correcAns) {
                    optionlist.children[i].setAttribute("class", "option correct");
                    optionlist.children[i].insertAdjacentHTML("beforeend", tickIcon);
                    console.log("Time Off: Auto selected correct answer.");
                }
            }
            for (i = 0; i < allOptions; i++) {
                optionlist.children[i].classList.add("disabled");
            }
            next_button.classList.add("show");
        }
    }
}

function startTimeLine(time) {
    countLine = setInterval(timer, 29);
    function timer() {
        time += 1;
        timeLine.style.width = time + "px";
        if (time > 549) {
            clearInterval(countLine);
        }
    }
}

function qCounter(index) {

    let totalQueCounTag = '<span><p>' + index + '</p> of <p>' + questions.length + '</p> Questions</span>';
    bottomQcounter.innerHTML = totalQueCounTag;
}

var video = document.getElementById("myVideo");
var btn = document.getElementById("start_button");


function myFun() {
    if (video.paused) {
        video.play();
        btn.innerHTML = "Pause";
    } else {
        video.pause();
        btn.innerHTML = "Play";
    }
}
