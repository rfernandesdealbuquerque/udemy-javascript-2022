const btnsToShowModal = document.querySelectorAll(".btn-modal");
const modal = document.querySelector(".modal");
const hidden = document.querySelector(".hidden");
const btnCloseModal = document.querySelector(".btn-close");

const appearModal = function () {
  modal.classList.remove("hidden");
};

const closeModal = function () {
  modal.classList.add("hidden");
};

for (let i = 0; i < btnsToShowModal.length; i++) {
  btnsToShowModal[i].addEventListener("click", appearModal);
}

btnCloseModal.addEventListener("click", closeModal);
console.log(modal.classList);
