
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
  const photoGrid = document.querySelector('.photo-grid');
  const cardFormElement = document.querySelector('.card-popup__form');
  const cardTitleInput = document.querySelector('.popup__form-item_type_title');
  const cardLinkInput = document.querySelector('.popup__form-item_type_link');
  const imagePopup = document.querySelector('.image-popup');

  function renderCard (data) {
      data.forEach(item => renderItem(item))
  };

  function likeCard(evt) {
    let likeButtonTarget = evt.target;
    let likeButton = likeButtonTarget.closest('.card__like');
    likeButton.classList.toggle('card__like_active');    
};

function removeCard(evt){
    let removeButtonTarget = evt.target;
    let removeElement = removeButtonTarget.closest('.card');
    removeElement.remove();    
};

function imageOpenPopup(evt) {    
    evt.preventDefault();
    imagePopup.classList.toggle('image-popup_opened');
    let fillImageTarget = evt.target    
    let fillImage = document.querySelector('.image-popup__image');    
    fillImage.src = fillImageTarget.src;
    let fillCaption = document.querySelector('.image-popup__caption');
    fillCaption.textContent = fillImageTarget.nextElementSibling.textContent;   
};


  function renderItem(element) {
      cardElementTemplate = document.querySelector('.card-template').content;
      const card = cardElementTemplate.cloneNode(true);      
      const cardElementName = card.querySelector('.card__title');
      const cardElementImage = card.querySelector('.card__image');
      cardElementName.textContent = element.name;
      cardElementImage.src = element.link;
      
      const likeButtonElement = card.querySelector('.card__like');
      likeButtonElement.addEventListener('click', likeCard);
      const removeButtonElement = card.querySelector('.card__remove-button');
      removeButtonElement.addEventListener('click', removeCard); 

      const imageButtonElement = card.querySelector('.card__image');
      imageButtonElement.addEventListener('click', imageOpenPopup);
      let closeElement = document.querySelector('.image-popup__close-icon');
      closeElement.addEventListener('click', imageOpenPopup);

      photoGrid.append(card);       
  };

  renderCard(initialCards);

  function cardFormSubmitHandler (evt) {
    evt.preventDefault();   
    
    let title = document.querySelector('.card__title');
   let image = document.querySelector('.card__image');
   title.textContent = cardTitleInput.value;
   image.src = cardLinkInput.value;
}

cardFormElement.addEventListener('submit', cardFormSubmitHandler);

const cardOpenButton = document.querySelector('.profile__add-button');
const cardPopup = document.querySelector('.card-popup');
const cardCloseButton = document.querySelector('.card-popup__close-icon');

function cardTogglePopup() {
    cardPopup.classList.toggle('popup_opened');    
}
cardOpenButton.addEventListener('click', cardTogglePopup);
cardCloseButton.addEventListener('click', cardTogglePopup);


function addItem(evt) {
    evt.preventDefault();
    let titleValue = cardTitleInput.value;
    let linkValue = cardLinkInput.value;
    renderCard(titleValue, linkValue);
    cardTitleInput.value = null;
    cardLinkInput.value = null;

}
cardFormElement.addEventListener('submit', addItem);
cardFormElement.addEventListener('submit', cardTogglePopup);

let openButtonPicture = document.querySelector('.card__image');
let imagePopupTitleElement = document.querySelector('.card__title');
let cardImagePopup = document.querySelector('.card');





