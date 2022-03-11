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
}

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