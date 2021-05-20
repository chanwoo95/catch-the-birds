
const GAME_SEC = 30;

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

        start() {
            this.started = true;
            this.initGame();
            this.updateScore();
            this.showScoreAndTimer();
            this.showStopButton();
            this.startTimer();
        }

        stop() {
            this.started = false;
            this.showPopupWithText('Retry?');
            this.hideStopButton();
            clearInterval(timer);
        }

        startTimer() {
            let remainSec = GAME_SEC;
            this.updateTimer(remainSec);
            this.timer = setInterval(() => {
                if(remainSec <= 0) {
                    clearInterval(timer);
                    this.finish(false);
                    return;
                }
                this.updateTimer(--remainSec);
            }, 1000);
        }

        updateTimer(time) {
            const minutes = Math.floor(time / 60);
            const seconds = time % 60;
            this.gameTimer.innerHTML = `${minutes}:${seconds}`;
        }
    }



   

   


