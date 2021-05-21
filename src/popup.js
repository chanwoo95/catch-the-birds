class Popup {
    constructor() {
        this.popup = document.querySelector('.popup');
        this.popupButton = docuemnt.querySelector('.popup__button');
        this.popupMessage = document.querySelector('.popup__message');
        popupButton.addEventListener('click', () => {
            hidePopup();
            start();
        })
        
        hidePopup() {
            this.popup.classList.add('popup--hide');
        }
        
        showPopupWithText(text) {
            this.popup.classList.remove('popup--hide');
            this.popupMessage.textContent = text;
        }
    }
}