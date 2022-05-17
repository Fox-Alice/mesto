
let formElement = document.querySelector('.popup__form');

let nameInput = document.querySelector('.popup__form-item_type_name');
let jobInput = document.querySelector('.popup__form-item_type_job');

function formSubmitHandler (evt) {
    evt.preventDefault(); 
    nameInput.value;
    jobInput.value;
    let Name = document.querySelector('.profile__title');
    let Job = document.querySelector('.profile__description');
    Name.textContent = nameInput.value;
    Job.textContent = jobInput.value;
}

formElement.addEventListener('submit', formSubmitHandler); 

const openButton = document.querySelector('.profile__button');
const popup = document.querySelector('.popup');
const closeButton = document.querySelector('.popup__close-icon');

function togglePopup() {
    popup.classList.toggle('popup_opened');
    let Name = document.querySelector('.profile__title');
    let Job = document.querySelector('.profile__description');
    nameInput.value = Name.textContent;
    jobInput.value = Job.textContent;
}
openButton.addEventListener('click', togglePopup);
closeButton.addEventListener('click', togglePopup);
