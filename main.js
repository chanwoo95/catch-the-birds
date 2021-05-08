'use strict';

const horizontal = document.querySelector('.horizontal');
const vertical = document.querySelector('.vertical');
const target = document.querySelector('.target');

const field = document.querySelector('.game__field');
const fieldRect = field.getBoundingClientRect();

const gameContainer = document.querySelector('.container');
const gameButton = document.querySelector('.game__button');
const gameScore = document.querySelector('.game__score');
const gameTime = document.querySelector('.game__time');
const gameBullet = document.querySelector('.game__bullet');

const popup = document.querySelector('.popup');
const popupButton = document.querySelector('.popup__button');
const popupMessage = document.querySelector('.popup__message');

const bgSound = new Audio('sound/bg.mp3')
// bgSound.play();

const BIRD_COUNT = 5;
const BULLET_COUNT = 3;
const BIRD_SIZE = 80;


let bullets = [];
let score = 0;

addItem("bird", "img/bird.png", BIRD_COUNT);
addBullet('bullet', 'img/bullet.png', BULLET_COUNT);


function updateScore() {
    gameScore.innerHTML = BIRD_COUNT - score;
}

gameButton.addEventListener('click', () => {
    startGame();
})

field.addEventListener('click', onFieldClick);

function onFieldClick() {
    const target = event.target;
    if(target.matches('.bird')) {
        target.remove();
        score++;
        updateScore()
    } 
    if( score === BIRD_COUNT ) {
        // finishGame();
    }
}

function initGame() {
    showTimerAndScore();
}

function startGame() {
    updateScore();
    

    // showScoreAndTimer();
}

function stopGame() {
    showPopupWithText('Retry?');
}

function showScoreAndTimer() {
    gameScore.style.visibility = 'visibility';
    gameTimer.style.visibility = 'visibility';
}


function showPopupWithText(text) {
    popup.classList.remove('popup--hide');
    popupMessage.innerHTML = text;
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
    // gameContainer.addEventListener('click', () => {
    //     // let pop = bullets.pop();
    //     // bullets.removeChild(pop);
    // })

   
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



