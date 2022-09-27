export default class Card {

    constructor({ data, handleCardClick }, templateSelector, selectors) {
        this._data = data,
            this._name = data.name,
            this._link = data.link,
            this._selectors = selectors,
            this._templateSelector = templateSelector,
            this._handleCardClick = handleCardClick
    }

    _getTemplate() {
        return document.querySelector(this._templateSelector).content.querySelector('.card').cloneNode(true);
    }

    createItem() {
        this._view = this._getTemplate();
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

    _likeCard() {
        this._likeButtonElement.classList.toggle('card__like_active');
    };

    _removeCard = () => {
        this._view.remove();
        this._view = null;
    };
}