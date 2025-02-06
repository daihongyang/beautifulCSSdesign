
let range = document.querySelector('.range');
const number = document.querySelector('.number');
let water = document.querySelector('.water');
const btn = document.querySelector('.button')
const len = 220;

function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}
function handleChange() {
    const value = parseInt(range.value);
    parseInt(water.style.top);
    water.style.top = (100 - value) * len * 0.01 + 'px';
    number.innerHTML = value;
}

setInterval(() => {
    let r = getRandom(0, 200);
    let g = getRandom(0, 200);
    let b = getRandom(0, 200);
    let rgb = `rgb(${r},${g},${b})`;
    water.style.backgroundColor = rgb;
}, 1000);
window.onload = handleChange;
range.addEventListener('input', handleChange);
