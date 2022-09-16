import Popup from "./Popup.js";
export default class PopupWithImage extends Popup {
    constructor (popupSelector) {
        super(popupSelector)
    }

    open({link, name}) { 
        this._popup.querySelector('.image-popup__image').src = link;
        
        this._popup.querySelector('.image-popup__caption').textContent = name;      

        super.open();
    }
}