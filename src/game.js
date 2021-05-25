

export const Reason = Object.freeze({
  win: "win",
  lose: "lose",
  cancle: "cancle"
});

export const Itemtype = Object.freeze({
    bird: 'bird'
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
    return new Game(this.gameDuration, this.birdCount);
  }
}


export default class Game {
    constructor(birdCount) {
        this.birdCount = birdCount;
        this.gameButton = document.querySelector('.game__button');
        this.gameScore = document.querySelector('.game__score');
        this.gameTimer = document.querySelector(".game__time");
        this.gameBullet = document.querySelector(".game__bullet");
        this.gameButton.addEventListener('click', () => {
            if(this.started) {
                stop(Reason.cancle);
            } else {
                start();
            }
        })

        this.started = false;
        this.score = 0;
        this.timer = undefined;
    }

    setGameStopListener(onGameStop) {
        this.onGameStop = onGameStop;
    }
        

        start() {
            this.started = true;
            this.init();
            this.updateScore();
            this.showScoreAndTimer();
            this.showStopButton();
            this.startTimer();
        }

        stop() {
            this.started = false;
            this.showPopupWithText(Reason.cancle);
            this.hideStopButton();
            clearInterval(timer);
        }

       onItemClick = item => {
        if(item === Itemtype.bird) {
            this.score++;
            this.updateScore();
            
            if(this.score === this.birdCount) {
                this.stop(Reason.win);
            }
        }
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

        updateScore() {
            this.gameScore.innerHTML = this.birdCount - this.score;
        }

        showStopButton() {
            const icon = document.querySelector('.fas');
            icon.classList.remove('fa-play');
            icon.classList.add('fa-stop');
        }

        hideStopButton() {
            this.gameButton.style.visibility = 'hidden';
        }

        showScoreAndTimer() {
            this.gameScore.style.visibility = 'visible';
            this.gameTimer.style.visiblity = 'visible';
        }

    }



   

   


