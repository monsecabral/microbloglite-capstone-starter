"use strict";

// buttons
// console.log("hide there");
// const apiBaseUrl = "http://microbloglite.us-east-2.elasticbeanstalk.com"
const logoutButton = document.getElementById("logoutButton");
const submitButton = document.getElementById("submitButton");
const textbox = document.getElementById("text");

window.onload = function () {
//   console.log("hello");
  logoutButton.onclick = onClickedLogoutButton;
//   getAllUsers();
 submitButton.onclick = onClickedSubmitButton;
};

function onClickedLogoutButton() {
  logout();
};


function createPostForUser () {
    const loginToken = getLoginData();
    console.log("loginToken")
    console.log(loginToken);

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

    return fetch("http://microbloglite.us-east-2.elasticbeanstalk.com/api/posts", options)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            return data // returning data to be used in the redirect function
        })
};

function onClickedSubmitButton () {
    console.log("submit");
    createPostForUser().then(() =>{
        window.location.href = "postsIndex.html"; //this should redirect to the post after it has been created.
    });
    console.log("after submit");
};