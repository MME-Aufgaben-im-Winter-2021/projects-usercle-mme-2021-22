import Card from "../resources/js/cards/Card.js";

function init() {
    initUI();
}

function initUI() {
    let addButton = document.querySelector(".button-new-card");
    addButton.addEventListener("click", createNewCard);
}

function createNewCard() {
    var myCard = new Card("Beispieltitel", "Beispieltext");
    myCard.addCard();
}

init();