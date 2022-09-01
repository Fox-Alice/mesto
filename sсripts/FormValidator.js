export class FormValidator {
    constructor (config, formElement) {
        this._config = config,
        this._formElement = formElement,
        this._buttonElement = this._formElement.querySelector(this._config.buttonElementSelector),
        this._inputList = Array.from(this._formElement.querySelectorAll(this._config.formInputSelector))       
    }
    
    enableValidation = () => {
            this._formElement.addEventListener('submit', (evt) => {
    
                evt.preventDefault();
            });
    
            this._setEventListeners();
        };
    
    _setEventListeners = () => {
        this._toggleButtonState();
        this._inputList.forEach((formInput) => {
            formInput.addEventListener('input', () => {
                this._isValid();
                this._toggleButtonState();
            });
        });
    
        this._formElement.addEventListener('submit', function (evt) {
    
            evt.preventDefault();
        });
    };

    _toggleButtonState = () => {
        if (this._hasInvalidInput()) {
            this._buttonElement.classList.add(this._config.inactiveButtonClass);
            this._buttonElement.disabled = 'disabled';
        } else {
            this._buttonElement.classList.remove(this._config.inactiveButtonClass);
            this._buttonElement.disabled = false;
        }
    };

    _hasInvalidInput = () => {

        return this._inputList.some((formInput) => {
    
            return !formInput.validity.valid;
        })
    };

    _isValid = () => {
        this._inputList.forEach((formInput) => {
        if (!formInput.validity.valid) {
    
            this._showInputError();
        } else {
    
            this._hideInputError();
        }
        });
    };
    _showInputError = () => {
        this._inputList.forEach((formInput) => {
        const _formError = this._formElement.querySelector(`#${formInput.id}-error`);
        formInput.classList.add(this._config.inputErrorClass);    
        _formError.classList.add(this._config.errorClass);
        _formError.textContent = formInput.validationMessage;
    });
};
    _hideInputError = () => {
        this._inputList.forEach((formInput) => {
        const _formError = this._formElement.querySelector(`#${formInput.id}-error`);
        formInput.classList.remove(this._config.inputErrorClass);
        _formError.classList.remove(this._config.errorClass);
        _formError.textContent = '';
    
    });
    };

}