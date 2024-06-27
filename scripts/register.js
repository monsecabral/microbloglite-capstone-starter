"use strict";


// fields
const fullNameField = document.getElementById("fullNameField");
const usernameField = document.getElementById("usernameField");
const passwordField = document.getElementById("passwordField");

// buttons
const createAccountButton = document.getElementById("createAccountButton");


console.log("hello");


window.onload = function (){
    createAccountButton.onclick = onClickedCreateAccountButton;

};

function onClickedCreateAccountButton (){
    console.log("test button");
    createUser();
};

function createUser (){
    let userBodyData = {        
        username: document.getElementById("usernameField").value,
        fullName: document.getElementById("fullNameField").value,
        password: document.getElementById("passwordField").value, 
    }

    fetch ("http://microbloglite.us-east-2.elasticbeanstalk.com/api/users",{
        method: "POST",
        body: JSON.stringify(userBodyData), headers:{"content-type": "application/JSON; charset=UTF-8"}
    })

    .then (response=>response.json())
    .then (data=>{
        console.log(data);
    })
};