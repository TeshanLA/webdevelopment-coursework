function validation(frm){
    let count = 0;
    // checking if the radio button is checked
    for ( let i = 0; i < frm.length; i++ ){
        if(frm[i].checked){
            Value = frm[i].value;
            count+=1;
        }
    }
    // checking if first name field is filled
    if (frm.firstnames.value == "") {
        alert("please enter your first name.")
    }
    // checing if the last name field is filled
    else if (frm.lastnames.value == ""){
        alert("please enter your last name.")
    }
    // checking if the email field is filled
    else if(frm.email.value == ""){
        alert("please enter your email.")
    }
    else if (count==0){
        alert("please select a subject")
    }
    // checking if the text area is filled
    else if (frm.details.value == ""){
        alert("Breif on your selected subject.")
    }
    else{
        displayChangesToBrief(frm);
    }
}
function displayChangesToBrief(frm){
    let init = document.getElementById("q_form");
    let det = document.getElementById("brief");
    init.style["display"] = "none"; //changing the display of form to none
    det.style["display"] = "block"; //changing the display of brief to none
    document.getElementById("FIRSTNAME").innerHTML = frm.firstnames.value;
    document.getElementById("LASTNAME").innerHTML = frm.lastnames.value;
    document.getElementById("EMAIL").innerHTML = frm.email.value;
    document.getElementById("SUBJECT").innerHTML = Value;
    document.getElementById("DETAILS").innerHTML = frm.details.value;
}
function displayChangesToForm(){
    let init = document.getElementById("q_form");
    let det = document.getElementById("brief");
    init.style["display"] = "block"; //changing the display of form to block
    det.style["display"] = "none"; //changing the display of form to none
}
