function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const button = document.querySelector('.change-color');
const span = document.querySelector('.color');

function changeColor() {
  const color = getRandomHexColor();
  span.innerText = color;
  document.querySelector('body').style.backgroundColor = color;
}

button.onclick = changeColor;