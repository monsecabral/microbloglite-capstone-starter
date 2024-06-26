/* Posts Page JavaScript */

"use strict";

// fields

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

function getAllUsers() {
  // GET /api/users
  const loginData = getLoginData();
  const options = {
    method: "GET",
    headers: {
      Authorization: `Bearer ${loginData.token}`,
    },
  };

  fetch("http://microbloglite.us-east-2.elasticbeanstalk.com/api/posts", options)
  
  .then (response=>response.json())
  .then (data=>{
      console.log(data);
      for (let userData of data){
        createCard("card-container", "https://picsum.photos/200/300", "imageAlt", userData._id, userData.text, userData.createdAt)
        }
    })
}

// card

function createCard(imageSrc, imageAlt, cardTitle, cardText, lastUpdated) {
    // Create the card div
    const card = document.createElement('div');
    card.className = 'card mb-3';
  
    // Create the image element
    const img = document.createElement('img');
    img.src = imageSrc;
    img.className = 'card-img-top';
    img.alt = imageAlt;
  
    // Create the card body div
    const cardBody = document.createElement('div');
    cardBody.className = 'card-body';
  
    // Create the card title element
    const title = document.createElement('h5');
    title.className = 'card-title';
    title.textContent = cardTitle;
  
    // Create the card text element
    const text = document.createElement('p');
    text.className = 'card-text';
    text.textContent = cardText;
  
    // Create the last updated text element
    const smallText = document.createElement('p');
    smallText.className = 'card-text';
    const small = document.createElement('small');
    small.className = 'text-body-secondary';
    small.textContent = `Last updated ${lastUpdated}`;
    smallText.appendChild(small);
  
    // Append the elements to the card body
    cardBody.appendChild(title);
    cardBody.appendChild(text);
    cardBody.appendChild(smallText);
  
    // Append the image and card body to the card
    card.appendChild(img);
    card.appendChild(cardBody);
  
    // Append the card to the container (assuming you have a container with id 'card-container')
    function appendToCardContainter(card) {
        const container = document.getElementById('card-container');
        container.appendChild(card);
  }

  const newCard = createCard(cardTitle, cardText);
  appendToCardContainter(newCard);
}
  
  // Example usage
//   createCard('https://via.placeholder.com/150', 'Card image', 'Card title', 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.', '3 mins ago');