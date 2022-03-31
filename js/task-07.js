const input = document.querySelector('#font-size-control');
const text = document.querySelector('#text');

const changeSize = () => {
    const value = event.target.value + "px";
    text.style.fontSize = value;
}

input.addEventListener('input', changeSize);
input.dispatchEvent(new Event('input'));