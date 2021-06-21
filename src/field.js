import { ItemType } from './game.js';
import * as sound from './sound.js';

const CRYSTAL_SIZE = 80;

export default class Field {
  constructor(crystalCount, batCount) {
    this.crystalCount = crystalCount;
    this.batCount = batCount;
    this.field = document.querySelector(".game__field");
    this.fieldRect = this.field.getBoundingClientRect();
    this.field.addEventListener("click", this.onClick);
  }

  setClickListener(onItemClick) {
    this.onItemClick = onItemClick;
  }

  onClick = (event) => {
    const target = event.target;

    if (target.matches(".crystal")) {
      sound.crystalSound();
      target.remove();
      this.onItemClick && this.onItemClick(ItemType.crystal);
    }
    if (target.matches(".bat")) {
      this.onItemClick && this.onItemClick(ItemType.bat);
    }
  }

  init() {
    this.score = 0;
    this.field.textContent = "";
    this._addItem("crystal", "/img/crystal.png", this.crystalCount);
    this._addItem("bat", "/img/bat.png", this.batCount);
  }

  _addItem(className, imgPath, count) {
    const x1 = 0;
    const y1 = 0;

    const x2 = this.fieldRect.width - CRYSTAL_SIZE;
    const y2 = this.fieldRect.height - CRYSTAL_SIZE;

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
