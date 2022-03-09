import Card from "../resources/js/cards/Card.js";

function init() {
    console.log("### Starting MME Project ###");
    let addButton = document.querySelector(".button-new-card");
    addButton.addEventListener("click", function(){
        console.log("add new card");
        createNewCard();
    })
}

function createNewCard() {
    var myCard = new Card("Beispielitel", "Beispieltext");
    console.log("My Card has title: " + myCard.title + " and text: " + myCard.text);
    myCard.addCard();
}

init();