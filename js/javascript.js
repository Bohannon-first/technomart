/* Показ окна обратной связи */
const modalFeedback = document.querySelector(".modal-feedback");

/* Проверка на наличие окна обратной связи на странице */
if (modalFeedback) {
  const linkHelp = document.querySelector(".help-btn");
  const feedbackClose = modalFeedback.querySelector(".feedback-close");
  const feedbackName = modalFeedback.querySelector(".your-name");
  const feedbackEmail = modalFeedback.querySelector(".your-email");
  // const feedbackForm = modalFeedback.querySelector(".write-to-us");
  const btnSend = modalFeedback.querySelector(".btn-send-letter");

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

  /* Запись данных из полей "Ваше имя" и "Ваш e-mail" в localStorage. */
  btnSend.addEventListener("click", function (evt) {
    if (!feedbackName.value || !feedbackEmail.value) {
      evt.preventDefault();
      modalFeedback.classList.add("modal-error");
    } else {
      if (isStorageSupport) {
        localStorage.setItem("name", feedbackName.value) && ("email", feedbackEmail.value);
      }
    }
  });

  /* Закрытие модального окна обратной связи */
  feedbackClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    modalFeedback.classList.remove("modal-show");
    modalFeedback.classList.remove("modal-error");
  });

  /* Закрытие модального окна обратной связи кнопкой Esc */
  window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      if (modalFeedback.classList.contains("modal-show")) {
        evt.preventDefault();
        modalFeedback.classList.remove("modal-show");
        modalFeedback.classList.remove("modal-error");
      }
    }
  });
}

/* Показ карты */
const modalMap = document.querySelector(".modal-map");

/* Проверка на наличие карты на странице */
if (modalMap) {
  const mapLink = document.querySelector(".contacts-link");
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
}

/* Показ модального окна при нажатии кнопки "Купить" */
const addProduct = document.querySelector(".modal-add-product");

/* Проверка на наличие модального окна на странице */
if (addProduct) {
  const btnBuys = document.querySelectorAll(".btn-buy");
  const addProductClose = addProduct.querySelector(".add-product-close");

  /* Цикл, в ходе которого каждому элементу навешивается обработчик события "клик" */
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
}


