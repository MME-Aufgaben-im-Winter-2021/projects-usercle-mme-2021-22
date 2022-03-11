import Card from "../resources/js/cards/Card.js";
import { turnCard } from "../resources/js/cards/Card.js";

function init() {
    initUI();
}

function initUI() {
    let addButton = document.querySelector(".button-new-card");
    addButton.addEventListener("click", createNewCard);

    let turnCardButton = document.querySelector(".button-turn-card");
    turnCardButton.addEventListener("click", turnCard);
}

function createNewCard() {
    var newCard = new Card("Beispieltitel", "Beispieltext");
    newCard.addCard();    
}

init();