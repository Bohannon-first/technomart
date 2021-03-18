/* Переменные окна обратной связи */
const linkHelp = document.querySelector(".help-btn");
const modalFeedback = document.querySelector(".modal-feedback");
const feedbackClose = modalFeedback.querySelector(".feedback-close");
const feedbackName = modalFeedback.querySelector(".your-name");
const feedbackEmail = modalFeedback.querySelector(".your-email");
const feedbackForm = modalFeedback.querySelector(".write-to-us");

/* Переменные окна с картой */
const mapLink = document.querySelector(".contacts-link");
const modalMap = document.querySelector(".modal-map");
const mapClose = modalMap.querySelector(".map-close");

/* Переменные окна при нажатии кнопки "Купить" */
const btnBuys = document.querySelectorAll(".btn-buy");
const addProduct = document.querySelector(".modal-add-product");
const addProductClose = addProduct.querySelector(".add-product-close");

/* Окно обратной связи */
/* Проверка есть ли в браузере поддержка localStorage */
let isStorageSupport = true;
let storage = "";

try {
  storage = localStorage.getItem("name");
} catch (error) {
  isStorageSupport = false;
}

/* Вызов модального окна обратной связи */
linkHelp.addEventListener("click", function (evt) {
  evt.preventDefault();
  modalFeedback.classList.add("modal-show");
  if (storage) {
    feedbackName.value = storage;
    feedbackEmail.focus();
  } else {
    feedbackName.focus();
  }
});

/* Закрытие модального окна обратной связи */
feedbackClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  modalFeedback.classList.remove("modal-show");
  modalFeedback.classList.remove("modal-error");
});

/* Запись данных из полей "Ваше имя" и "Ваш e-mail" в localStorage. */
feedbackForm.addEventListener("submit", function (evt) {
  if (!feedbackName.value || !feedbackEmail.value) {
    evt.preventDefault();
    modalFeedback.classList.add("modal-error");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("name", feedbackName.value) && ("email", feedbackEmail.value);
    }
  }
})

/* Закрытие модального окна кнопкой Esc */
window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (modalFeedback.classList.contains("modal-show")) {
      evt.preventDefault();
      modalFeedback.classList.remove("modal-show");
      modalFeedback.classList.remove("modal-error");
    }
  }
});

/* Показ карты */
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

/* Модальное окно при нажатии кнопки "Купить" */
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



