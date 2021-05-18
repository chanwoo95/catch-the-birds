export default class Field {
    constructor() {
        this.field = document.querySelector('.game__field');
        this.fieldRect = field.getBoundingClientRect();
    }

    setClickListener(onItemClick) {
        this.onItemClick = onItemClick;
    }
}