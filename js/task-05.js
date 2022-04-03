const input = document.querySelector('#name-input');
const span = document.querySelector('#name-output');

const typing = function() {
    const value = event.target.value;
    span.innerText = value ? value : 'Anonymous';
}

input.addEventListener('input', typing);