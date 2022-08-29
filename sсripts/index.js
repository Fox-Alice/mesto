import { Card } from "./Card.js";
import { FormValidator } from "./FormValidator.js";

const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

const selectors = {
  cardTitle: 'card__title',
  cardImage: 'card__image'
  }

  const validationConfig = {
    formElementSelector: '.popup__form',
    formInputSelector: '.popup__form-item',
    buttonElementSelector: '.popup__save-button',
    inactiveButtonClass: 'popup__save-button_inactive',
    inputErrorClass: 'popup__form-item_type_error',
    errorClass: 'popup__input-error_active'
}

const popups = document.querySelectorAll('.popup');
const formEditProfileElement = document.querySelector('.popup__form_type_edit');
const nameInput = document.querySelector('.popup__form-item_type_name');
const jobInput = document.querySelector('.popup__form-item_type_job');
const nameProfile = document.querySelector('.profile__title');
const jobProfile = document.querySelector('.profile__description');
const imagePopupFillImage = document.querySelector('.image-popup__image');
const imagePopupFillCaption = document.querySelector('.image-popup__caption');
const formEditProfileOpenButton = document.querySelector('.profile__button');
const popupEditProfile = document.querySelector('.edit-popup');
const cardElement = document.querySelector('.card-template');
const photoGrid = document.querySelector('.photo-grid');
const cardFormElement = document.querySelector('.card-popup__form');
const cardTitleInput = document.querySelector('.popup__form-item_type_title');
const cardLinkInput = document.querySelector('.popup__form-item_type_link');
const imagePopup = document.querySelector('.image-popup');
const cardOpenButton = document.querySelector('.profile__add-button');
const cardPopup = document.querySelector('.card-popup');
const editForm = document.querySelector('.popup__form_type_edit');
const addForm = document.querySelector('.card-popup__form');

const formEditValidator = new FormValidator(validationConfig, editForm);
const formAddValidator = new FormValidator(validationConfig, addForm);
formEditValidator.enableValidation();
formAddValidator.enableValidation();


function fillFormEditProfile(evt) {
  evt.preventDefault();
  nameProfile.textContent = nameInput.value;
  jobProfile.textContent = jobInput.value;
  closePopup(popupEditProfile);
}
formEditProfileElement.addEventListener('submit', fillFormEditProfile);

function openPopup(popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', closeByEscape);
};

function closePopup(popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', closeByEscape);
};

function openEditPopup() {
  openPopup(popupEditProfile);
  nameInput.value = nameProfile.textContent;
  jobInput.value = jobProfile.textContent;
};

formEditProfileOpenButton.addEventListener('click', openEditPopup);

popups.forEach((popup) => {
  popup.addEventListener('mousedown', (evt) => {
    if (evt.target.classList.contains('popup_opened')) {
      closePopup(popup)
    }
    if (evt.target.classList.contains('popup__close-icon')) {
      closePopup(popup)
    }
  })
});

function closeByEscape(evt) {
  if (evt.key === 'Escape') {
    const openedPopup = document.querySelector('.popup_opened');
    closePopup(openedPopup);
  }
};

function renderCard(data) {
  data.forEach(item => renderItem(item, photoGrid));
};

function likeCard(evt) {
  const cardLikeButtonTarget = evt.target;
  cardLikeButtonTarget.classList.toggle('card__like_active');
};

function openImagePopup(evt) {
  evt.preventDefault();
  openPopup(imagePopup);
  const imagePopupFillImageTarget = evt.target;
  imagePopupFillImage.src = imagePopupFillImageTarget.src;
  imagePopupFillImage.alt = imagePopupFillImageTarget.alt;
  imagePopupFillCaption.textContent = imagePopupFillImageTarget.nextElementSibling.textContent;
};

function renderItem(data, container, position = 'append') {
  const card = new Card({data,likeCard, openImagePopup}, selectors);
  card.createItem();
  const newCard = card.createItem();
  switch (position) {
    case "append": return container.append(newCard);
    case "prepend": return container.prepend(newCard);
    case "before": return container.before(newCard);
    case "after": return container.after(newCard);
    default: return;
  };
};

renderCard(initialCards);

cardOpenButton.addEventListener('click', () => openPopup(cardPopup));

function addItem(evt) {
  evt.preventDefault();  
  evt.submitter.classList.add('popup__save-button_inactive');
  evt.submitter.disabled = 'disabled';
  const cardName = cardTitleInput.value;
  const cardImage = cardLinkInput.value;
  const cardInput = {
    name: cardName,
    link: cardImage
  };
  renderItem(cardInput, photoGrid, 'prepend');
  evt.target.reset();
  closePopup(cardPopup);
};

cardFormElement.addEventListener('submit', addItem);