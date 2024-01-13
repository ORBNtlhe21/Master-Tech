"use strict"

// Global Variables 
let _name = document.querySelector("#nametxt");
let surname = document.querySelector("#surnametxt");
let email = document.querySelector("#email");
let message = document.querySelector("#exp");
let thankMessage = document.querySelector("#msgtxt");

// Button Variables
let btn = document.querySelector("#btn");
let clear = document.querySelector("#clear");

btn.addEventListener("click", function(){
    checkEntry();
    
    if(_name.value.length !== 0 && surname.value.length !== 0 && email.value.length === 0 && message.value.length === 0){
        thankMessage.innerHTML = "";
    }
    else{
        thankMessage.innerHTML = `Thank you very much ${_name.value}, We received your submission and We shall get back to you shortly`;
    }
});
clear.addEventListener("click", function(){
    _name.value = "";
    surname.value = "";
    email.value = "";
    message.value = "";
    thankMessage.innerHTML = "";

    _name.style.border = "2px solid blue";
    surname.style.border = "2px solid blue";
    email.style.border = "2px solid blue";
    message.style.border = "2px solid blue";
});

function checkEntry(){
    if(_name.value.length === 0){
        _name.style.border = "2px solid red"; 
    }
    else{
        _name.style.border = "2px solid blue";
    }

    if(surname.value.length === 0){
        surname.style.border = "2px solid red";
    }
    else{
        surname.style.border = "2px solid blue";
    }

    if(email.value.length === 0){
        email.style.border = "2px solid red";
    }
    else{
        email.style.border = "2px solid blue";
    }

    if(message.value.length === 0){
        message.style.border = "2px solid red";
    }
    else{
        message.style.border = "2px solid blue";
    }
}
