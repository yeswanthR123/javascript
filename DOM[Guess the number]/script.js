"use strict";

// DOM contains a complete webpage which can manipulated by the javascript

//console.log(document.querySelector(".message").textContent);

// DOM is not a part of javascript
// DOM is provided by browser API's
// javascript can interact with the API's

// document.querySelector(".message").textContent = "happy happy 😁";

// document.querySelector(".number").textContent = 11;
// document.querySelector(".score").textContent = 0;

// document.querySelector(".guess").value = 48;

// console.log(number, score);

// event listener is to perform a action when a iteraction take place in the page

//addEventListener(`event-name`,`function to be performed`)

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

let again = function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector(".score").textContent = score = 20;
  displayMessage("Start guessing...");
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
};

//function to display the message
const displayMessage = (message) =>
  (document.querySelector(".message").textContent = message);

const gameEngine = function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess);

  // no number entered
  if (!guess) {
    displayMessage("Please enter the Number ;)");
  }

  //if guess is correct
  else if (guess === secretNumber) {
    displayMessage("🥳 correct answer");
    document.querySelector("body").style.backgroundColor = "green";
    document.querySelector(".number").style.width = "30rem";
    if (highScore < score) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }
  }
  //whenthe guess is incorrect
  else {
    //if score turns 0
    if (score <= 1) {
      score = 0;
      document.querySelector("body").style.backgroundColor = "red";
      displayMessage("👻 loss the game");
      // guess is higher
    } else if (guess > secretNumber) {
      score--;
      displayMessage("📈 very high");
    }
    //if guess lower
    else if (guess < secretNumber) {
      score--;
      displayMessage("📉 very low");
    }
    document.querySelector(".score").textContent = score;
  }
};

document.querySelector(".check").addEventListener("click", gameEngine);
document.querySelector(".guess").addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    gameEngine();
  }
});
document.querySelector(".again").addEventListener("click", again);
