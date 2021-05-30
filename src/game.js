import Field from './field.js';
import * as sound from './sound.js';


export const Reason = Object.freeze({
  win: "win",
  lose: "lose",
  cancle: "cancle"
});

export const ItemType = Object.freeze({
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


class Game {
  constructor(gameDuration, birdCount) {
    this.gameDuration = gameDuration;
    this.birdCount = birdCount;
    this.gameButton = document.querySelector(".game__button");
    this.gameScore = document.querySelector(".game__score");
    this.gameTimer = document.querySelector(".game__time");
    this.gameBullet = document.querySelector(".game__bullet");
    this.gameButton.addEventListener("click", () => {
      if (this.started) {
        this.stop(Reason.cancle);
      } else {
        this.start();
      }
    });

    this.gameField = new Field(birdCount);
    this.gameField.setClickListener(this.onItemClick);

    this.started = false;
    this.score = 0;
    this.timer = undefined;
  }

  setGameStopListener(onGameStop) {
    this.onGameStop = onGameStop;
  }

  start() {
    this.started = true;
    this.initGame();
    this.updateScore();
    this.showScoreAndTimer();
    this.showStopButton();
    this.startTimer();
    sound.backgroundSound();
  }

  stop(reason) {
    this.started = false;
    this.stopGameTimer();
    this.hideStopButton();
    this.onGameStop && this.onGameStop(reason);
  }

  initGame() {
    this.score = 0;
    this.gameField.init();
    this.gameField.innerHTML = "";
  }

  onItemClick = (item) => {
    if (item === ItemType.bird) {
      this.score++;
      this.updateScore();

      if (this.score === this.birdCount) {
        this.stop(Reason.win);
      }
    }
  };

  startTimer() {
    let remainSec = this.gameDuration;
    this.updateTimer(remainSec);
    this.timer = setInterval(() => {
      if (remainSec <= 0) {
        clearInterval(this.timer);
        this.stop(Reason.lose);
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

  stopGameTimer() {
    clearInterval(this.timer);
  }

  updateScore() {
    this.gameScore.innerHTML = this.birdCount - this.score;
  }

  showStopButton() {
    const icon = document.querySelector(".fas");
    icon.classList.remove("fa-play");
    icon.classList.add("fa-stop");
  }

  hideStopButton() {
    this.gameButton.style.visibility = "hidden";
  }

  showScoreAndTimer() {
    this.gameScore.style.visibility = "visible";
    this.gameTimer.style.visibility = "visible";
  }
}



   

   


