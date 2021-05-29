'use strict';

import { Reason, GameBuilder} from './game.js';
import Popup from './popup.js';
import * as sound from './sound.js'

// const horizontal = document.querySelector('.horizontal');
// const vertical = document.querySelector('.vertical');
// const target = document.querySelector('.target');

// let bullets = [];


const gameFinishBanner = new Popup();

const game = new GameBuilder()//
    .withGameDuration(15)
    .withBirdCount(5)
    .build()

game.setGameStopListener(reason => {
    let message;
    switch(reason) {
        case Reason.win :
            message = 'YOU WIN!!';
            sound.
            break;
        case Reason.lose :
            message = 'LOSE...';
            break;
        case Reason.cancle :
            message = 'Retry?';
            break;
        default :
            throw new Error('error');
        }        
        gameFinishBanner.showWithText(message);
    });

    gameFinishBanner.setClickListener(() => {
        game.start();
    })





// function addBullet(className, imgPath, count) {
//     for(let i = 0 ; i < count; i++) {
//         const span = document.createElement('span');
//         const bullet = document.createElement('img');
//         bullet.setAttribute('class', className);
//         bullet.setAttribute('src', imgPath);
        
//         const newId = bullets.length + 1;
//         bullet.id = newId;
//         span.appendChild(bullet);
//         gameBullet.appendChild(span);
//         const bulletObj = {
//             id: newId
//         }
//         bullets.push(bulletObj);    
//     }
    
// }


// document.addEventListener("mousemove", (event) => {
//   mouseTarget(event);
// });

// function mouseTarget(e) {
//   const x = e.clientX;
//   const y = e.clientY;

//   vertical.style.left = `${x}px`;
//   horizontal.style.top = `${y}px`;
//   target.style.left = `${x}px`;
//   target.style.top = `${y}px`;
// }



