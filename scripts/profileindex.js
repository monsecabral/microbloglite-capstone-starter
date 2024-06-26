"use strict";

// buttons
const logoutButton = document.getElementById("logoutButton");

window.onload = function () {
  console.log("hello");
  logoutButton.onclick = onClickedLogoutButton;
  getAllUsers();
};

function onClickedLogoutButton() {
  logout();
}

function createPostForUser () {
    const loginToken = getLoginData();

    let postBody = {
        "text": document.getElementById("createPost").value,
    }

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
    // not done yet
}