

export default class Field {
    constructor() {
        this.field = document.querySelector('.game__field');
        this.fieldRect = field.getBoundingClientRect();
        this.field.addEventListener()
    }

    setClickListener(onItemClick) {
        this.onItemClick = onItemClick;
    }

    onItemClick() {
        if(!started) {
            return;
        }

        this.target = event.target;
        if(this.target.matches('.bird')) {
            this.target.remove();
            
        }
        if(this.score === this.BIRD_COUNT) {
            this.finish();
        }
    }

    _addItem(className, imgPath, count) {
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

            this.field.appendChild(item);
        }
    }
}

function randomNum(min, max) {
    return Math.random() * (max - min) + min;
}