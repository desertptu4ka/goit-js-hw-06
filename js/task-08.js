const form = document.querySelector('.login-form');

const clickSubmit = () => {
  event.preventDefault();

  const {
    elements: { email, password },
  } = event.currentTarget;

  if (!email || !password) {
    alert('Fill in all filds');
    return;
  }

  const result = {
    email: email.value,
    password: password.value,
  };

  console.log(result);
  event.currentTarget.reset();
};

form.addEventListener('submit', clickSubmit);
