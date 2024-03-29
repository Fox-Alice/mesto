export default class Card {

    constructor({ data, handleCardClick, handleCardDelete, handleCardLike }, templateSelector, userId) {
        this._data = data;
        this._name = data.name;
        this._link = data.link;
        this._templateSelector = templateSelector;
        this._handleCardClick = handleCardClick;
        this._handleCardDelete = handleCardDelete;
        this._handleCardLike = handleCardLike;
        this._userId = userId
    }

    _getTemplate() {
        return document.querySelector(this._templateSelector).content.querySelector('.card').cloneNode(true);
    }

    createItem() {
        this._view = this._getTemplate();
        this._cardElementName = this._view.querySelector('.card__title');
        this._cardElementImage = this._view.querySelector('.card__image');
        this._cardLikeCounter = this._view.querySelector('.card__like-counter');
        this._cardElementName.textContent = this._name;
        this._cardElementImage.src = this._link;
        this._cardElementImage.alt = this._name;
        this._subscribeToEvents();
        this.checkDeleteButtonExistence();
        this._updateLikesCounter(this);
        return this._view;
    }

    _subscribeToEvents() {
        this._likeCounter();
        this._likeButtonElement = this._view.querySelector('.card__like');
        this._likeButtonElement.addEventListener('click', () =>
            this._handleCardLike(this));

        this._removeButtonElement = this._view.querySelector('.card__remove-button');
        this._removeButtonElement.addEventListener('click', () => this._handleCardDelete(this));

        this._imageButtonElement = this._view.querySelector('.card__image');
        this._imageButtonElement.addEventListener('click', () => this._handleCardClick(this._data));
    };

    _updateLikesCounter() {
        this._likeCounter();
        if (this.isLiked()) {
            this._likeButtonElement.classList.add('card__like_active');
        } else {
            this._likeButtonElement.classList.remove('card__like_active');
        }
    };

    _likeCounter() {
        this._cardLikeCounter.textContent = this._data.likes.length;
    }

    isLiked() {
        return this._data.likes.some((like) => {
            return like._id === this._userId
        })
    }

    _checkOwnership() {
        return this._data.owner._id === this._userId
    }

    checkDeleteButtonExistence() {
        if (this._checkOwnership()) {
            this._removeButtonElement.classList.add('card__remove-button_visible');
        } else {
            this._removeButtonElement.classList.remove('card__remove-button_visible');
        }
    }

    updateDataLikes(data) {
        this._data.likes = data.likes;
        this._updateLikesCounter()
    }

    getDataId() {
        return this._data._id
    }

    remove() {
        this._view.remove();
        this._view = null;
    };
}