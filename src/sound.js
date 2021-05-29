const bgSound = new Audio('./sound/bg.mp3');
const gunSound = new Audio('./sound/shotgun.mp3');
const winSound = new Audio('./sound/win.mp3');
const alert = new Audio('./sound/alert.mp3');

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

function playSound(sound) {
    sound.play();
}