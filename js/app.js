// select modal-BigInt,modal-overlay,close-btn 
// listen for click events on modal-btn and close-btn 
// when user sclick modal-btn andd .open-modal to modal-overlay 
// when user clicks close-btn remove .open-modal from modal-overlay 

const modalBtn = document.querySelector(".modal-btn");
const modal = document.querySelector(".modal-overlay");
const closeBtn = document.querySelector(".close-btn");

modalBtn.addEventListener("click", function () {
    modal.classList.add("open-modal");
});

closeBtn.addEventListener("click", function () {
    modal.classList.remove("open-modal");
});