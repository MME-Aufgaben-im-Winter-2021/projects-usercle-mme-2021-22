function turnCard(el) {
  let innerCard = el;
  innerCard.classList.add("card-inner-turn");
}

function reverseCard(el) {
  let innerCard = el;
  innerCard.classList.remove("card-inner-turn");
}

class Card {

  constructor(title, text) {
    this.title = title;
    this.text = text;
  }

  addCard() {
    let temp = document.getElementById("box-template"),
      clone = temp.content.cloneNode(true);

    clone.querySelector(".header h2").innerHTML = this.title;
    clone.querySelector(".container p").innerHTML = this.text;

    document.querySelector(".cards").appendChild(clone);
  }

  editTitle() {
    let currentTitle = document.querySelector(".header h2"),
      titleInput = document.querySelector(".title-input");

    currentTitle.style.display = "none";
    titleInput.style.display = "block";

    document.querySelector(".title-input").addEventListener("keyup", function(
      event) {
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
    let currentText = document.querySelector(".container p"),
      textInput = document.querySelector(".text-input");

    currentText.style.display = "none";
    textInput.style.display = "block";

    document.querySelector(".text-input").addEventListener("keyup", function(
      event) {
      if (event.keyCode === KeyboardEvent.DOM_VK_RETURN) {
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