export class Card {
    static _template = document.querySelector('.card-template').content;

    constructor({ data, likeCard, openImagePopup }, selectors) {
        this._name = data.name,
        this._link = data.link,
        this._selectors = selectors,
        this._likeCard = likeCard,
        this._openImagePopup = openImagePopup
    }

    createItem() {
        this._view = Card._template.querySelector('.card').cloneNode(true);
        const _cardElementName = this._view.querySelector('.card__title');
        const _cardElementImage = this._view.querySelector('.card__image');
        _cardElementName.textContent = this._name;
        _cardElementImage.src = this._link;
        _cardElementImage.alt = this._name;
        this._subscribeToEvents();
        return this._view;
    }

    _subscribeToEvents() {
        const _likeButtonElement = this._view.querySelector('.card__like');
        _likeButtonElement.addEventListener('click', (evt) => {
            this._likeCard(evt);
        });
        const _removeButtonElement = this._view.querySelector('.card__remove-button');
        _removeButtonElement.addEventListener('click', this._removeCard);

        const _imageButtonElement = this._view.querySelector('.card__image');
        _imageButtonElement.addEventListener('click', (evt) => {
            this._openImagePopup(evt);
        });

    };

    _removeCard = () => {
        this._view.remove();
    };
}