import { Observable, Event } from "../utils/Observer.js";

function turnCard(el) {
    let innerCard = el;
    innerCard.classList.add("card-inner-turn");
}

function reverseCard(el) {
    let innerCard = el;
    innerCard.classList.remove("card-inner-turn");
}

class Card {

    constructor(title, text){
        this.title = title;
        this.text = text;
    }

    addCard() {
        let temp = document.getElementById("box-template");
        let clone = temp.content.cloneNode(true);

        clone.querySelector(".header h2").innerHTML = this.title;
        clone.querySelector(".container p").innerHTML = this.text;

        document.querySelector(".cards").appendChild(clone);
    }

    editTitle() {
        let currentTitle = document.querySelector(".header h2");
        currentTitle.style.display = "none";

        let titleInput = document.querySelector(".title-input");
        titleInput.style.display = "block";

        document.querySelector(".title-input").addEventListener("keyup", function(event) {
            if (event.keyCode === 13) {
                event.preventDefault();
                let inputString = titleInput.value;
                currentTitle.innerHTML = inputString;
                titleInput.style.display = "none";
                currentTitle.style.display = "block";
            }
        });
    }

    editText() {
        let currentText = document.querySelector(".container p");
        currentText.style.display = "none";

        let textInput = document.querySelector(".text-input");
        textInput.style.display = "block";

        document.querySelector(".text-input").addEventListener("keyup", function(event) {
            if (event.keyCode === 13) {
                event.preventDefault();
                let inputString = textInput.value;
                currentText.innerHTML = inputString;
                textInput.style.display = "none";
                currentText.style.display = "block";
            }
        });
    }

}

export default Card;

export { turnCard, reverseCard };