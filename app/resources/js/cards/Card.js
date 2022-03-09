import { Observable, Event } from "../utils/Observer.js";

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

}

export default Card;