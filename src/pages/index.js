import '../pages/index.css';
import { initialCards } from '../scripts/utils/data.js';
import Card from "../scripts/components/Card.js";
import FormValidator from "../scripts/components/FormValidator.js";
import Section from "../scripts/components/Section.js";
import PopupWithImage from "../scripts/components/PopupWithImage.js";
import PopupWithForm from "../scripts/components/PopupWithForm.js";
import PopupWithConfirmation from "../scripts/components/PopupWithConfirmation.js";
import UserInfo from "../scripts/components/UserInfo.js";
import Api from "../scripts/components/Api.js"
import Popup from '../scripts/components/Popup';

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
const formEditProfileOpenButton = document.querySelector('.profile__button');
const photoGrid = '.photo-grid';
const cardOpenButton = document.querySelector('.profile__add-button');
const editForm = document.querySelector('.popup__form_type_edit');
const addForm = document.querySelector('.card-popup__form');
const avatarForm = document.querySelector('.avatar-popup__form');
const deleteButton = document.querySelector('.delete-popup__save-button')



const popupWithImage = new PopupWithImage('.image-popup');
popupWithImage.setEventListeners();

const popupAddCard = new PopupWithForm('.card-popup', handleFormAddCardSubmit);
popupAddCard.setEventListeners();

const popupEditInfo = new PopupWithForm('.edit-popup', fillFormEditProfile);
popupEditInfo.setEventListeners();

const popupWithConfirmation = new PopupWithConfirmation('.delete-popup');
popupWithConfirmation.setEventListeners();

const popupUpdateAvatar = new PopupWithForm ('.avatar-popup', handleAvatarSubmit);
popupUpdateAvatar.setEventListeners();

const userInfo = new UserInfo({ title: '.profile__title', description: '.profile__description', avatar: '.profile__avatar' });

const options = {
  url: "https://mesto.nomoreparties.co./v1/cohort-51",
  headers: {    
      authorization: '31e7088a-3b9d-4de6-85fd-70c9c1c04334',
      'Content-Type': 'application/json'
    }
}



const api = new Api(options);
api.getInitialCards()
.then((res) => {  
    section.renderItems(res); 
})
.catch((err) => {
  console.log('Error', err);
})

let userId = null;
api.getUser()
.then((res) => {  
  userId = res._id;
  userInfo.setUserInfo(res)  
})

const formEditValidator = new FormValidator(validationConfig, editForm);
const formAddValidator = new FormValidator(validationConfig, addForm);
const formAvatarValidator = new FormValidator(validationConfig, avatarForm)

formEditValidator.enableValidation();
formAddValidator.enableValidation();

const section = new Section({
  renderer: (data) => {
    section.addItem(createItem(data))
  }
}, photoGrid);

function fillFormEditProfile(data) {
  formEditValidator.inactiveButton();
  api.editProfile(data)
  .then((res) => {
  userInfo.setUserInfo(res);
  popupEditInfo.close();
  })
}

function createItem(data) {
  const card = new Card({ 
    data, 
    handleCardClick, 
    handleCardDelete,
    handleCardLike},
    '.card-template', 
    selectors, 
    userId,
    );
  return card.createItem();  
}

function handleCardDelete (cardInstance) {
  popupWithConfirmation.open();
  deleteButton.addEventListener('click', () => popupWithConfirmation.setSubmitAction(sendQueryApi(cardInstance)))
}

function sendQueryApi(cardInstance) {
    api.removeCard(cardInstance.getDataId())
      .then(() => {             
        cardInstance.remove();
        popupWithConfirmation.close();      
      })
      .catch((err) => {
        console.log('Error', err);
      })
    }


function handleCardClick(data) {
  popupWithImage.open(data)
}

function handleFormAddCardSubmit(res) {
  popupAddCard.renderLoading(true);
  api.addCard(res)
  .then((res) => {
  formAddValidator.inactiveButton();
  section.addItem(createItem(res), 'before');
  popupAddCard.close();
})
.catch((err) => {
  console.log('Error', err);
})
.finally(() => popupAddCard.renderLoading(false))
}

function handleAvatarSubmit(data) {
  api.updateAvatar(data)
  .then((res) => {
    formAvatarValidator.enableValidation();    
    userInfo.setUserInfo(res);
    popupUpdateAvatar.close();
  })
  .catch((err) => {
    console.log('Error', err);
  })
  .finally(() => this.renderLoading(false))
}

function handleCardLike(card) {

  if (!card.cardLiked()) {
  api.putLike(card.getDataId())
  .then((data) => {card.updateDataLikes(data);
});
} else {
  api.deleteLike(card.getDataId())
  .then((data) => {card.updateDataLikes(data);
});
}
}

formEditProfileOpenButton.addEventListener('click', () => {
  const profileData = userInfo.getUserInfo();
  nameInput.value = profileData.name;
  jobInput.value = profileData.about;
  popupEditInfo.open()
});

cardOpenButton.addEventListener('click', () => popupAddCard.open());

const avatar = document.querySelector('.profile__avatar-overlay');
avatar.addEventListener('click', () => {
  popupUpdateAvatar.open()})