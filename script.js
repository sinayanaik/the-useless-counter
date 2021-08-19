let number = 0;
const numberText = document.querySelector("h1");

function increase() {
    number += 1;
    numberText.textContent = number;
}

function decrease() {
    number -= 1;
    numberText.textContent = number;
}

function reset(){
    number = 0;
    numberText.textContent = number;
}