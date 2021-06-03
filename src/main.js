'use strict';

import { Reason, GameBuilder} from './game.js';
import Popup from './popup.js';
import * as sound from './sound.js'


const gameFinishBanner = new Popup();

const game = new GameBuilder()//
    .withGameDuration(1)
    .withCrystalCount(5)
    .withBatCount(5)
    .build()

game.setGameStopListener(reason => {
    let message;
    switch(reason) {
        case Reason.win :
            message = 'YOU WIN!!';
            sound.winnerSound();
            break;
        case Reason.lose :
            message = 'You LOSE..😂';
            sound.popupSound();
            sound.stopBackGroundSound();
            break;
        case Reason.cancle :
            message = 'Retry?';
            sound.alertSound();
            break;
        default :
            throw new Error('error');
        }        
        gameFinishBanner.showWithText(message);
    });

    gameFinishBanner.setClickListener(() => {
        game.start();
    })









