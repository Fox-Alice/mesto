export default class Card {
    static _template = document.querySelector('.card-template').content;

    constructor({ data, likeCard, handleCardClick, cardElementName, cardElementImage, likeButtonElement, removeButtonElement, imageButtonElement }, selectors) {
        this._data = data,
        this._name = data.name,
        this._link = data.link,
        this._selectors = selectors,
        this._likeCard = likeCard,
        this._handleCardClick = handleCardClick,
        this._cardElementName = cardElementName,
        this._cardElementImage = cardElementImage,
        this._likeButtonElement = likeButtonElement,
        this._removeButtonElement = removeButtonElement,
        this._imageButtonElement = imageButtonElement
    }

    createItem() {
        this._view = Card._template.querySelector('.card').cloneNode(true);
        this._cardElementName = this._view.querySelector('.card__title');
        this._cardElementImage = this._view.querySelector('.card__image');
        this._cardElementName.textContent = this._name;
        this._cardElementImage.src = this._link;
        this._cardElementImage.alt = this._name;
        this._subscribeToEvents();
        return this._view;
    }

    _subscribeToEvents() {
        this._likeButtonElement = this._view.querySelector('.card__like');
        this._likeButtonElement.addEventListener('click', (evt) => {
            this._likeCard(evt);
        });
        this._removeButtonElement = this._view.querySelector('.card__remove-button');
        this._removeButtonElement.addEventListener('click', this._removeCard);
        
        this._imageButtonElement = this._view.querySelector('.card__image');
        this._imageButtonElement.addEventListener('click', () => this._handleCardClick(this._data));
    };

    _removeCard = () => {
        this._view.remove();
        this._view = null;
    };
}