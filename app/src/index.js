
import Card from "./cards/Card.js";
import { turnCard, reverseCard } from "./cards/Card.js";

var newCard = new Card("Title", "Beispieltext");


function init() {
  initUI();
}

function initUI() {
  let addButton = document.querySelector(".button-new-card"),
    editTitleButton = document.querySelector(".header h2"),
    editTextButton = document.querySelector(".container p"),
    turnCardButton = document.querySelectorAll(".turn"),
    reverseCardButton = document.querySelectorAll(".reverse");

  addButton.addEventListener("click", createNewCard);
  editTitleButton.addEventListener("click", editTitle);
  editTextButton.addEventListener("click", editText);

  turnCardButton.forEach(function(turn, i) {
    turn.addEventListener("click", function handleClick() {
      let innerCard = turnCardButton[i].parentNode.parentNode;
      turnCard(innerCard);
    });
  });

  reverseCardButton.forEach(function(reverse, i) {
    reverse.addEventListener("click", function handleClick() {
      let innerCard = reverseCardButton[i].parentNode.parentNode;
      reverseCard(innerCard);
    });
  });

;


}


const appwrite = new Appwrite();

appwrite
    .setEndpoint('https://appwrite.software-engineering.education/v1') // Your API Endpoint
    .setProject('6206641b3bb533548645') // Your project ID
;

appwrite.account.createOAuth2Session('github');

promise.then(function (response) {
    console.log(response); // Success
}, function (error) {
    console.log(error); // Failure
});

appwrite
    .account.create('unique()', 'me@example.com', 'password', 'Jane Doe')
        .then(response => {
            console.log(response);
        }, error => {
            console.log(error);
        });

// Subscribe to files channel
appwrite.subscribe('files', response => {
    if(response.event === 'storage.files.create') {
        // Log when a new file is uploaded
        console.log(response.payload);
    }
});

function createNewCard() {
  newCard.addCard();
}

function editTitle() {
  newCard.editTitle();
}

function editText() {
  newCard.editText();
}



init();