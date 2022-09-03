export class FormValidator {
    constructor (config, formElement) {
        this._config = config,
        this._formElement = formElement,
        this._formInput = this._formElement.querySelector(this._config.formInputSelector);        
        this._buttonElement = this._formElement.querySelector(this._config.buttonElementSelector),
        this._inputList = Array.from(this._formElement.querySelectorAll(this._config.formInputSelector))       
    }
    
    _showInputError = () => {
        const _formError = this._formElement.querySelector(`#${this._formInput.id}-error`);
        this._formInput.classList.add(this._config.inputErrorClass);    
        _formError.classList.add(this._config.errorClass);
        _formError.textContent = this._formInput.validationMessage;
    
}
    _hideInputError = () => {
        const _formError = this._formElement.querySelector(`#${this._formInput.id}-error`);
        this._formInput.classList.remove(this._config.inputErrorClass);
        _formError.classList.remove(this._config.errorClass);
        _formError.textContent = '';
    }

    _isValid = () => {
        
        if (!this._formInput.validity.valid) {
    
            this._showInputError();
        } else {
    
            this._hideInputError();
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
        this._buttonElement.disabled = 'disabled';
    }

    _setEventListeners = () => {
        console.log(this._inputList);
        this._toggleButtonState();
        this._inputList.forEach((formInput) => {
            formInput.addEventListener('input', () => {
                this._formInput = formInput;
                this._isValid();
                this._toggleButtonState();
            });
        });    
    };

    enableValidation = () => {
        
        this._formElement.addEventListener('submit', (evt) => {
            
            evt.preventDefault();
        });

        this._setEventListeners();
};
}