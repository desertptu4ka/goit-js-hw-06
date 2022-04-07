const input = document.querySelector('#validation-input');
const rule = Number(input.dataset.length);

const checkValidation = function () {
  const value = event.target.value.length;

  if (value !== rule) {
    input.classList.add('invalid');
    input.classList.remove('valid');
  } else {
    input.classList.add('valid');
    input.classList.remove('invalid');
  }
};

input.addEventListener('blur', checkValidation);
