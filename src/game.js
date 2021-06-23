import Field from './field.js';
import * as sound from './sound.js';


export const Reason = Object.freeze({
  win: "win",
  lose: "lose",
  cancle: "cancle"
});

export const ItemType = Object.freeze({
    crystal: 'crystal',
    bat: 'bat'
})

export class GameBuilder {
  withGameDuration(duration) {
    this.gameDuration = duration;
    return this;
  }

  withCrystalCount(countNum) {
    this.crystalCount = countNum;
    return this;
  }

  withBatCount(countNum) {
    this.batCount = countNum;
    return this;
  }

  build() {
    return new Game(this.gameDuration, this.crystalCount, this.batCount);
  }
}


class Game {
  constructor(gameDuration, crystalCount, batCount) {
    this.gameDuration = gameDuration;
    this.crystalCount = crystalCount;
    this.batCount = batCount;
    this.gameButton = document.querySelector(".game__button");
    this.gameScore = document.querySelector(".game__score");
    this.gameTimer = document.querySelector(".game__time");
    this.gameBullet = document.querySelector(".game__bullet");
    this.gameLevel = document.querySelector(".top__stage");
    this.icon = document.querySelector(".fa-play");
    this.gameButton.addEventListener("click", () => {
      if (this.started) {
        this.stop(Reason.cancle);
      } else {
        this.start();
      }
    });

    this.gameField = new Field(crystalCount, batCount);
    this.gameField.setClickListener(this.onItemClick);


    this.level = 1;
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
    if (item === ItemType.crystal) {
      this.score++;
      this.updateScore();

      if (this.score === this.crystalCount) {
        this.stop(Reason.win);
      }
    }
    else if( item === ItemType.bat) {
      this.stop(Reason.lose);
    }
  };

  startTimer() {
    let remainSec = this.gameDuration;
    this.updateTimer(remainSec);
    this.timer = setInterval(() => {
      if (remainSec <= 0) {
        clearInterval(this.timer);
        this.stop(Reason.lose);
        sound.stopCountSound();
        return;
      }
      this.updateTimer(--remainSec);

      if( remainSec<=5) {
        sound.countSound();
      }
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
    this.gameScore.innerHTML = this.crystalCount - this.score;
  }

  showStopButton() {
     this.icon.classList.remove("fa-play");
     this.icon.classList.add("fa-stop");
  }

  hideStopButton() {
    this.gameButton.style.visibility = "hidden";
  }

  showScoreAndTimer() {
    this.gameScore.style.visibility = "visible";
    this.gameTimer.style.visibility = "visible";
  }
}



   

   


