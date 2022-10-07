import Popup from "./Popup.js";

export default class PopupWithConfirmation extends Popup {
    constructor(popupSelector) {
        super(popupSelector),
        this._handleSubmit = null,
            this._button = this._popup.querySelector('.popup__save-button')
    }

    setSubmitAction(action) {
        this._handleSubmit = action
    }


    setEventListeners() {
        this._button.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this._handleSubmit();
        })

        super.setEventListeners();
    }
}    