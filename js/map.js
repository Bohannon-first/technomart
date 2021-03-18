const mapLink = document.querySelector(".contacts-link");
const modalMap = document.querySelector(".modal-map");
const mapClose = modalMap.querySelector(".map-close");

/* Вызов карты на экран */
mapLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  modalMap.classList.add("modal-show");
});

/* Закрытие карты */
mapClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  modalMap.classList.remove("modal-show");
});

/* Закрытие карты по кнопке Esc */
window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (modalMap.classList.contains("modal-show")) {
      evt.preventDefault();
      modalMap.classList.remove("modal-show");
    }
  }
});
