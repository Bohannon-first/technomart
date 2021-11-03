/* Показ окна обратной связи */
const modalFeedback = document.querySelector(".modal-feedback");

/* Проверка на наличие окна обратной связи на странице */
if (modalFeedback) {
  const linkHelp = document.querySelector(".help-btn");
  const feedbackClose = modalFeedback.querySelector(".feedback-close");
  const feedbackName = modalFeedback.querySelector(".your-name");
  const feedbackEmail = modalFeedback.querySelector(".your-email");
  const writeHere = modalFeedback.querySelector(".write-here");
  const btnSend = modalFeedback.querySelector(".btn-send-letter");
  const modalInputs = modalFeedback.querySelectorAll(".modal-input");

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
    writeHere.value = "";
    document.body.style.overflow = "hidden"; // Блокируется прокрутка
    if (storage) {
      feedbackName.value = storage;
      feedbackEmail.focus();
    } else {
      feedbackName.focus();
    }
  });

  /* Запись данных из полей "Ваше имя" и "Ваш e-mail" в localStorage. */
  btnSend.addEventListener("click", function (evt) {
    if (!feedbackName.value || !feedbackEmail.value || !writeHere.value) {
      evt.preventDefault();
      modalFeedback.classList.remove("modal-error");
      modalFeedback.offsetWidth = modalFeedback.offsetWidth;
      modalFeedback.classList.add("modal-error");
    } else {
      if (isStorageSupport) {
        localStorage.setItem("name", feedbackName.value) && ("email", feedbackEmail.value);
        modalFeedback.classList.remove("modal-show");
        modalFeedback.classList.remove("modal-error");
        modalInputs.forEach(modalInput => modalInput.classList.remove("modal-input--error"));
        document.body.style.overflow = "visible";
      }
    }
  });

  /* Закрытие модального окна обратной связи */
  feedbackClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    modalFeedback.classList.remove("modal-show");
    modalFeedback.classList.remove("modal-error");
    document.body.style.overflow = "visible";
  });

  /* Закрытие модального окна обратной связи кнопкой Esc */
  window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      if (modalFeedback.classList.contains("modal-show")) {
        evt.preventDefault();
        modalFeedback.classList.remove("modal-show");
        modalFeedback.classList.remove("modal-error");
        document.body.style.overflow = "visible";
      }
    }
  });

  /* Проверка на наличие незаполненных полей с присвоением красной обводки для полей формы */
    btnSend.addEventListener("click", function () {
    for (let modalInput of modalInputs) {
      if (modalInput.value == "") {
        modalInput.classList.add("modal-input--error");
      }
    }
  });

  /* Удаление красной обводки при наборе текста в полях формы */
  for (let modalInput of modalInputs) {
    modalInput.onchange = () => {
      if (modalInput.classList.contains("modal-input--error")) {
        modalInput.classList.remove("modal-input--error");
      }
    }
  }
};

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
    document.body.style.overflow = "hidden";
  });

  /* Закрытие карты */
  mapClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    modalMap.classList.remove("modal-show");
    document.body.style.overflow = "visible";
  });

  /* Закрытие карты по кнопке Esc */
  window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      if (modalMap.classList.contains("modal-show")) {
        evt.preventDefault();
        modalMap.classList.remove("modal-show");
        document.body.style.overflow = "visible";
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
      document.body.style.overflow = "hidden";
    })
  };

  /* Закрытие модального окна */
  addProductClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    addProduct.classList.remove("modal-show");
    document.body.style.overflow = "visible";
  });

  /* Закрытие модального окна по кнопке Esc */
  window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      if (addProduct.classList.contains("modal-show")) {
        evt.preventDefault();
        addProduct.classList.remove("modal-show");
        document.body.style.overflow = "visible";
      }
    }
  });
}
