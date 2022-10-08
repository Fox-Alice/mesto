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

import {
  validationConfig,
  apiConfig,
  nameInput,
  jobInput,
  formEditProfileOpenButton,
  photoGrid,
  cardOpenButton,
  editForm,
  addForm,
  avatarForm,
  avatar
} from "../scripts/utils/constants.js"

const popupWithImage = new PopupWithImage('.image-popup');
popupWithImage.setEventListeners();

const popupAddCard = new PopupWithForm('.card-popup', handleFormAddCardSubmit);
popupAddCard.setEventListeners();

const popupEditInfo = new PopupWithForm('.edit-popup', handleProfileFormSubmit);
popupEditInfo.setEventListeners();

const popupWithConfirmation = new PopupWithConfirmation('.delete-popup');
popupWithConfirmation.setEventListeners();

const popupUpdateAvatar = new PopupWithForm('.avatar-popup', handleAvatarSubmit);
popupUpdateAvatar.setEventListeners();

const userInfo = new UserInfo({ title: '.profile__title', description: '.profile__description', avatar: '.profile__avatar' });

const api = new Api(apiConfig);
let userId = null;
api.getAllInfo()
  .then(([userData, cardAll]) => {
    userId = userData._id;
    userInfo.setUserInfo(userData);
    section.renderItems(cardAll);
  })
  .catch((err) => {
    console.log('Error', err);
  })

const formEditValidator = new FormValidator(validationConfig, editForm);
const formAddValidator = new FormValidator(validationConfig, addForm);
const formAvatarValidator = new FormValidator(validationConfig, avatarForm)

formEditValidator.enableValidation();
formAddValidator.enableValidation();
formAvatarValidator.enableValidation();

const section = new Section({
  renderer: (data) => {
    section.addItem(createCard(data))
  }
}, photoGrid);

function handleProfileFormSubmit(data) {
  formEditValidator.inactiveButton();
  api.editProfile(data)
    .then((res) => {
      userInfo.setUserInfo(res);
      popupEditInfo.close();
    })
    .catch((err) => {
      console.log('Error', err);
    })

}

function createCard(data) {
  const card = new Card({
    data,
    handleCardClick,
    handleCardDelete,
    handleCardLike
  },
    '.card-template',
    userId,
  );
  return card.createItem();
}

function handleCardDelete(cardInstance) {
  popupWithConfirmation.open();
  popupWithConfirmation
    .setSubmitAction(() => {
      performDeleteCardApiRequest(cardInstance)
    })
}

function performDeleteCardApiRequest(cardInstance) {
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
  formAddValidator.inactiveButton();
  api.addCard(res)
    .then((res) => {
      section.addItem(createCard(res), 'before');
      popupAddCard.close();
    })
    .catch((err) => {
      console.log('Error', err);
    })
    .finally(() => popupAddCard.renderLoading(false))
}

function handleAvatarSubmit(data) {
  formAvatarValidator.inactiveButton();
  api.updateAvatar(data)
    .then((res) => {
      console.log(res);
      userInfo.setUserInfo(res);
      popupUpdateAvatar.close();
    })
    .catch((err) => {
      console.log('Error', err);
    })
    .finally(() => popupUpdateAvatar.renderLoading(false))
}

function handleCardLike(card) {

  if (!card.isLiked()) {
    api.putLike(card.getDataId())
      .then((data) => {
        card.updateDataLikes(data);
      })
      .catch((err) => {
        console.log('Error', err);
      })
  } else {
    api.deleteLike(card.getDataId())
      .then((data) => {
        card.updateDataLikes(data);
      })
      .catch((err) => {
        console.log('Error', err);
      })
  }
}

formEditProfileOpenButton.addEventListener('click', () => {
  const profileData = userInfo.getUserInfo();
  nameInput.value = profileData.name;
  jobInput.value = profileData.about;
  popupEditInfo.open()
});

cardOpenButton.addEventListener('click', () => popupAddCard.open());

avatar.addEventListener('click', () => {
  popupUpdateAvatar.open()
})