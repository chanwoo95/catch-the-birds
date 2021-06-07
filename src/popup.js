

export default class Popup {
    constructor() {
        this.info = document.querySelector('.top__info');
        this.popup = document.querySelector('.popup');
        this.popupButton = document.querySelector('.popup__button');
        this.popupMessage = document.querySelector('.popup__message');
        this.popupButton.addEventListener('click', () => {
            this.onClick && this.onClick();
            this.hide();
        });
    }

        setClickListener(onClick) {
            this.onClick = onClick;
        }
        
        hide() {
            this.popup.classList.add('popup--hide');
        }
        
        showWithText(text) {
            this.popup.classList.remove('popup--hide');
            this.popupMessage.textContent = text;
        }
}