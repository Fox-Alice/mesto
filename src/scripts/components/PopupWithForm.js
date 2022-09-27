import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
    constructor(popupSelector, handleSubmit) {
        super(popupSelector),
            this._handleSubmit = handleSubmit,
            this._form = this._popup.querySelector('.popup__form'),
            this._inputList = Array.from(this._form.querySelectorAll('.popup__form-item'))
    }

    _getInputValues() {
        this._inputObject = {};
        this._inputList.forEach((input) =>
            this._inputObject[input.name] = input.value
        )
        return this._inputObject
    }

    setEventListeners() {
        this._form.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this._handleSubmit(this._getInputValues());
        })

        super.setEventListeners();
    }

    close() {
        this._form.reset();
        super.close();
    }
}