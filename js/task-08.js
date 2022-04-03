const form = document.querySelector('.login-form');

const clickSubmit = () => {
    event.preventDefault();

    let{
        elements: {email, password}
    } = event.currentTarget;

    email = email.value;
    password = password.value;

    if(!email || !password) {
        alert("Fill in all filds");
        return;
    }

    const result = {
        email,
        password,
    };
    
    console.log(result);
    event.currentTarget.reset();
}

form.addEventListener('submit', clickSubmit);

