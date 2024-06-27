"use strict";


// fields
const fullNameField = document.getElementById("fullNameField");
const usernameField = document.getElementById("usernameField");
const passwordField = document.getElementById("passwordField");

// buttons
const createAccountButton = document.getElementById("createAccountButton");

window.onload = function (){
    createAccountButton.onclick = onClickedCreateAccountButton;
};

function onClickedCreateAccountButton (){
    createUser()
    .then(response => {
        if(response.ok){
            window.location.href = "login.html"; //redirect to login page once the user account has been created.
        }else{
            return response.json().then(data => {
                // https://stackoverflow.com/questions/9156176/what-is-the-difference-between-throw-new-error-and-throw-someobject
                throw new Error(data.message);
            })
        }
    })
    .catch(error => {
        console.log(error);
        console.error("Cannot create user Account", error);
        alert("Error creating account " + error.message); //show error to the user
    })

};

function createUser (){
    let userBodyData = {        
        username: document.getElementById("usernameField").value,
        fullName: document.getElementById("fullNameField").value,
        password: document.getElementById("passwordField").value, 
    }
    return fetch ("http://microbloglite.us-east-2.elasticbeanstalk.com/api/users",{
        method: "POST",
        body: JSON.stringify(userBodyData), headers:{"content-type": "application/JSON; charset=UTF-8"}
    })
};