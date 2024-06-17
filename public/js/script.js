const header = document.querySelector("header");

window.addEventListener ("scroll", function() {
    header.classList.toggle ("sticky", window.scrollY > 0);
});

const dialog = document.querySelector("dialog");
const dialog2 = document.querySelector(".modal-box2");
const showButton = document.querySelector(".TC-dailogue");
const showPP = document.querySelector(".PP-dailogue"); 
const closeButton = document.querySelector("dialog .close-btn");
const closeButton2 = document.querySelector(".modal-box2 .close-btn");

showPP.addEventListener("click", (event) => {
  event.preventDefault(); // Prevent default link behavior
  dialog2.showModal();
});

// "Show the dialog" button opens the dialog modally
showButton.addEventListener("click", (event) => {
  event.preventDefault(); // Prevent default link behavior
  dialog.showModal();
});



// "Close" button closes the dialog
closeButton.addEventListener("click", () => {
  dialog.close();
});
closeButton2.addEventListener("click", () => {
  dialog2.close();
});