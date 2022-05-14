//console.log('Hello, world!');

const openButton = document.querySelector('.profile__button');
const popup = document.querySelector('.popup');
const closeButton = document.querySelector('.popup__close-icon');

console.log({openButton, 
            popup, 
            closeButton});

function togglePopup() {
    popup.classList.toggle('popup_opened')
}
openButton.addEventListener('click', togglePopup);
closeButton.addEventListener('click', togglePopup);

popup.addEventListener('click', function(event){
    if (event.target === event.currentTarget)
    togglePopup();
})