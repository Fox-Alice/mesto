import '../pages/index.css';
import { initialCards } from '../scripts/utils/data.js';
import Card from "../scripts/components/Card.js";
import FormValidator from "../scripts/components/FormValidator.js";
import Section from "../scripts/components/Section.js";
import PopupWithImage from "../scripts/components/PopupWithImage.js";
import PopupWithForm from "../scripts/components/PopupWithForm.js";
import UserInfo from "../scripts/components/UserInfo.js";

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

export const nameInput = document.querySelector('.popup__form-item_type_name');
export const jobInput = document.querySelector('.popup__form-item_type_job');
const nameProfile = document.querySelector('.profile__title');
const jobProfile = document.querySelector('.profile__description');
const formEditProfileOpenButton = document.querySelector('.profile__button');
const photoGrid = '.photo-grid';
const cardFormElement = document.querySelector('.card-popup__form');
const cardTitleInput = document.querySelector('.popup__form-item_type_title');
const cardLinkInput = document.querySelector('.popup__form-item_type_link');
const cardOpenButton = document.querySelector('.profile__add-button');
const editForm = document.querySelector('.popup__form_type_edit');
const addForm = document.querySelector('.card-popup__form');


const popupWithImage = new PopupWithImage('.image-popup');
popupWithImage.setEventListeners();

const popupAddCard = new PopupWithForm('.card-popup', handleFormAddCardSubmit);
popupAddCard.setEventListeners();

const popupEditInfo = new PopupWithForm('.edit-popup', fillFormEditProfile);
popupEditInfo.setEventListeners();

const userInfo = new UserInfo({ title: '.profile__title', description: '.profile__description' });

const formEditValidator = new FormValidator(validationConfig, editForm);
const formAddValidator = new FormValidator(validationConfig, addForm);

formEditValidator.enableValidation();
formAddValidator.enableValidation();

const section = new Section({
  items: initialCards, renderer: (data) => {
    section.addItem(createItem(data))
  }
}, photoGrid);

section.renderItems();

function fillFormEditProfile(data) {
  formEditValidator.inactiveButton();
  userInfo.setUserInfo(data);
  popupEditInfo.close();
}

function createItem(data) {
  const card = new Card({ data, handleCardClick }, '.card-template', selectors);

  return card.createItem();
}

function handleCardClick(data) {
  popupWithImage.open(data)
}

function handleFormAddCardSubmit() {

  formAddValidator.inactiveButton();
  const cardName = cardTitleInput.value;
  const cardImage = cardLinkInput.value;
  const cardInput = {
    name: cardName,
    link: cardImage
  };
  section.addItem(createItem(cardInput), 'before');
  popupAddCard.close();

}

formEditProfileOpenButton.addEventListener('click', () => {
  const profileData = userInfo.getUserInfo();
  nameInput.value = profileData.name;
  jobInput.value = profileData.job;
  popupEditInfo.open()
});


cardOpenButton.addEventListener('click', () => popupAddCard.open());