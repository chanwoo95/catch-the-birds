import { ItemType } from './game.js';

const BIRD_SIZE = 80;

export default class Field {
  constructor(birdCount) {
    this.birdCount = birdCount;
    this.field = document.querySelector(".game__field");
    this.fieldRect = this.field.getBoundingClientRect();
    this.field.addEventListener("click", this.onClick);
  }

  setClickListener(onItemClick) {
    this.onItemClick = onItemClick;
  }

  onClick = (event) => {
    const target = event.target;

    if (target.matches(".bird")) {
      target.remove();
      this.onItemClick && this.onItemClick(ItemType.bird);
    }
  }

  init() {
    this.score = 0;
    this.field.textContent = "";
    // this.gameBullet.textContent = '';
    this._addItem("bird", "/img/bird.png", this.birdCount);
    // this.addBullet("bullet", "img/bullet.png", BULLET_COUNT);
  }

  _addItem(className, imgPath, count) {
    const x1 = 0;
    const y1 = 0;

    const x2 = this.fieldRect.width - BIRD_SIZE;
    const y2 = this.fieldRect.height - BIRD_SIZE;

    for (let i = 0; i < count; i++) {
      const item = document.createElement("img");
      item.setAttribute("class", className);
      item.setAttribute("src", imgPath);

      const x = randomNum(x1, x2);
      const y = randomNum(y1, y2);

      item.style.position = "absolute";
      item.style.left = `${x}px`;
      item.style.top = `${y}px`;

      this.field.appendChild(item);
    }
  }
}

function randomNum(min, max) {
  return Math.random() * (max - min) + min;
}
