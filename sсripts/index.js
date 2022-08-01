const formEditProfileElement = document.querySelector('.popup__form');
const nameInput = document.querySelector('.popup__form-item_type_name');
const jobInput = document.querySelector('.popup__form-item_type_job');
const nameProfile = document.querySelector('.profile__title');
const jobProfile = document.querySelector('.profile__description');
const imagePopupFillImage = document.querySelector('.image-popup__image');
const imagePopupFillCaption = document.querySelector('.image-popup__caption');

function fillFormEditProfile(evt) {
  evt.preventDefault();
  nameProfile.textContent = nameInput.value;
  jobProfile.textContent = jobInput.value;
  closePopup(popupEditProfile);
}

formEditProfileElement.addEventListener('submit', fillFormEditProfile);

const formEditProfileOpenButton = document.querySelector('.profile__button');
const popupEditProfile = document.querySelector('.edit-popup');
const formEditProfileCloseButton = document.querySelector('.edit-popup__close-icon');

function openPopup(popup) {
  popup.classList.add('popup_opened');
};

function closePopup(popup) {
  popup.classList.remove('popup_opened');
};



function openEditPopup() {
  openPopup(popupEditProfile);
  nameInput.value = nameProfile.textContent;
  jobInput.value = jobProfile.textContent;
};

formEditProfileOpenButton.addEventListener('click', openEditPopup);
formEditProfileCloseButton.addEventListener('click', () => closePopup(popupEditProfile));

const cardElement = document.querySelector('.card-template');
const photoGrid = document.querySelector('.photo-grid');
const cardFormElement = document.querySelector('.card-popup__form');
const cardTitleInput = document.querySelector('.popup__form-item_type_title');
const cardLinkInput = document.querySelector('.popup__form-item_type_link');
const imagePopup = document.querySelector('.image-popup');



function renderCard(data) {
  data.forEach(item => renderItem(item, photoGrid));
};

function likeCard(evt) {
  const cardLikeButtonTarget = evt.target;
  cardLikeButtonTarget.classList.toggle('card__like_active');
};

function removeCard(evt) {
  const cardRemoveButtonTarget = evt.target;
  const cardRemoveElement = cardRemoveButtonTarget.closest('.card');
  cardRemoveElement.remove();
};

function openImagePopup(evt) {
  evt.preventDefault();
  openPopup(imagePopup);
  const imagePopupFillImageTarget = evt.target;
  imagePopupFillImage.src = imagePopupFillImageTarget.src;
  imagePopupFillImage.alt = imagePopupFillImageTarget.alt;
  imagePopupFillCaption.textContent = imagePopupFillImageTarget.nextElementSibling.textContent;
};

function createItem(element) {
  const cardElementTemplate = cloneTemplate(document.querySelector('.card-template'));
  const cardElementName = cardElementTemplate.querySelector('.card__title');
  const cardElementImage = cardElementTemplate.querySelector('.card__image');
  cardElementName.textContent = element.name;
  cardElementImage.src = element.link;
  cardElementImage.alt = element.name;
  subscribeToEvents(cardElementTemplate);
  return cardElementTemplate;
};

function renderItem(data, container, position = 'append') {
  const newCard = createItem(data);
  switch (position) {
    case "append": return container.append(newCard);
    case "prepend": return container.prepend(newCard);
    case "before": return container.before(newCard);
    case "after": return container.after(newCard);
    default: return;
  };
};

function cloneTemplate(container) {
  const templateElement = container.content;
  const newElement = templateElement.cloneNode(true);
  return newElement;
}

function subscribeToEvents(cardElementTemplate) {
  const likeButtonElement = cardElementTemplate.querySelector('.card__like');
  likeButtonElement.addEventListener('click', likeCard);
  const removeButtonElement = cardElementTemplate.querySelector('.card__remove-button');
  removeButtonElement.addEventListener('click', removeCard);

  const imageButtonElement = cardElementTemplate.querySelector('.card__image');
  imageButtonElement.addEventListener('click', openImagePopup);

};
const closeElement = document.querySelector('.image-popup__close-icon');
closeElement.addEventListener('click', () => closePopup(imagePopup));
renderCard(initialCards);

const cardOpenButton = document.querySelector('.profile__add-button');
const cardPopup = document.querySelector('.card-popup');
const cardCloseButton = document.querySelector('.card-popup__close-icon');

cardOpenButton.addEventListener('click', () => openPopup(cardPopup));
cardCloseButton.addEventListener('click', () => closePopup(cardPopup));


function addItem(evt) {
  evt.preventDefault();
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