const validationConfig = {
    formElementSelector: '.popup__form',
    formInputSelector: '.popup__form-item',
    buttonElementSelector: '.popup__save-button',
    inactiveButtonClass: 'popup__save-button_inactive',
    inputErrorClass: 'popup__form-item_type_error',
    errorClass: 'popup__input-error_active'
}

const showInputError = (errorMessage, formElement, formInput, config) => {

    const formError = formElement.querySelector(`#${formInput.id}-error`);
    formInput.classList.add(config.inputErrorClass);

    formError.classList.add(config.errorClass);
    formError.textContent = errorMessage;
};

const hideInputError = (formElement, formInput, config) => {
    const formError = formElement.querySelector(`#${formInput.id}-error`);
    formInput.classList.remove(config.inputErrorClass);
    formError.classList.remove(config.errorClass);
    formError.textContent = '';

};

const isValid = (formElement, formInput, config) => {
    if (!formInput.validity.valid) {

        showInputError(formInput.validationMessage, formElement, formInput, config);
    } else {

        hideInputError(formElement, formInput, config);
    }
};


const hasInvalidInput = (inputList) => {

    return inputList.some((formInput) => {

        return !formInput.validity.valid;
    })
};

const toggleButtonState = (inputList, button, config) => {
    if (hasInvalidInput(inputList)) {
        button.classList.add(config.inactiveButtonClass);
        button.disabled = 'disabled';
    } else {
        button.classList.remove(config.inactiveButtonClass);
        button.disabled = false;
    }
};

const setEventListeners = (formElement, config) => {
    const inputList = Array.from(formElement.querySelectorAll(config.formInputSelector));
    const buttonElement = formElement.querySelector(config.buttonElementSelector);
    toggleButtonState(inputList, buttonElement, config);
    inputList.forEach((formInput) => {
        formInput.addEventListener('input', () => {
            isValid(formElement, formInput, config);
            toggleButtonState(inputList, buttonElement, config);
        });
    });

    formElement.addEventListener('submit', function (evt) {

        evt.preventDefault();
    });
};

const enableValidation = (config) => {
    const formList = Array.from(document.querySelectorAll(config.formElementSelector));

    formList.forEach((formElement) => {
        formElement.addEventListener('submit', (evt) => {

            evt.preventDefault();
        });

        setEventListeners(formElement, config);
    });
};

enableValidation(validationConfig);