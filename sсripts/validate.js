const validationConfig = {
    formElementSelector: '.popup__form',
    formInputSelector: '.popup__form-item',
    buttonElementSelector: '.popup__save-button',
    inactiveButtonClass: 'popup__save-button_inactive',
    inputErrorClass: 'popup__form-item_type_error',
    errorClass: 'form__input-error_active'
}
const formElement = document.querySelector(validationConfig.formElementSelector);
const formInput = formElement.querySelector(validationConfig.formInputSelector);


const showInputError = (formElement, formInput, errorMessage, config) => {
    
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

  const isValid = (formElement, formInput) => {
    if (!formInput.validity.valid) {
      
      showInputError(formElement, formInput, formInput.validationMessage, validationConfig);
    } else {
      
      hideInputError(formElement, formInput, validationConfig);
    }
  };

  formElement.addEventListener('submit', function (evt) {
    
    evt.preventDefault();
  });
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
    toggleButtonState(inputList, buttonElement, validationConfig);
     inputList.forEach((formInput) => {
      formInput.addEventListener('input', () => {
       isValid(formElement, formInput);
       toggleButtonState(inputList, buttonElement, validationConfig);
      });
    });
  };

  const enableValidation = (config) => {
    const formList = Array.from(document.querySelectorAll(config.formElementSelector));
  
    formList.forEach((formElement) => {
      formElement.addEventListener('submit', (evt) => {
     
        evt.preventDefault();
      });
       
      setEventListeners(formElement, validationConfig);
    });
  };
 
  enableValidation(validationConfig); 
  
