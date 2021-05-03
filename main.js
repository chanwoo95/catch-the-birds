const horizontal = document.querySelector('.horizontal');
const vertical = document.querySelector('.vertical');
const target = document.querySelector('.target');

const field = document.querySelector('.game__field');
const fieldRect = field.getBoundingClientRect();

const BIRD_COUNT = 5;
const BIRD_SIZE = 80;


document.addEventListener('mousemove', e => {
    const x = e.clientX;
    const y = e.clientY;

    vertical.style.left = `${x}px`;
    horizontal.style.top = `${y}px`;
    target.style.left = `${x}px`;
    target.style.top = `${y}px`;
})

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

function randomNum(min, max) {
    return Math.random() * (max - min) + min;
}

    addItem('bird', 'img/bird.png', BIRD_COUNT);

