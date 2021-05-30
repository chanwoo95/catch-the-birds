const bgSound = new Audio('./sound/bg.mp3');
const gunSound = new Audio('./sound/shotgun.mp3');
const winSound = new Audio('./sound/win.mp3');
const alert = new Audio('./sound/alert.wav');

export function backgroundSound() {
    playSound(bgSound);
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

export function stopBackGroundSound() {
    stopSound(bgSound);
}

function stopSound(sound) {
    sound.pause();
}

function playSound(sound) {
    sound.play();
}

