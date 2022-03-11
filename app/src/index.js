import Card from "../resources/js/cards/Card.js";
import { turnCard } from "../resources/js/cards/Card.js";

var newCard = new Card("Title", "Beispieltext");

function init() {
    initUI();
}

function initUI() {
    let addButton = document.querySelector(".button-new-card");
    addButton.addEventListener("click", createNewCard);

    let editTitleButton = document.querySelector(".header h2");
    editTitleButton.addEventListener("click", editTitle);

    let editTextButton = document.querySelector(".container p");
    editTextButton.addEventListener("click", editText);

    let turnCardButton = document.querySelectorAll(".turn");
    turnCardButton.forEach(function (turn, i) {
        turn.addEventListener('click', function handleClick() {
            let innerCard = turnCardButton[i].parentNode.parentNode;
            turnCard(innerCard);
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