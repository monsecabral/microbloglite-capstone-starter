"use strict";

// buttons
const logoutButton = document.getElementById("logoutButton");
const submitButton = document.getElementById("submitButton");

window.onload = function () {
  console.log("hello");
  logoutButton.onclick = onClickedLogoutButton;
//   getAllUsers();
 submitButton.onclick = onClickedSubmitButton;
};

function onClickedLogoutButton() {
  logout();
};

function createPostForUser () {
    const loginToken = getLoginData();

    let postBody = {
        "text": document.getElementById("text").value,
    };

    const options = {
        method: "POST",
        body: JSON.stringify(postBody),
        headers: {
            "Content-type":
                "application/json; charset=UTF-8",
            Authorization: `Bearer ${loginToken.token}`,
        },
    };

    fetch("http://microbloglite.us-east-2.elasticbeanstalk.com/api/posts", options)
        .then(response => response.json())
        .then(data => {
            console.log(data);
        })
    
};

function onClickedSubmitButton () {
    console.log("submit");
    createPostForUser();
}