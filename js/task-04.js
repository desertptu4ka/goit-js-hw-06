let counterValue = 0;

const counter = document.querySelector('#value');
const decrement = document.querySelector('[data-action=decrement]');
const increment = document.querySelector('[data-action=increment]');

const counterUpdate = () => {
  counter.textContent = counterValue;
};

const counterChange = function () {
  counterValue += Number(event.target.textContent);
  counterUpdate();
};

counterUpdate();
decrement.addEventListener('click', counterChange);
increment.addEventListener('click', counterChange);
