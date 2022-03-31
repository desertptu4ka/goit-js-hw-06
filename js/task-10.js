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
  if(color.length === 7) {
    return color;
  }
  const adjustNumber = 7 - color.length;
  const randomNumber = parseInt(Math.random() * 10 * adjustNumber);
  // console.log(randomNumber);
  return color + randomNumber;
}


const input = document.querySelector('#controls').querySelector(['[type=number]']);
const buttonCreate = document.querySelector(['[data-create]']);
const buttonDestroy = document.querySelector(['[data-destroy]']);
const boxes = document.querySelector(['#boxes']);

const defaultSettings = {
  height: 30,
  width: 30,
}

function createDivs() {
  const number = Number(input.value);
  if(!number) {
    alert("You have to write a number");
    return;
  }

  const {height, width} = defaultSettings;
  const elementsArr = [];
  for(let i = 0; i < number; i += 1) {
    const div = document.createElement('div');
    div.style.height = height + height * i + "px";
    div.style.width = width + width * i + "px";
    div.style.backgroundColor = getAdjustedColor();
    elementsArr.push(div);
  }
  boxes.append(...elementsArr);
}

function boxesClear() {
  boxes.innerHTML = '';
}

buttonCreate.onclick = createDivs;
buttonDestroy.onclick = boxesClear;