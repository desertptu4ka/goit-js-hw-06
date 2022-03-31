let counterValue = 0;

const counter = document.querySelector('#value');
const decrement = document.querySelector('[data-action=decrement]');
const increment = document.querySelector('[data-action=increment]');

const counterUpdate = () => {
    counter.innerHTML = counterValue;
}

const decrementFun = function() {
    counterValue += Number(decrement.textContent);
    counterUpdate();
}

const incrementFun = function(){
    counterValue += Number(increment.textContent);
    counterUpdate();
}

counterUpdate();
decrement.addEventListener('click', decrementFun);
increment.addEventListener('click', incrementFun);