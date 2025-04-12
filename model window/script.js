"use strict";

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
//querySelector is uesd select only the first element
// querySelectorAll is used to select all the element with same class;
const closeModel = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

const openModel = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const btnsOpenModal = document.querySelectorAll(".show-modal");

for (let i = 0; i < btnsOpenModal.length; i++) {
  btnsOpenModal[i].addEventListener("click", openModel);
}

btnCloseModal.addEventListener("click", closeModel);
overlay.addEventListener("click", closeModel);
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModel();
    console.log("modal closed");
  }
});
