const input = document
  .querySelector('#controls')
  .querySelector(['[type=number]']);
const buttonCreate = document.querySelector(['[data-create]']);
const buttonDestroy = document.querySelector(['[data-destroy]']);
const boxes = document.querySelector(['#boxes']);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

// функция getAdjustedColor для коректировки случайного цвета,
// т.к. в процессе тестирования
// функция getRandomHexColor выдавала
// не валидные значения, например : #c4aef и #9891
// из за чего element.style.backgroundColor
// не мог присвоить значения, и получался белый квадрат,
// который не видно на белом фоне.

function getAdjustedColor() {
  let color = getRandomHexColor();
  const hexLength = 7;
  if (color.length === hexLength) {
    return color;
  }
  const adjustNumber = hexLength - color.length;
  const randomNumber = parseInt(Math.random() * 10 * adjustNumber);
  // console.log(randomNumber);
  return color + randomNumber;
}

const defaultSettings = {
  size: 30,
  step: 10,
};

function createBoxes() {
  const number = Number(input.value);
  if (!number) {
    alert('You have to write a number');
    return;
  }

  const { size, step } = defaultSettings;
  const elementsArr = [];
  for (let i = 0; i < number; i += 1) {
    const div = document.createElement('div');
    div.style.height = size + step * i + 'px';
    div.style.width = div.style.height;
    div.style.backgroundColor = getAdjustedColor();
    elementsArr.push(div);
  }
  destroyBoxes();
  boxes.append(...elementsArr);
}

function destroyBoxes() {
  boxes.innerHTML = '';
}

buttonCreate.addEventListener('click', createBoxes);
buttonDestroy.addEventListener('click', destroyBoxes);
