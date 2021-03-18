const btnBuys = document.querySelectorAll(".btn-buy");
const addProduct = document.querySelector(".modal-add-product");
const addProductClose = addProduct.querySelector(".add-product-close");

/* Вызов модального окна при нажатии кнопки "Купить" */
for (let btnBuy of btnBuys) {
  btnBuy.addEventListener("click", function (evt) {
    evt.preventDefault();
    addProduct.classList.add("modal-show");
  })
};

/* Закрытие модального окна */
addProductClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  addProduct.classList.remove("modal-show");
});

/* Закрытие модального окна по кнопке Esc */
window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (addProduct.classList.contains("modal-show")) {
      evt.preventDefault();
      addProduct.classList.remove("modal-show");
    }
  }
});
