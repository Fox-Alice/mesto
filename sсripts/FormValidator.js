export class FormValidator {
    constructor (config, formElement) {
        this._config = config,
        this._formElement = formElement        
    }
    
    enableValidation = () => {
        const _formList = Array.from(document.querySelectorAll(this._config.formElementSelector));
    
        _formList.forEach((formElement) => {
            formElement.addEventListener('submit', (evt) => {
    
                evt.preventDefault();
            });
    
            this._setEventListeners();
        });
    }; 
    
    _setEventListeners = () => {
        const _inputList = Array.from(this._formElement.querySelectorAll(this._config.formInputSelector));
        this._toggleButtonState();
        _inputList.forEach((formInput) => {
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
        const _buttonElement = this._formElement.querySelector(this._config.buttonElementSelector);
        if (this._hasInvalidInput()) {
            _buttonElement.classList.add(this._config.inactiveButtonClass);
            _buttonElement.disabled = 'disabled';
        } else {
            _buttonElement.classList.remove(this._config.inactiveButtonClass);
            _buttonElement.disabled = false;
        }
    };

    _hasInvalidInput = () => {
        const _inputList = Array.from(this._formElement.querySelectorAll(this._config.formInputSelector));

        return _inputList.some((formInput) => {
    
            return !formInput.validity.valid;
        })
    };

    _isValid = () => {
        const _inputList = Array.from(this._formElement.querySelectorAll(this._config.formInputSelector));
        _inputList.forEach((formInput) => {
        if (!formInput.validity.valid) {
    
            this._showInputError();
        } else {
    
            this._hideInputError();
        }
        });
    };
    _showInputError = () => {
        const _inputList = Array.from(this._formElement.querySelectorAll(this._config.formInputSelector));
        _inputList.forEach((formInput) => {
        const _formError = this._formElement.querySelector(`#${formInput.id}-error`);
        formInput.classList.add(this._config.inputErrorClass);
    
        _formError.classList.add(this._config.errorClass);
        _formError.textContent = formInput.validationMessage;
    });
};
    _hideInputError = () => {
        const _inputList = Array.from(this._formElement.querySelectorAll(this._config.formInputSelector));
        _inputList.forEach((formInput) => {
        const _formError = this._formElement.querySelector(`#${formInput.id}-error`);
        formInput.classList.remove(this._config.inputErrorClass);
        _formError.classList.remove(this._config.errorClass);
        _formError.textContent = '';
    
    });
    };
}