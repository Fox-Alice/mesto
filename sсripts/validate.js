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
  
  
 // formInput.addEventListener('input', isValid); 

  const setEventListeners = (formElement) => {
    // Находим все поля внутри формы,
    // сделаем из них массив методом Array.from
    const inputList = Array.from(formElement.querySelectorAll('.popup__form-item'));
  
     inputList.forEach((formInput) => {
      formInput.addEventListener('input', () => {
       isValid(formElement, formInput)
      });
    });
  };

  const enableValidation = () => {
    // Найдём все формы с указанным классом в DOM,
    // сделаем из них массив методом Array.from
    const formList = Array.from(document.querySelectorAll('.popup__form'));
  
    // Переберём полученную коллекцию
    formList.forEach((formElement) => {
      formElement.addEventListener('submit', (evt) => {
        // У каждой формы отменим стандартное поведение
        evt.preventDefault();
      });
  
      // Для каждой формы вызовем функцию setEventListeners,
      // передав ей элемент формы
      setEventListeners(formElement);
    });
  };
  
  // Вызовем функцию
  enableValidation(); 
 //   const validationConfig = {
//       formElement: '.popup__form',
//       formInput: '.popup__form-item',
//       buttonElement: '.popup__button',
//       inactiveButtonClass: 'popup__button_inactive',
//       inputErrorClass: 'form__input_type_error',
//       errorClass: 'form__input-error_active'
//  }

