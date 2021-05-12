'use strict';

const horizontal = document.querySelector('.horizontal');
const vertical = document.querySelector('.vertical');
const target = document.querySelector('.target');

const field = document.querySelector('.game__field');
const fieldRect = field.getBoundingClientRect();

const gameContainer = document.querySelector('.container');
const gameButton = document.querySelector('.game__button');
const gameScore = document.querySelector('.game__score');
const gameTimer = document.querySelector('.game__time');
const gameBullet = document.querySelector('.game__bullet');

const popup = document.querySelector('.popup');
const popupButton = document.querySelector('.popup__button');
const popupMessage = document.querySelector('.popup__message');

const bgSound = new Audio('sound/bg.mp3')
// bgSound.play();
const gunSound = new Audio('sound/shotgun.mp3');

const BIRD_COUNT = 5;
const BULLET_COUNT = 3;
const BIRD_SIZE = 80;
const GAME_SEC = 15;

let timer = undefined;
let bullets = [];
let score = 0;
let started = false;


gameButton.addEventListener('click', () => {
    if(!started) {
        startGame();
    } else {
        stopGame();
    }
})

field.addEventListener('click', onFieldClick);

popupButton.addEventListener('click', () => {
    hidePopup();
    startGame();
})

function onFieldClick() {
    if (!started) {
      return;
    }
    gunSound.play();
    const target = event.target;
    if(target.matches('.bird')) {
        target.remove();
        score++;
        updateScore();
        
    } 
    if( score === BIRD_COUNT ) {
        finishGame(true);
    }
}

function initGame() {
    score = 0;
    field.textContent = '';
    gameBullet.textContent = '';
    addItem("bird", "img/bird.png", BIRD_COUNT);
    addBullet("bullet", "img/bullet.png", BULLET_COUNT);
}

function finishGame(win) {
    started = false;
    showPopupWithText(win ? 'YOU WIN!!!' : 'YOU LOSE...');
    hideStopButton();
    clearInterval(timer);
}

function startGame() {
    started = true;
    initGame();
    updateScore();
    showScoreAndTimer();
    showStopButton();
    startTimer();
    
}

function stopGame() {
    started= false;
    showPopupWithText('Retry?');
    hideStopButton();
    clearInterval(timer);
}

function startTimer() {
    let remainSec = GAME_SEC; //전역변수를 왜 지역변수에 할당해서 사용해야할까?
    updateTimer(remainSec);
    timer = setInterval(() => {
        if(remainSec <= 0) {
            clearInterval(timer);
            finishGame(false)
            return;
        }
        updateTimer(--remainSec);
    }, 1000)
}

function updateTimer(time) {
    const minutes = Math.floor(time / 60)
    const seconds = time % 60;
    gameTimer.innerHTML = `${minutes}:${seconds}`;
}

function hidePopup() {
    popup.classList.add('popup--hide');
}

function showStopButton() {
    const icon = document.querySelector('.fas');
    icon.classList.remove('fa-play');
    icon.classList.add('fa-stop');
}

function hideStopButton() {
    gameButton.style.visibility = 'hidden';
}

function showScoreAndTimer() {
    gameScore.style.visibility = 'visible';
    gameTimer.style.visibility = 'visible';
}


function showPopupWithText(text) {
    popup.classList.remove('popup--hide');
    popupMessage.textContent = text;
}

function updateScore() {
  gameScore.innerHTML = BIRD_COUNT - score;
}


function addItem(className, imgPath, count) {
    const x1 = 0;
    const y1 = 0;

    const x2 = fieldRect.width - BIRD_SIZE;
    const y2 = fieldRect.height - BIRD_SIZE;

    for(let i = 0; i < count; i++) {
        const item = document.createElement('img');
        item.setAttribute('class', className);
        item.setAttribute('src', imgPath);

        const x = randomNum(x1, x2);
        const y = randomNum(y1, y2);

        item.style.position = 'absolute';
        item.style.left = `${x}px`;
        item.style.top = `${y}px`;

        field.appendChild(item);
    }
}

function addBullet(className, imgPath, count) {
    for(let i = 0 ; i < count; i++) {
        const span = document.createElement('span');
        const bullet = document.createElement('img');
        bullet.setAttribute('class', className);
        bullet.setAttribute('src', imgPath);
        
        const newId = bullets.length + 1;
        bullet.id = newId;
        span.appendChild(bullet);
        gameBullet.appendChild(span);
        const bulletObj = {
            id: newId
        }
        bullets.push(bulletObj);

    }
    gameContainer.addEventListener('click', () => {
        console.log('click')
        // let pop = bullets.pop();
        // bullets.removeChild(pop);
    })

   
}

function randomNum(min, max) {
    return Math.random() * (max - min) + min;
}

document.addEventListener("mousemove", (event) => {
  mouseTarget(event);
});

function mouseTarget(e) {
  const x = e.clientX;
  const y = e.clientY;

  vertical.style.left = `${x}px`;
  horizontal.style.top = `${y}px`;
  target.style.left = `${x}px`;
  target.style.top = `${y}px`;
}



