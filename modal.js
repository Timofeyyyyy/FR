let btn = document.getElementById("myBtn");
let btnP = document.getElementById("myBtnP");
let close = document.querySelector(".close");
let closePrem = document.querySelector(".close-prem");
let modal = document.querySelector(".modal");
let modalPrem = document.querySelector(".modal-prem");

btn.addEventListener("click", function () {
  modal.classList.toggle("active");
});
btnP.addEventListener("click", function () {
  modalPrem.classList.toggle("active");
});

close.addEventListener("click", function () {
  modal.classList.remove("active");
});
closePrem.addEventListener("click", function () {
  modalPrem.classList.remove("active");
});
