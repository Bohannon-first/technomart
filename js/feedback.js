const linkHelp = document.querySelector(".help-btn");
const modalFeedback = document.querySelector(".modal-feedback");
const feedbackClose = modalFeedback.querySelector(".feedback-close");
const feedbackName = modalFeedback.querySelector(".your-name");
const feedbackEmail = modalFeedback.querySelector(".your-email");
const feedbackForm = modalFeedback.querySelector(".write-to-us");

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






