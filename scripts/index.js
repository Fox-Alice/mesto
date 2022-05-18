
let formElement = document.querySelector('.popup__form');

let nameInput = document.querySelector('.popup__form-item_type_name');
let jobInput = document.querySelector('.popup__form-item_type_job');

const openButton = document.querySelector('.profile__button');
const popup = document.querySelector('.popup');
const closeButton = document.querySelector('.popup__close-icon');

function togglePopup() {
    if (!popup.classList.contains('popup_opened')) {

        let nameProfile = document.querySelector('.profile__title');
        let jobProfile = document.querySelector('.profile__description');
        nameInput.value = nameProfile.textContent;
        jobInput.value = jobProfile.textContent;
    }
    popup.classList.toggle('popup_opened');
}

openButton.addEventListener('click', togglePopup);
closeButton.addEventListener('click', togglePopup);

function formSubmitHandler(evt) {

    evt.preventDefault();

    let nameProfile = document.querySelector('.profile__title');
    let jobProfile = document.querySelector('.profile__description');
    nameProfile.textContent = nameInput.value;
    jobProfile.textContent = jobInput.value;

    togglePopup();
}

formElement.addEventListener('submit', formSubmitHandler);
