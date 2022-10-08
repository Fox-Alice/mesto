export default class FormValidator {
    constructor(config, formElement) {
        this._config = config;
        this._formElement = formElement
        this._buttonElement = this._formElement.querySelector(this._config.buttonElementSelector);
        this._inputList = Array.from(this._formElement.querySelectorAll(this._config.formInputSelector))
    }

    _showInputError = (formInput) => {
        const _formError = this._formElement.querySelector(`#${formInput.id}-error`);
        formInput.classList.add(this._config.inputErrorClass);
        _formError.classList.add(this._config.errorClass);
        _formError.textContent = formInput.validationMessage;

    }
    _hideInputError = (formInput) => {
        const _formError = this._formElement.querySelector(`#${formInput.id}-error`);
        formInput.classList.remove(this._config.inputErrorClass);
        _formError.classList.remove(this._config.errorClass);
        _formError.textContent = '';
    }

    _isValid = (formInput) => {

        if (!formInput.validity.valid) {

            this._showInputError(formInput);
        } else {

            this._hideInputError(formInput);
        }

    };

    _hasInvalidInput = () => {
        return this._inputList.some((formInput) => {

            return !formInput.validity.valid;

        })
    };

    _toggleButtonState = () => {
        if (this._hasInvalidInput()) {
            this.inactiveButton();
        } else {
            this._buttonElement.classList.remove(this._config.inactiveButtonClass);
            this._buttonElement.disabled = false;
        }
    };

    inactiveButton = () => {
        this._buttonElement.classList.add(this._config.inactiveButtonClass);
        this._buttonElement.disabled = 'true';
    }

    _setEventListeners = () => {
        this._toggleButtonState();
        this._inputList.forEach((formInput) => {
            formInput.addEventListener('input', () => {
                this._isValid(formInput);
                this._toggleButtonState();
            });
        });
    };

    enableValidation = () => {
        this._setEventListeners();
    };
}