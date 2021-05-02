const horizontal = document.querySelector('.horizontal');
const vertical = document.querySelector('.vertical');
const target = document.querySelector('.target');

const field = document.querySelector('.game__field');
const fieldRect = field.getBoundingClientRect();


document.addEventListener('mousemove', e => {
    const x = e.clientX;
    const y = e.clientY;

    vertical.style.left = `${x}px`;
    horizontal.style.top = `${y}px`;
    target.style.left = `${x}px`;
    target.style.top = `${y}px`;
})

