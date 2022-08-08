const formElement = document.querySelector('.popup__form');
const formInput = formElement.querySelector('.popup__form-item');
const formError = formElement.querySelector(`#${formInput.id}-error`);

const showInputError = (formElement, formInput, errorMessage) => {
    const formError = formElement.querySelector(`#${formInput.id}-error`);
    formInput.classList.add('popup__form-item_type_error');
    
    formError.classList.add('form__input-error_active');
    formError.textContent = errorMessage;
  };

  const hideInputError = (formElement, formInput) => {
    const formError = formElement.querySelector(`#${formInput.id}-error`);
    formInput.classList.remove('popup__form-item_type_error');
    formError.classList.remove('form__input-error_active');
    formError.textContent = '';
    
  };

  const isValid = (formElement, formInput) => {
    if (!formInput.validity.valid) {
      
      showInputError(formElement, formInput, formInput.validationMessage);
    } else {
      
      hideInputError(formElement, formInput);
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

  const toggleButtonState = (inputList, button) => {
       if (hasInvalidInput(inputList)) {
        button.classList.add('popup__save-button_inactive');
        button.disabled = 'disabled';
    } else {
        button.classList.remove('popup__save-button_inactive');
        button.disabled = false;
    }
  };   

  const setEventListeners = (formElement) => {
    const inputList = Array.from(formElement.querySelectorAll('.popup__form-item'));
    const buttonElement = formElement.querySelector('.popup__save-button');
    toggleButtonState(inputList, buttonElement);
     inputList.forEach((formInput) => {
      formInput.addEventListener('input', () => {
       isValid(formElement, formInput);
       toggleButtonState(inputList, buttonElement);
      });
    });
  };

  const enableValidation = () => {
    const formList = Array.from(document.querySelectorAll('.popup__form'));
  
    formList.forEach((formElement) => {
      formElement.addEventListener('submit', (evt) => {
     
        evt.preventDefault();
      });
       
      setEventListeners(formElement);
    });
  };
 
  enableValidation(); 
 //   const validationConfig = {
//       formElement: '.popup__form',
//       formInput: '.popup__form-item',
//       buttonElement: '.popup__button',
//       inactiveButtonClass: 'popup__button_inactive',
//       inputErrorClass: 'form__input_type_error',
//       errorClass: 'form__input-error_active'
//  }

