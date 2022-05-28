
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

  const cardElement = document.querySelector('.card-template');
  const photoGrid = document.querySelector('.photo-grid')
  

  function renderCard (data) {
      data.forEach(item => renderItem(item))
  };

  function renderItem(element) {
      cardElementTemplate = document.querySelector('.card-template').content;
      card = cardElementTemplate.cloneNode(true);      
      const cardElementName = card.querySelector('.card__title');
      const cardElementImage = card.querySelector('.card__image');
      cardElementName.textContent = element.name;
      cardElementImage.src = element.link;
      photoGrid.append(card); 
      
  };

  renderCard(initialCards);

