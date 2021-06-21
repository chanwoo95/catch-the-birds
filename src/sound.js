const bgSound = new Audio('./sound/background.mp3');
const winSound = new Audio('./sound/win.mp3');
const alert = new Audio('./sound/alert.wav');
const popup = new Audio('./sound/popup.mp3');
const countAlert = new Audio('./sound/count.mp3');
const openMenu = new Audio('./sound/show_menu.mp3');
const closeMenu = new Audio('./sound/close_menu.mp3');
const clickSound = new Audio('./sound/crystal.mp3');

export function crystalSound() {
    playSound(clickSound);
}

export function showMenuSound() {
    playSound(openMenu);
}

export function closeMenuSound() {
    playSound(closeMenu);
}

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

