"use strict";

const player_0 = {
  scoreE: document.querySelector("#score--0"),
  score: 0,
  currScore: 0,
  currScoreE: document.getElementById("current--0"),
  player: document.querySelector(".player--0"),
  active: true,
};

const player_1 = {
  scoreE: document.querySelector("#score--1"),
  score: 0,
  currScoreE: document.getElementById("current--1"),
  currScore: 0,
  player: document.querySelector(".player--1"),
  active: false,
};
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");
const btnNew = document.querySelector(".btn--new");

//reset the score
player_0.scoreE.textContent = 0;
player_1.scoreE.textContent = 0;

let dice = document.querySelector(".dice");

//game not started hidding the dice
dice.classList.add("hidden");

//to generate random number
const rand = function () {
  return Math.trunc(Math.random() * 6) + 1;
};

//to find the active player
const engine = function () {
  if (player_0.active) {
    return player_0;
  } else {
    return player_1;
  }
};

//classList.toggle("hidden") -> this "toggle" function in classList will remove if the class present else add it to the classList
//to swtich active player
const change = function () {
  if (player_0.active === true) {
    player_0.active = false;
    player_0.player.classList.remove("player--active");
    player_1.player.classList.add("player--active");
    player_1.active = true;
    player_0.currScore = 0;
    player_0.currScoreE.textContent = 0;
  } else {
    player_1.active = false;
    player_1.player.classList.remove("player--active");
    player_0.player.classList.add("player--active");
    player_0.active = true;
    player_1.currScore = 0;
    player_1.currScoreE.textContent = 0;
  }
};

//when the roll button press
const roll = function () {
  const player = engine();
  const n = rand();
  console.log(n);
  //dice show
  dice.classList.remove("hidden");
  dice.src = `dice-${n}.png`;

  if (n != 1) {
    player.currScore += n;
    player.currScoreE.textContent = player.currScore;
  } else {
    change();
  }
};

//Roll
btnRoll.addEventListener("click", roll);

//hold
btnHold.addEventListener("click", function () {
  const player = engine();
  player.score += player.currScore;
  player.scoreE.textContent = player.score;
  if (player.score >= 20) {
    //game finish
    player.player.classList.add("player--winner");
    btnRoll.classList.add("hidden");
    btnHold.classList.add("hidden");
    dice.classList.add("hidden");
  }
  change();
});

//new game
btnNew.addEventListener("click", function () {
  const y = engine();
  y.player.classList.remove("player--active");
  //resetting player 0
  player_0.active = true;
  player_0.player.classList.add("player--active");
  player_0.score = 0;
  player_0.currScore = 0;
  player_0.scoreE.textContent = 0;
  player_0.currScoreE.textContent = 0;
  //resetting player 1
  player_1.active = false;
  player_1.score = 0;
  player_1.currScore = 0;
  player_1.scoreE.textContent = 0;
  player_1.currScoreE.textContent = 0;

  // if score reached enabling the roll button and removing the player--winner class from the player
  player_0.player.classList.remove("player--winner");
  player_1.player.classList.remove("player--winner");
  btnRoll.classList.remove("hidden");
  btnHold.classList.remove("hidden");
});
