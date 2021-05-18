
let started = false;

class Game {
    constructor() {
        this.gameButton = document.querySelector('.game__button');
        this.gameScore = document.querySelector('.game__score');
        this.gameTimer = document.querySelector(".game__time");
        this.gameBullet = document.querySelector(".game__bullet");
        this.gameButton.addEventListener('click', () => {
            if(!started) {
                start();
            } else {
                stop();
            }
        })
    }

    

   


}