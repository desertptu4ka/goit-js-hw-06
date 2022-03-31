const input = document.querySelector('#name-input');
const span = document.querySelector('#name-output');

const typing = function() {
    const value = event.target.value;
    if(value) {
        span.innerText = value;
    } else {
        span.innerText = 'Anonymous';
    }
}

input.addEventListener('input', typing);