const bgSound = new Audio('./sound/background.mp3');
const winSound = new Audio('./sound/win.mp3');
const alert = new Audio('./sound/alert.wav');
const popup = new Audio('./sound/popup.mp3');
const countAlert = new Audio('./sound/count.mp3');

export function countSound() {
    playSound(countAlert);
}

export function stopCountSound() {
    stopSound(countAlert);
}

export function backgroundSound() {
    playSound(bgSound);
    bgSound.loop = true;
}

export function gunshotSound() {
    playSound(gunSound)
}

export function winnerSound() {
    playSound(winSound);
}

export function alertSound() {
    playSound(alert);
}

export function popupSound() {
    playSound(popup);
}

export function stopBackGroundSound() {
    stopSound(bgSound);
}

function stopSound(sound) {
    sound.pause();
}

function playSound(sound) {
    sound.play();
}

