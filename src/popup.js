import Game from './game';

export const Reason = Object.freeze({
    win: 'win',
    lose: 'lose',
    retry: 'retry'
})

export class GameBuilder {
    withGameDuration(duration) {
        this.gameDuration = duration; 
        return this;
    }

    withBirdCount(countNum) {
        this.birdCount = countNum;
        return this;
    }

    build() {
        return new Game(
            this.gameDuration,
            this.birdCount,
        )
    }
}

    

export default class Popup {
    constructor() {
        this.popup = document.querySelector('.popup');
        this.popupButton = document.querySelector('.popup__button');
        this.popupMessage = document.querySelector('.popup__message');
        this.popupButton.addEventListener('click', () => {
            this.onClick && this.onClick();
            hide();
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