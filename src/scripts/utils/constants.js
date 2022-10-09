export const validationConfig = {
    formElementSelector: '.popup__form',
    formInputSelector: '.popup__form-item',
    buttonElementSelector: '.popup__save-button',
    inactiveButtonClass: 'popup__save-button_inactive',
    inputErrorClass: 'popup__form-item_type_error',
    errorClass: 'popup__input-error_active'
}

export const apiConfig = {
    url: "https://mesto.nomoreparties.co./v1/cohort-51",
    headers: {
        authorization: '31e7088a-3b9d-4de6-85fd-70c9c1c04334',
        'Content-Type': 'application/json'
    }
}

export const nameInput = document.querySelector('.popup__form-item_type_name');
export const jobInput = document.querySelector('.popup__form-item_type_job');
export const formEditProfileOpenButton = document.querySelector('.profile__button');
export const photoGrid = '.photo-grid';
export const cardOpenButton = document.querySelector('.profile__add-button');
export const editForm = document.querySelector('.popup__form_type_edit');
export const addForm = document.querySelector('.card-popup__form');
export const avatarForm = document.querySelector('.avatar-popup__form');
export const avatar = document.querySelector('.profile__avatar-overlay');
